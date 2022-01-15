import { writeFileSync, readFileSync } from "fs";
import { URL } from "url";
import { JSDocStructure, OptionalKind, Project } from "ts-morph";
import { camelCase } from "camel-case";
import prettier from "prettier";
import imgixParams from "imgix-url-params/dist/parameters.json";

export const BLANK_LINE_IDENTIFIER = "// ___BLANK_LINE_TO_BE_REPLACED___";

const typeMap = {
	ratio: "Ratio",
	hex_color: "string",
	color_keyword: "ColorKeyword",
	integer: "number",
	string: "string",
	unit_scalar: "number",
	url: "string",
	path: "string",
	number: "number",
	timestamp: "number",
	boolean: "boolean",
	font: "Font",
};

const possibleValueToTypeString = <T>(possibleValue: T): string => {
	switch (typeof possibleValue) {
		case "string": {
			return `"${possibleValue}"`;
		}

		default: {
			return `${possibleValue}`;
		}
	}
};

const expectsListToTypeString = (
	expectsList: typeof imgixParams.parameters[keyof typeof imgixParams.parameters]["expects"],
) => {
	const types = new Set<string>();

	for (const expect of expectsList) {
		switch (expect.type) {
			case "list": {
				if ("possible_values" in expect && expect.possible_values) {
					types.add(
						`(${expect.possible_values
							.map((possibleValue) => possibleValueToTypeString(possibleValue))
							.join(" | ")})[]`,
					);
				} else if ("length" in expect && expect.length) {
					const listTypes: string[] = [];

					for (let i = 0; i < expect.length; i++) {
						const expectsSubList = expect[
							i.toString() as keyof typeof expect
						] as typeof imgixParams.parameters[keyof typeof imgixParams.parameters]["expects"];

						listTypes.push(expectsListToTypeString(expectsSubList));
					}

					types.add(`[${listTypes.join(", ")}]`);
				}

				break;
			}

			default: {
				if ("possible_values" in expect && expect.possible_values) {
					for (const possibleValue of expect.possible_values) {
						types.add(possibleValueToTypeString(possibleValue));
					}
				} else {
					types.add(typeMap[expect.type as keyof typeof typeMap]);
				}
			}
		}
	}

	return [...types].join(" | ") || "unknown";
};

const generateUrlParamsTypes = (): string => {
	const project = new Project();
	const sourceFile = project.createSourceFile("imgixUrlParams.ts");

	sourceFile.addStatements(
		"// Types generated using `imgix-url-params` as a source.",
	);

	sourceFile.addStatements(BLANK_LINE_IDENTIFIER);

	sourceFile.addTypeAliases([
		{
			name: "Ratio",
			type: "`${number}:${number}`",
			isExported: true,
		},
		{
			name: "ColorKeyword",
			type: imgixParams.colorKeywordValues
				.map((value) => `"${value}"`)
				.join(" | "),
			isExported: true,
		},
		{
			name: "Font",
			type: imgixParams.fontValues.map((value) => `"${value}"`).join(" | "),
			isExported: true,
		},
	]);

	sourceFile.addStatements(BLANK_LINE_IDENTIFIER);

	const imgixURLParamsType = sourceFile.addInterface({
		name: "ImgixURLParams",
		properties: [],
		isExported: true,
	});

	for (const key in imgixParams.parameters) {
		const spec =
			imgixParams.parameters[key as keyof typeof imgixParams.parameters];

		const baseDocs: OptionalKind<JSDocStructure> = {
			description: (writer) => {
				writer.writeLine(spec.display_name);
				writer.blankLine();
				writer.writeLine(spec.short_description);
			},
			tags: [],
		};

		if ("url" in spec && baseDocs.tags) {
			baseDocs.tags.push({
				tagName: "see",
				text: spec.url,
			});
		}

		if ("default" in spec && baseDocs.tags) {
			baseDocs.tags.push({
				tagName: "defaultValue",
				text:
					typeof spec.default === "string"
						? `\`"${spec.default}"\``
						: `\`${spec.default}\``,
			});
		}

		const primaryDocs: OptionalKind<JSDocStructure> = {
			...baseDocs,
			description: (writer) => {
				if (typeof baseDocs.description === "function") {
					baseDocs.description(writer);
				}

				if ("aliases" in spec) {
					const aliases = spec.aliases
						.map((alias) => `\`${camelCase(alias)}\``)
						.join(", ");

					writer.blankLineIfLastNot();
					writer.writeLine(`Aliases: \`${aliases}\``);
				}
			},
		};

		imgixURLParamsType.addProperty({
			name: camelCase(key),
			type: expectsListToTypeString(spec.expects),
			hasQuestionToken: true,
			docs: [primaryDocs],
		});

		if ("aliases" in spec) {
			for (const alias of spec.aliases) {
				const aliasDocs: OptionalKind<JSDocStructure> = {
					...baseDocs,
					description: (writer) => {
						if (typeof baseDocs.description === "function") {
							baseDocs.description(writer);
						}

						writer.blankLineIfLastNot();
						writer.writeLine(`Alias for: \`${camelCase(key)}\``);
					},
				};

				imgixURLParamsType.addProperty({
					name: camelCase(alias),
					type: expectsListToTypeString(spec.expects),
					hasQuestionToken: true,
					docs: [aliasDocs],
				});
			}
		}
	}

	imgixURLParamsType.addProperty({
		name: "s",
		type: "string",
		hasQuestionToken: true,
		docs: [
			{
				description: (writer) => {
					writer.writeLine("Signed URL hash");
					writer.blankLine();
					writer.writeLine(
						"Secure a URL to prevent URL parameter changes. Note that this parameter requires a secret token and should only be generated on a server.",
					);
				},
				tags: [
					{
						tagName: "see",
						text: "https://docs.imgix.com/setup/securing-images",
					},
				],
			},
		],
	});

	const output = sourceFile
		.print()
		.replace(new RegExp(BLANK_LINE_IDENTIFIER, "g"), "");

	const prettierOptions = JSON.parse(
		readFileSync(new URL("../.prettierrc", import.meta.url).pathname, "utf8"),
	);
	const formattedOutput = prettier.format(output, {
		...prettierOptions,
		parser: "typescript",
	});

	return formattedOutput;
};

export const generateImgixURLParamsTypeFile = (): void => {
	const contents = generateUrlParamsTypes();
	const filename = new URL("../src/types.generated.ts", import.meta.url)
		.pathname;

	writeFileSync(filename, contents);
};

generateImgixURLParamsTypeFile();

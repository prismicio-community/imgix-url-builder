import { JSDocStructure, OptionalKind, Project } from "ts-morph";
import imgixParams from "imgix-url-params/dist/parameters.json";
import prettier from "prettier";
import { camelCase } from "camel-case";

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

export const generateUrlParamsTypes = (): string => {
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
		},
		{
			name: "ColorKeyword",
			type: imgixParams.colorKeywordValues
				.map((value) => `"${value}"`)
				.join(" | "),
		},
		{
			name: "Font",
			type: imgixParams.fontValues.map((value) => `"${value}"`).join(" | "),
		},
	]);

	sourceFile.addStatements(BLANK_LINE_IDENTIFIER);

	const imgixURLParamsType = sourceFile.addInterface({
		name: "ImgixURLParams",
		properties: [],
	});

	for (const key in imgixParams.parameters) {
		const spec =
			imgixParams.parameters[key as keyof typeof imgixParams.parameters];

		const docs: OptionalKind<JSDocStructure> = {
			description: (writer) => {
				writer.writeLine(spec.display_name);
				writer.blankLine();
				writer.writeLine(spec.short_description);
			},
			tags: [],
		};

		if ("url" in spec && docs.tags) {
			docs.tags.push({
				tagName: "see",
				text: spec.url,
			});
		}

		if ("default" in spec && docs.tags) {
			docs.tags.push({
				tagName: "default",
				text:
					typeof spec.default === "string"
						? `\`"${spec.default}"\``
						: `\`${spec.default}\``,
			});
		}

		imgixURLParamsType.addProperty({
			name: camelCase(key),
			type: expectsListToTypeString(spec.expects),
			hasQuestionToken: true,
			docs: [docs],
		});
	}

	const output = sourceFile
		.print()
		.replace(new RegExp(BLANK_LINE_IDENTIFIER, "g"), "");
	const formattedOutput = prettier.format(output, { parser: "typescript" });

	return formattedOutput;
};

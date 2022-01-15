import test from "ava";

import { buildURL } from "../src";

test("builds URL with params", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildURL(source, {
		width: 400,
	});
	const expected = "https://example.com/image.png?width=400";

	t.is(actual, expected);
});

test("retains existing params", (t) => {
	const source = "https://example.com/image.png?width=400";
	const actual = buildURL(source, {
		height: 300,
	});
	const expected = "https://example.com/image.png?width=400&height=300";

	t.is(actual, expected);
});

test("overrides existing params", (t) => {
	const source = "https://example.com/image.png?width=400";
	const actual = buildURL(source, {
		width: 800,
	});
	const expected = "https://example.com/image.png?width=800";

	t.is(actual, expected);
});

test("undefined params are not included", (t) => {
	const source = "https://example.com/image.png?width=400";
	const actual = buildURL(source, {
		height: undefined,
	});
	const expected = "https://example.com/image.png?width=400";

	t.is(actual, expected);
});

test("clears existing params if set to undefined", (t) => {
	const source = "https://example.com/image.png?width=400&height=300";
	const actual = buildURL(source, {
		height: undefined,
	});
	const expected = "https://example.com/image.png?width=400";

	t.is(actual, expected);
});

test("supports numeric params", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildURL(source, {
		sat: -100,
	});
	const expected = "https://example.com/image.png?sat=-100";

	t.is(actual, expected);
});

test("supports array params", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildURL(source, {
		auto: ["format", "compress"],
	});
	const expected = "https://example.com/image.png?auto=format%2Ccompress";

	t.is(actual, expected);
});

test("supports `s` param", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildURL(source, {
		s: "an-md5-signature",
	});
	const expected = "https://example.com/image.png?s=an-md5-signature";

	t.is(actual, expected);
});

test("converts camelCased params to param-case", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildURL(source, {
		maxWidth: 400,
	});
	const expected = "https://example.com/image.png?max-width=400";

	t.is(actual, expected);
});

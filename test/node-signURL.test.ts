import test from "ava";

import { signURL } from "../src/node";

test("signs a URL", (t) => {
	const source = "https://example.com/image.png";
	const actual = signURL(source, "token");
	const expected =
		"https://example.com/image.png?s=41d3f8c3629651c8bbb043ce092d2eee";

	t.is(actual, expected);
});

test("signs a URL with existing params", (t) => {
	const source = "https://example.com/image.png?width=400";
	const actual = signURL(source, "token");
	const expected =
		"https://example.com/image.png?width=400&s=72d5ac8cf655aec51fc58ff075161440";

	t.is(actual, expected);
});

test("existing `s` param is overridden", (t) => {
	const source = "https://example.com/image.png?s=abc";
	const actual = signURL(source, "token");
	const expected =
		"https://example.com/image.png?s=41d3f8c3629651c8bbb043ce092d2eee";

	t.is(actual, expected);
});

test("`s` param is always the last param", (t) => {
	const source = "https://example.com/image.png?s=abc&width=400";
	const actual = signURL(source, "token");
	const expected =
		"https://example.com/image.png?width=400&s=72d5ac8cf655aec51fc58ff075161440";

	t.is(actual, expected);
});

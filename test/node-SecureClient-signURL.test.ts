import test from "ava";

import { SecureClient } from "../src/node";

test("signs a URL", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.signURL("https://example.com/image.png");
	const expected =
		"https://example.com/image.png?s=41d3f8c3629651c8bbb043ce092d2eee";

	t.is(actual, expected);
});

test("signs a URL with existing params", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.signURL("https://example.com/image.png?width=400");
	const expected =
		"https://example.com/image.png?width=400&s=72d5ac8cf655aec51fc58ff075161440";

	t.is(actual, expected);
});

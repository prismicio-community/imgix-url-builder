import test from "ava";

import { SecureClient } from "../src/node";

test("builds a signed web proxy URL", (t) => {
	const client = new SecureClient({
		baseURL: "https://testing.imgix.net",
		secureURLToken: "token",
	});

	const source = "https://example.com/image.png";
	const actual = client.buildWebProxyURL(source);
	const expected =
		"https://testing.imgix.net/https%3A%2F%2Fexample.com%2Fimage.png?s=cf7288f15a2359132676fb4017db4898";

	t.is(actual, expected);
});

test("builds a signed web proxy URL with parameters", (t) => {
	const client = new SecureClient({
		baseURL: "https://testing.imgix.net",
		secureURLToken: "token",
	});

	const source = "https://example.com/image.png";
	const actual = client.buildWebProxyURL(source, {
		width: 400,
	});
	const expected =
		"https://testing.imgix.net/https%3A%2F%2Fexample.com%2Fimage.png?width=400&s=2ea052186b1b4b9f847855e28006bac7";

	t.is(actual, expected);
});

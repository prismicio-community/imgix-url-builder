import test from "ava";

import { SecureClient } from "../src/node";

test("builds a URL for a path", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildURLForPath("folder/image.png");
	const expected = "https://example.com/folder/image.png";

	t.is(actual, expected);
});

test("builds a URL for a path with params", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildURLForPath("folder/image.png", {
		width: 400,
	});
	const expected = "https://example.com/folder/image.png?width=400";

	t.is(actual, expected);
});

test("supports a base URL with folders", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com/foo/bar/",
		secureURLToken: "token",
	});

	const actual = client.buildURLForPath("../image.png");
	const expected = "https://example.com/foo/image.png";

	t.is(actual, expected);
});

import test from "ava";

import { SecureClient } from "../src/node";

test("builds a signed URL for a path", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildSignedURLForPath("folder/image.png");
	const expected =
		"https://example.com/folder/image.png?s=a9a848726cae1cbbad4f8f58005d028b";

	t.is(actual, expected);
});

test("builds a signed URL for a path with params", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildSignedURLForPath("folder/image.png", {
		width: 400,
	});
	const expected =
		"https://example.com/folder/image.png?width=400&s=92cf538cd490cc8f94f78c7956f2f05f";

	t.is(actual, expected);
});

test("supports a base URL with folders", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com/foo/bar/",
		secureURLToken: "token",
	});

	const actual = client.buildSignedURLForPath("../image.png");
	const expected =
		"https://example.com/foo/image.png?s=280a338e6c4e2df4fc1bb7ca9de59b72";

	t.is(actual, expected);
});

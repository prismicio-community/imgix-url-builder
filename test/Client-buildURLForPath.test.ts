import test from "ava";

import { Client } from "../src";

test("builds a URL for a path", (t) => {
	const client = new Client({
		baseURL: "https://example.com",
	});

	const actual = client.buildURLForPath("folder/image.png");
	const expected = "https://example.com/folder/image.png";

	t.is(actual, expected);
});

test("builds a URL for a path with params", (t) => {
	const client = new Client({
		baseURL: "https://example.com",
	});

	const actual = client.buildURLForPath("folder/image.png", {
		width: 400,
	});
	const expected = "https://example.com/folder/image.png?width=400";

	t.is(actual, expected);
});

test("supports a base URL with folders", (t) => {
	const client = new Client({
		baseURL: "https://example.com/foo/bar/",
	});

	const actual = client.buildURLForPath("../image.png");
	const expected = "https://example.com/foo/image.png";

	t.is(actual, expected);
});

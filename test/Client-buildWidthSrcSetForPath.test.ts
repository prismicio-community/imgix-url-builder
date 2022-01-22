import test from "ava";

import { Client } from "../src";

test("builds width srcset for a path", (t) => {
	const client = new Client({
		baseURL: "https://example.com",
	});

	const actual = client.buildWidthSrcSetForPath("folder/image.png", {
		widths: [400, 800, 1600],
	});
	const expected =
		"https://example.com/folder/image.png?width=400 400w, " +
		"https://example.com/folder/image.png?width=800 800w, " +
		"https://example.com/folder/image.png?width=1600 1600w";

	t.is(actual, expected);
});

test("builds width srcset for a path with params", (t) => {
	const client = new Client({
		baseURL: "https://example.com",
	});

	const actual = client.buildWidthSrcSetForPath("folder/image.png", {
		widths: [400, 800, 1600],
		sat: 100,
	});
	const expected =
		"https://example.com/folder/image.png?sat=100&width=400 400w, " +
		"https://example.com/folder/image.png?sat=100&width=800 800w, " +
		"https://example.com/folder/image.png?sat=100&width=1600 1600w";

	t.is(actual, expected);
});

test("supports a base URL with folders", (t) => {
	const client = new Client({
		baseURL: "https://example.com/foo/bar/",
	});

	const actual = client.buildWidthSrcSetForPath("../image.png", {
		widths: [400, 800, 1600],
	});
	const expected =
		"https://example.com/foo/image.png?width=400 400w, " +
		"https://example.com/foo/image.png?width=800 800w, " +
		"https://example.com/foo/image.png?width=1600 1600w";

	t.is(actual, expected);
});

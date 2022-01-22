import test from "ava";

import { SecureClient } from "../src/node";

test("builds pixel density srcset for a path", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildPixelDensitySrcSetForPath("folder/image.png", {
		pixelDensities: [1, 2, 3],
	});
	const expected =
		"https://example.com/folder/image.png?dpr=1 1x, " +
		"https://example.com/folder/image.png?dpr=2 2x, " +
		"https://example.com/folder/image.png?dpr=3 3x";

	t.is(actual, expected);
});

test("builds pixel density srcset for a path with params", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildPixelDensitySrcSetForPath("folder/image.png", {
		pixelDensities: [1, 2, 3],
		sat: 100,
	});
	const expected =
		"https://example.com/folder/image.png?sat=100&dpr=1 1x, " +
		"https://example.com/folder/image.png?sat=100&dpr=2 2x, " +
		"https://example.com/folder/image.png?sat=100&dpr=3 3x";

	t.is(actual, expected);
});

test("supports a base URL with folders", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com/foo/bar/",
		secureURLToken: "token",
	});

	const actual = client.buildPixelDensitySrcSetForPath("../image.png", {
		pixelDensities: [1, 2, 3],
	});
	const expected =
		"https://example.com/foo/image.png?dpr=1 1x, " +
		"https://example.com/foo/image.png?dpr=2 2x, " +
		"https://example.com/foo/image.png?dpr=3 3x";

	t.is(actual, expected);
});

import test from "ava";

import { SecureClient } from "../src/node";

test("builds a signed width srcset for a path", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildSignedWidthSrcSetForPath("folder/image.png", {
		widths: [400, 800, 1600],
	});
	const expected =
		"https://example.com/folder/image.png?width=400&s=92cf538cd490cc8f94f78c7956f2f05f 400w, " +
		"https://example.com/folder/image.png?width=800&s=f37e4479d22727c06b387284b2266356 800w, " +
		"https://example.com/folder/image.png?width=1600&s=40088574f135ad105d6019d173a5ef30 1600w";

	t.is(actual, expected);
});

test("builds a signed width srcset for a path with params", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildSignedWidthSrcSetForPath("folder/image.png", {
		widths: [400, 800, 1600],
		sat: 100,
	});
	const expected =
		"https://example.com/folder/image.png?sat=100&width=400&s=0a69c2b765174bb9ba5da26843bef31a 400w, " +
		"https://example.com/folder/image.png?sat=100&width=800&s=ecf116e71df54cb7b98ec6133ecd4d6e 800w, " +
		"https://example.com/folder/image.png?sat=100&width=1600&s=d7887a432a7cce422be5f7b9e79ac4e3 1600w";

	t.is(actual, expected);
});

test("supports a base URL with folders", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com/foo/bar/",
		secureURLToken: "token",
	});

	const actual = client.buildSignedWidthSrcSetForPath("../image.png", {
		widths: [400, 800, 1600],
	});
	const expected =
		"https://example.com/foo/image.png?width=400&s=0045be3abb8303b65a6cab3ae4b6f938 400w, " +
		"https://example.com/foo/image.png?width=800&s=12899f8547e1eb188019a2efc8a9ecf4 800w, " +
		"https://example.com/foo/image.png?width=1600&s=5baaa14f073717a817d45df88fc78732 1600w";

	t.is(actual, expected);
});

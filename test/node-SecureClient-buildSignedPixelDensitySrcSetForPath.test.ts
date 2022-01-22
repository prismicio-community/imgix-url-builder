import test from "ava";

import { SecureClient } from "../src/node";

test("builds a signed pixel density srcset for a path", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildSignedPixelDensitySrcSetForPath(
		"folder/image.png",
		{
			pixelDensities: [1, 2, 3],
		},
	);
	const expected =
		"https://example.com/folder/image.png?dpr=1&s=c4765819c95177c77a1c0eb699285398 1x, " +
		"https://example.com/folder/image.png?dpr=2&s=c5b862d461209ff5cba06efa31a8f9d8 2x, " +
		"https://example.com/folder/image.png?dpr=3&s=4b5f086c182f5133b90c31ba0b26d4cf 3x";

	t.is(actual, expected);
});

test("builds a signed pixel density srcset for a path with params", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildSignedPixelDensitySrcSetForPath(
		"folder/image.png",
		{
			pixelDensities: [1, 2, 3],
			sat: 100,
		},
	);
	const expected =
		"https://example.com/folder/image.png?sat=100&dpr=1&s=f37a332d7071e310e2af3b9cfb4a47c6 1x, " +
		"https://example.com/folder/image.png?sat=100&dpr=2&s=3c906582c21fd0de1c25d150ff67054d 2x, " +
		"https://example.com/folder/image.png?sat=100&dpr=3&s=158586c6b367b73bb8994e3804d3171d 3x";

	t.is(actual, expected);
});

test("supports a base URL with folders", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com/foo/bar/",
		secureURLToken: "token",
	});

	const actual = client.buildSignedPixelDensitySrcSetForPath("../image.png", {
		pixelDensities: [1, 2, 3],
	});
	const expected =
		"https://example.com/foo/image.png?dpr=1&s=1f08bf2d472a4f0e841172748049e215 1x, " +
		"https://example.com/foo/image.png?dpr=2&s=a94079ee2803bb8c45b4e3708b5a7fb6 2x, " +
		"https://example.com/foo/image.png?dpr=3&s=5781110d0a97b854a8d0baa2cb7f8a0f 3x";

	t.is(actual, expected);
});

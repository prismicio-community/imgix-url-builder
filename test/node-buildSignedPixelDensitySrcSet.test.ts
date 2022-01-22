import test from "ava";

import { buildSignedPixelDensitySrcSet } from "../src/node";

test("builds pixel density srcset", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildSignedPixelDensitySrcSet(source, "token", {
		pixelDensities: [1, 2, 3],
	});
	const expected =
		"https://example.com/image.png?dpr=1&s=14fb310ac5d365b72b9442731df4a9c8 1x, " +
		"https://example.com/image.png?dpr=2&s=870039fc302292c915879767fd7dc76a 2x, " +
		"https://example.com/image.png?dpr=3&s=31aa88c00008127d1ad949ce7aa870bb 3x";

	t.is(actual, expected);
});

test("applies URL parameters if given", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildSignedPixelDensitySrcSet(source, "token", {
		pixelDensities: [1, 2, 3],
		sat: 100,
	});
	const expected =
		"https://example.com/image.png?sat=100&dpr=1&s=e237d90f9f1ce7a5726009a640d7ea43 1x, " +
		"https://example.com/image.png?sat=100&dpr=2&s=bcb63047c05d3bec75b7d57b98dcbbab 2x, " +
		"https://example.com/image.png?sat=100&dpr=3&s=6bc3106de5073ca0b685c6778ba58fb9 3x";

	t.is(actual, expected);
});

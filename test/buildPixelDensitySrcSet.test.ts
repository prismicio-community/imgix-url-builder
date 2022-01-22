import test from "ava";

import { buildPixelDensitySrcSet } from "../src";

test("builds pixel density srcset", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildPixelDensitySrcSet(source, {
		pixelDensities: [1, 2, 3],
	});
	const expected =
		"https://example.com/image.png?dpr=1 1x, " +
		"https://example.com/image.png?dpr=2 2x, " +
		"https://example.com/image.png?dpr=3 3x";

	t.is(actual, expected);
});

test("applies URL parameters if given", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildPixelDensitySrcSet(source, {
		pixelDensities: [1, 2, 3],
		sat: 100,
	});
	const expected =
		"https://example.com/image.png?sat=100&dpr=1 1x, " +
		"https://example.com/image.png?sat=100&dpr=2 2x, " +
		"https://example.com/image.png?sat=100&dpr=3 3x";

	t.is(actual, expected);
});

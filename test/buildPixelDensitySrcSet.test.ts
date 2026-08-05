import { expect, it } from "vitest"

import { buildPixelDensitySrcSet } from "../src"

it("builds pixel density srcset", () => {
	const source = "https://example.com/image.png"
	const actual = buildPixelDensitySrcSet(source, {
		pixelDensities: [1, 2, 3],
	})
	const expected =
		"https://example.com/image.png?dpr=1 1x, " +
		"https://example.com/image.png?dpr=2 2x, " +
		"https://example.com/image.png?dpr=3 3x"

	expect(actual).toBe(expected)
})

it("applies URL parameters if given", () => {
	const source = "https://example.com/image.png"
	const actual = buildPixelDensitySrcSet(source, {
		pixelDensities: [1, 2, 3],
		sat: 100,
	})
	const expected =
		"https://example.com/image.png?sat=100&dpr=1 1x, " +
		"https://example.com/image.png?sat=100&dpr=2 2x, " +
		"https://example.com/image.png?sat=100&dpr=3 3x"

	expect(actual).toBe(expected)
})

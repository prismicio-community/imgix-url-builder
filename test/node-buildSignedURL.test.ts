import { expect, it } from "vitest"

import { buildSignedURL } from "../src/node"

it("builds signed URL with params", () => {
	const source = "https://example.com/image.png"
	const actual = buildSignedURL(source, "token", {
		width: 400,
	})
	const expected = "https://example.com/image.png?width=400&s=72d5ac8cf655aec51fc58ff075161440"

	expect(actual).toBe(expected)
})

it("existing `s` param is overridden", () => {
	const source = "https://example.com/image.png?s=abc"
	const actual = buildSignedURL(source, "token", {
		width: 400,
	})
	const expected = "https://example.com/image.png?width=400&s=72d5ac8cf655aec51fc58ff075161440"

	expect(actual).toBe(expected)
})

it("`s` param is always the last param", () => {
	const source = "https://example.com/image.png?s=abc&width=400"
	const actual = buildSignedURL(source, "token", {
		height: 300,
	})
	const expected =
		"https://example.com/image.png?width=400&height=300&s=66ee8a448cf00a850113639abfff1662"

	expect(actual).toBe(expected)
})

import { expect, it } from "vitest"

import { signURL } from "../src/node"

it("signs a URL", () => {
	const source = "https://example.com/image.png"
	const actual = signURL(source, "token")
	const expected = "https://example.com/image.png?s=41d3f8c3629651c8bbb043ce092d2eee"

	expect(actual).toBe(expected)
})

it("signs a URL with existing params", () => {
	const source = "https://example.com/image.png?width=400"
	const actual = signURL(source, "token")
	const expected = "https://example.com/image.png?width=400&s=72d5ac8cf655aec51fc58ff075161440"

	expect(actual).toBe(expected)
})

it("existing `s` param is overridden", () => {
	const source = "https://example.com/image.png?s=abc"
	const actual = signURL(source, "token")
	const expected = "https://example.com/image.png?s=41d3f8c3629651c8bbb043ce092d2eee"

	expect(actual).toBe(expected)
})

it("`s` param is always the last param", () => {
	const source = "https://example.com/image.png?s=abc&width=400"
	const actual = signURL(source, "token")
	const expected = "https://example.com/image.png?width=400&s=72d5ac8cf655aec51fc58ff075161440"

	expect(actual).toBe(expected)
})

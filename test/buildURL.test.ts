import { expect, it } from "vitest"

import { buildURL } from "../src"

it("builds URL with params", () => {
	const source = "https://example.com/image.png"
	const actual = buildURL(source, {
		width: 400,
	})
	const expected = "https://example.com/image.png?width=400"

	expect(actual).toBe(expected)
})

it("retains existing params", () => {
	const source = "https://example.com/image.png?width=400"
	const actual = buildURL(source, {
		height: 300,
	})
	const expected = "https://example.com/image.png?width=400&height=300"

	expect(actual).toBe(expected)
})

it("overrides existing params", () => {
	const source = "https://example.com/image.png?width=400"
	const actual = buildURL(source, {
		width: 800,
	})
	const expected = "https://example.com/image.png?width=800"

	expect(actual).toBe(expected)
})

it("undefined params are not included", () => {
	const source = "https://example.com/image.png?width=400"
	const actual = buildURL(source, {
		height: undefined,
	})
	const expected = "https://example.com/image.png?width=400"

	expect(actual).toBe(expected)
})

it("clears existing params if set to undefined", () => {
	const source = "https://example.com/image.png?width=400&height=300"
	const actual = buildURL(source, {
		height: undefined,
	})
	const expected = "https://example.com/image.png?width=400"

	expect(actual).toBe(expected)
})

it("supports numeric params", () => {
	const source = "https://example.com/image.png"
	const actual = buildURL(source, {
		sat: -100,
	})
	const expected = "https://example.com/image.png?sat=-100"

	expect(actual).toBe(expected)
})

it("supports array params", () => {
	const source = "https://example.com/image.png"
	const actual = buildURL(source, {
		auto: ["format", "compress"],
	})
	const expected = "https://example.com/image.png?auto=format%2Ccompress"

	expect(actual).toBe(expected)
})

it("supports `s` param", () => {
	const source = "https://example.com/image.png"
	const actual = buildURL(source, {
		s: "an-md5-signature",
	})
	const expected = "https://example.com/image.png?s=an-md5-signature"

	expect(actual).toBe(expected)
})

it("converts camelCased params to param-case", () => {
	const source = "https://example.com/image.png"
	const actual = buildURL(source, {
		maxWidth: 400,
	})
	const expected = "https://example.com/image.png?max-width=400"

	expect(actual).toBe(expected)
})

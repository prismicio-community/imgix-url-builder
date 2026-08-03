import { expect, it } from "vitest"

import { SecureClient } from "../src/node"

it("builds a signed web proxy URL", () => {
	const client = new SecureClient({
		baseURL: "https://testing.imgix.net",
		secureURLToken: "token",
	})

	const source = "https://example.com/image.png"
	const actual = client.buildWebProxyURL(source)
	const expected =
		"https://testing.imgix.net/https%3A%2F%2Fexample.com%2Fimage.png?s=cf7288f15a2359132676fb4017db4898"

	expect(actual).toBe(expected)
})

it("builds a signed web proxy URL with parameters", () => {
	const client = new SecureClient({
		baseURL: "https://testing.imgix.net",
		secureURLToken: "token",
	})

	const source = "https://example.com/image.png"
	const actual = client.buildWebProxyURL(source, {
		width: 400,
	})
	const expected =
		"https://testing.imgix.net/https%3A%2F%2Fexample.com%2Fimage.png?width=400&s=2ea052186b1b4b9f847855e28006bac7"

	expect(actual).toBe(expected)
})

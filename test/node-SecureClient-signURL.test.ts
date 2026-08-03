import { expect, it } from "vitest"

import { SecureClient } from "../src/node"

it("signs a URL", () => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	})

	const actual = client.signURL("https://example.com/image.png")
	const expected = "https://example.com/image.png?s=41d3f8c3629651c8bbb043ce092d2eee"

	expect(actual).toBe(expected)
})

it("signs a URL with existing params", () => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	})

	const actual = client.signURL("https://example.com/image.png?width=400")
	const expected = "https://example.com/image.png?width=400&s=72d5ac8cf655aec51fc58ff075161440"

	expect(actual).toBe(expected)
})

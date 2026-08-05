import { expect, it } from "vitest"

import { SecureClient } from "../src/node"

it("builds a URL for a path", () => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	})

	const actual = client.buildURLForPath("folder/image.png")
	const expected = "https://example.com/folder/image.png"

	expect(actual).toBe(expected)
})

it("builds a URL for a path with params", () => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	})

	const actual = client.buildURLForPath("folder/image.png", {
		width: 400,
	})
	const expected = "https://example.com/folder/image.png?width=400"

	expect(actual).toBe(expected)
})

it("supports a base URL with folders", () => {
	const client = new SecureClient({
		baseURL: "https://example.com/foo/bar/",
		secureURLToken: "token",
	})

	const actual = client.buildURLForPath("../image.png")
	const expected = "https://example.com/foo/image.png"

	expect(actual).toBe(expected)
})

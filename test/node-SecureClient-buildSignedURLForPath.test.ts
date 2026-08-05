import { expect, it } from "vitest"

import { SecureClient } from "../src/node"

it("builds a signed URL for a path", () => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	})

	const actual = client.buildSignedURLForPath("folder/image.png")
	const expected = "https://example.com/folder/image.png?s=a9a848726cae1cbbad4f8f58005d028b"

	expect(actual).toBe(expected)
})

it("builds a signed URL for a path with params", () => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	})

	const actual = client.buildSignedURLForPath("folder/image.png", {
		width: 400,
	})
	const expected =
		"https://example.com/folder/image.png?width=400&s=92cf538cd490cc8f94f78c7956f2f05f"

	expect(actual).toBe(expected)
})

it("supports a base URL with folders", () => {
	const client = new SecureClient({
		baseURL: "https://example.com/foo/bar/",
		secureURLToken: "token",
	})

	const actual = client.buildSignedURLForPath("../image.png")
	const expected = "https://example.com/foo/image.png?s=280a338e6c4e2df4fc1bb7ca9de59b72"

	expect(actual).toBe(expected)
})

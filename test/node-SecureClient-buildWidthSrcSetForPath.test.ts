import { expect, it } from "vitest"

import { SecureClient } from "../src/node"

it("builds width srcset for a path", () => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	})

	const actual = client.buildWidthSrcSetForPath("folder/image.png", {
		widths: [400, 800, 1600],
	})
	const expected =
		"https://example.com/folder/image.png?width=400 400w, " +
		"https://example.com/folder/image.png?width=800 800w, " +
		"https://example.com/folder/image.png?width=1600 1600w"

	expect(actual).toBe(expected)
})

it("builds width srcset for a path with params", () => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	})

	const actual = client.buildWidthSrcSetForPath("folder/image.png", {
		widths: [400, 800, 1600],
		sat: 100,
	})
	const expected =
		"https://example.com/folder/image.png?sat=100&width=400 400w, " +
		"https://example.com/folder/image.png?sat=100&width=800 800w, " +
		"https://example.com/folder/image.png?sat=100&width=1600 1600w"

	expect(actual).toBe(expected)
})

it("supports a base URL with folders", () => {
	const client = new SecureClient({
		baseURL: "https://example.com/foo/bar/",
		secureURLToken: "token",
	})

	const actual = client.buildWidthSrcSetForPath("../image.png", {
		widths: [400, 800, 1600],
	})
	const expected =
		"https://example.com/foo/image.png?width=400 400w, " +
		"https://example.com/foo/image.png?width=800 800w, " +
		"https://example.com/foo/image.png?width=1600 1600w"

	expect(actual).toBe(expected)
})

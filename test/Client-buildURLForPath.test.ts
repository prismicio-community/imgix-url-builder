import { expect, it } from "vitest"

import { Client } from "../src"

it("builds a URL for a path", () => {
	const client = new Client({
		baseURL: "https://example.com",
	})

	const actual = client.buildURLForPath("folder/image.png")
	const expected = "https://example.com/folder/image.png"

	expect(actual).toBe(expected)
})

it("builds a URL for a path with params", () => {
	const client = new Client({
		baseURL: "https://example.com",
	})

	const actual = client.buildURLForPath("folder/image.png", {
		width: 400,
	})
	const expected = "https://example.com/folder/image.png?width=400"

	expect(actual).toBe(expected)
})

it("supports a base URL with folders", () => {
	const client = new Client({
		baseURL: "https://example.com/foo/bar/",
	})

	const actual = client.buildURLForPath("../image.png")
	const expected = "https://example.com/foo/image.png"

	expect(actual).toBe(expected)
})

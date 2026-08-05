import { test } from "vitest"

export type Fixtures = {
	// TODO: Add custom fixtures
	// See: https://vitest.dev/guide/test-context.html#test-extend
	foo: string
}

export const it = test.extend<Fixtures>({
	// TODO: Add custom fixtures
	// See: https://vitest.dev/guide/test-context.html#test-extend
	// oxlint-disable-next-line no-empty-pattern
	foo: async ({}, use) => {
		await use("bar")
	},
})

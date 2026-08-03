import { expect, it } from "vitest"

import { buildURL as rootBuildURL } from "../src"
import { buildURL as nodeBuildURL } from "../src/node"

it("the node entry's buildURL is an alias for the root entry's buildURL", () => {
	expect(nodeBuildURL).toBe(rootBuildURL)
})

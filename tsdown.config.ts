import { defineConfig } from "tsdown"

export default defineConfig({
	entry: {
		index: "./src/index.ts",
		node: "./src/node/index.ts",
	},
	format: ["esm", "cjs"],
	platform: "neutral",
	unbundle: true,
	sourcemap: true,
	exports: true,
	dts: {
		// TypeScript 7 has no classic compiler API, so emit declarations with Oxc.
		generator: "oxc",
	},
})

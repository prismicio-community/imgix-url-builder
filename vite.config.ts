import { defineConfig } from "vite";
import sdk from "vite-plugin-sdk";

export default defineConfig({
	plugins: [sdk()],
	build: {
		lib: {
			entry: {
				index: "./src/index.ts",
				node: "./src/node/index.ts",
			},
		},
	},
});

import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "Lib",
			fileName: "node-package",
			formats: ["es", "cjs", "umd"],
		},
	},
	resolve: { alias: { src: resolve("src/") } },
});

export default {
	extensions: ["ts"],
	files: ["./test/**/*.test.ts"],
	require: ["ts-eager/register.js"],
	verbose: true,
	timeout: "60s",
};

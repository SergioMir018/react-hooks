const postcssPresetEnv = require("postcss-preset-env");
const purgecss = require("@fullhuman/postcss-purgecss")({
	content: ["./src/**/*.html", "./src/**/*.js"],
	defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
	plugins: [
		postcssPresetEnv({
			stage: 3,
		}),
		...(process.env.NODE_ENV === "production" ? [purgecss] : []),
	],
};

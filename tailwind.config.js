module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				neon: "0 0 1px #fff, 0 0 2px #fff, 0 0 4px #fff, 0 0 3px #9f7aea, 0 0 6px #9f7aea, 0 0 7px #9f7aea, 0 0 8px #9f7aea",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwindcss-animated")],
};

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				neon: "0 0 1px #fff, 0 0 2px #fff, 0 0 7px #fff, 0 0 5px #9f7aea, 0 0 8px #9f7aea, 0 0 10px #9f7aea, 0 0 12px #9f7aea",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

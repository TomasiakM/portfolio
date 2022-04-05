module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/variables.scss"; @import "@/assets/scss/globalStyle.scss";`,
			},
		},
	},
	publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
};

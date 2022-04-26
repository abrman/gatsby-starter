module.exports = {
  siteMetadata: {
    title: "Gatsby Starter",
    description: "Just another gatsby site.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-root-import",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["work sans:300,400,500,600,700,800"],
        display: "swap",
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};

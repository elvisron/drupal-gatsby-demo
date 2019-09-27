module.exports = {
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: "http://dev-myappdemo.pantheonsite.io/",
        // preview: true
      },
    },
  ],
}

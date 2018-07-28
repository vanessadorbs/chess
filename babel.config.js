
if (process.argv.includes('node')) {

  module.exports = {
    "presets": [
      ["@babel/preset-env", {
        "targets": {
          "node": "current"
        }
      }]
    ]
  }

} else {

  module.exports = {
    presets: [
      ["@babel/preset-env", {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1"
        },
        useBuiltIns: "usage"
      }]
    ]
  }

}

const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "planets",
    webpackConfigEnv
  });

  const standalonePlugin = defaultConfig.plugins.find(
    (p) => p.constructor.name === "StandaloneSingleSpaPlugin"
  );

  standalonePlugin.options.importMapUrl = new URL(
    "https://react.microfrontends.app/importmap.json"
  );

  const externals = [/^rxjs\/?.*$/];

  if (webpackConfigEnv.standalone) {
    externals.push("react", "react-dom");
  }

  return merge(defaultConfig, {
    // customizations go here
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },
    externals,
  });
};

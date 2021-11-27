exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

const nodemon = require("nodemon");
const { exec } = require("child_process");
const fs = require("fs");

function log(...str) {
  console.log(str);
}

exports.onPostBootstrap = function () {
    console.log(process.env.NODE_ENV);
    console.log("onPostBootstrap ================================== is loaded");
    if(process.env.NODE_ENV === "development") {
        log("Starting the custom server in watch mode using nodemon...");
        return new Promise((resolve, reject) => {
          watchProc = nodemon({
            script: "server/index.js",
            args: ["--no-gatsby"],
            ignore: ["src", "node_modules", ".cache", "public", "gatsby-*"],
            ext: "js json ts",
            stdout: false,
          });

          watchProc.on("log", ({ colour }) => console.log(colour));
          watchProc.on("stdout", (data) => {
            log(String(data));
          });
          watchProc.on("start", () => resolve());
        });
    } else {
        return new Promise((resolve, reject) => {
          if (fs.existsSync("server/index.js")) {
              console.log(" is onPreInit");
            log("Starting the custom Node.js server for the buildtime...");
            proc = exec("node server/index.js --no-gatsby");

            proc.stdout.on("data", (data) => {
              log(`${data}`);
              resolve();
            });

            proc.on("error", (err) => {
              log(`${err}`);
              reject();
            });
          } else {
            resolve();
          }
        });
    }
};
process.on("beforeExit", () => watchProc.kill());

#! /usr/bin/env node

var fs         = require("fs");
var path       = require("path");
var program    = require("commander");
var changeCase = require("change-case");

function run(name, options) {

  var dir       = path.resolve(name);
  var stylesExt = options.styles || "css";
  var fileExt = options.extension || "js";
  var styles    = path.resolve(dir, name + "." + stylesExt)
  var jsx       = path.resolve(dir, name + ".jsx");
  var js        = path.resolve(dir, name + ".js");
  var index     = path.resolve(dir, "index.js");

var content = `import React, {Component} from "react";
import "./${name}.${stylesExt}";

class ${name} extends Component {
  render() {
    return (
      <div>Hello ${name}</div>
    );
  }
}

export default ${name};
`;

var indexContent = `import "./${name}";`;

  fs.mkdirSync("./"+name);
  fs.openSync(styles, "w");
  fs.writeSync(fs.openSync(fileExt, "w"), content);
  fs.writeSync(fs.openSync(index, "w"), indexContent);
  console.log("Finished");
}

program
  .version('0.0.1')
  .option('-s, --styles [extension]', 'styles extension [default: css]')
  .option('-e, --extension [extension]', 'file extension [default: js]')
  .arguments('<name>')
  .action(run)
  .parse(process.argv);

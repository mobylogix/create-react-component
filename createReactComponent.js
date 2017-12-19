#! /usr/bin/env node

var fs         = require("fs");
var path       = require("path");
var program    = require("commander");
var changeCase = require("change-case");
var capitalize = require("capitalize");

function run(name, options) {

  if (!name) {
    console.log("Name is required");
    return;
  }

  var dir       = options.dir ? path.resolve(name.toLowerCase()) : '';
  var stylesExt = options.styles || "css";
  var fileExt = options.ext || "js";
  var pureCmpt = options.pure ? "PureComponent" : "Component";
  var styles    = path.resolve(dir, name + "." + stylesExt)
  var js        = path.resolve(dir, capitalize(name) + "."+ fileExt);
  var index     = path.resolve(dir, "index.js");

var content = `import React, {${pureCmpt}} from 'react';
import PropTypes from 'prop-types';
import {_} from 'underscrore';
import moment from 'moment';
import autoBind from 'react-autobind';
import './${name.toLowerCase()}.${stylesExt}';

class ${capitalize(name)} extends ${pureCmpt} {
  constructor(props) {
    super(props);

    this.state = {

    };

    this._isMounted = null;

    autoBind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillReceiveProps(props) {

  }

  render() {
    return (
      <div>Hello ${capitalize(name)}</div>
    );
  }
}

${capitalize(name)}.propTypes = {

};

export default ${capitalize(name)};
`;
  if (dir != '') {
    fs.mkdirSync("./"+name.toLowerCase());
  }
  fs.openSync(styles, "w");
  fs.writeSync(fs.openSync(js, "w"), content);
  console.log("Generated! --- Mobylogix");
}

program
  .version('0.0.1')
  .option('-s, --styles [extension]', 'styles extension [default: css]')
  .option('-e, --ext [extension]', 'file extension [default: js]')
  .option('-p, --pure [extension]', 'generate pure react component [default: component]')
  .option('-d, --dir [extension]', 'generate directory structure')
  .arguments('<name>')
  .action(run)
  .parse(process.argv);

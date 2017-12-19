# Generate React Component

```
Usage: createReactComponent [options] <name>

  Options:

    -h, --help                output usage information
    -V, --version             output the version number
    -s, --styles [extension]  styles extension [default: css]
    -e, --ext [extension]  file extension [default: js]
    -p, --pure [extension], generate react PureComponent [default: Component]
    -d, --dir [extension], generate directory structure

```

## Install

```
npm i -g @mobylogix/react-component
```

## Example

```
react-component Alert -e jsx -s scss
```

will create

```
Alert
├── Alert.jsx
├── Alert.scss
└── index.js
```

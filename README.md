# quickly-copy-file

Quickly copy file from one path to another. No bullshit, ultra-simple, async and just one dep.

## Installation

`npm install quickly-copy-file`

## Usage

* `copyFile(fromPath, toPath)`
    * `fromPath` - `String` Path to file that will be copied.
    * `toPath` - `String` File system path that will be created etc.

Node.js:

```javascript
var copyFile = require('quickly-copy-file');
copyFile('original.js', 'copy.js')
  .then(() => console.log('File was copied!'))
  .catch(error => console.error(error););
```

## License

[MIT](https://github.com/paulmillr/mit) (c) 2016 Paul Miller (http://paulmillr.com)

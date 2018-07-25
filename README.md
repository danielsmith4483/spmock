# spmock
A customizable spongemock npm module with CLI support.

## Installation
```sh
npm install spmock --save
```

or

```sh
yarn add spmock
```

## Usage

For a given input string, the equivalent spongemock string can be generated. A `bias` value and `seed` can be provided to fine-tune `spmock`'s output.

```javascript
const spmock = require('spmock');

console.log(spmock.spmock(`hello world`));
```

Expected output (varies):
```sh
hElLo wOrLd
```

## Test
```sh
npm run test
```
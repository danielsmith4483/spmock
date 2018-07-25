# spmock
A customizable spongemock npm module with CLI support.

[![Build Status](https://travis-ci.org/danielsmith4483/spmock.svg?branch=master)](https://travis-ci.org/danielsmith4483/spmock) [![Coverage Status](https://coveralls.io/repos/github/danielsmith4483/spmock/badge.svg?branch=master)](https://coveralls.io/github/danielsmith4483/spmock?branch=master) 
[![npm version](https://badge.fury.io/js/spmock.svg)](https://badge.fury.io/js/spmock)

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
'use strict';
const expect = require('chai').expect;
const index = require('../dist/index.js');

describe('spmock function test', () => {
    const input = "hello world";
    const output = "hElLo wOrLd";

    it(`should return convert ${input} to ${output} with a bias of 1`, () => {
        const options = { bias: 1 };
        const result = index.spmock(input, options);
        expect(result).to.equal(output);
    });
});
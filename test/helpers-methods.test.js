'use strict'

const expect = require('chai').expect
const helpers = require('../lib')

describe('Helpers methods', () => {
	it('should return array of even numbers up to n', () => {
		const n = 10
		const expected = [2, 4, 6, 8, 10]

		expect(helpers.pushEventUpToN(n)).to.deep.equal(expected)
	})
})
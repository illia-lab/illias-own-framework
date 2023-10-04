import { expect } from 'chai';

class NumberOperations {
  myNumbers: number[];
  constructor(array: number[]) {
    this.myNumbers = array;
	}

  addOneToEveryMyNumbers() {
    return this.myNumbers.map((arrayItem) => {
      return arrayItem + 1;
    });
  }

	findLowestNumberInArray() {
		return this.myNumbers.reduce((a, b) => {
			return Math.min(a, b);
		});
	}
}

describe('Classes', () => {
  it('my first class unit', () => {
    const myNumberOperation = new NumberOperations([2, 3, 4, 5]);
    console.log(myNumberOperation.addOneToEveryMyNumbers());
	});

  it('findLowestNumber', () => {
    const myNumberOperation = new NumberOperations([1, 2, 3, 4, 5]);
		expect(myNumberOperation.findLowestNumberInArray()).to.equal(1);
  });
});

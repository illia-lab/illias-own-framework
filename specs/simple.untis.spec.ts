import { expect } from 'chai';

function addOneToEveryArrayItem(arr: number[]) {
  return arr.map((arrItem) => {
    return arrItem + 1;
  });
}
function removeOneToEveryArrayItem(arr: number[]) {
  return arr.map((arrItem) => {
    return arrItem - 1;
  });
}
function summOfTheArrayItems(arr: number[]) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++){
     summ = summ + arr[i]
  }
  return summ
}

describe('My dummy test suite', () => {
  it('[P] addOneToEveryItem', () => {
    expect(addOneToEveryArrayItem([1, 2])).to.deep.equal([2,3])
  });
  it('[P] summOfTheArrayItems', () => {
    expect(summOfTheArrayItems([1,2,3])).to.deep.equal(6)
  })
  it('[p] removeOneFromEveryArrayItems', () => {
    expect(removeOneToEveryArrayItem([2, 3, 4])).to.deep.equal([1, 2, 3])
  })
});

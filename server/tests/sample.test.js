const expect = require('expect');

const cheezeMoulder = require('./sample');

describe('makeCheezesBlue', () => {
  it('makes each cheeze blue', () => {
    const actual = cheezeMoulder(['Stilton', 'Halloumi', 'Cheddar']);
    expect(actual).toEqual(['Blue Stilton', 'Blue Halloumi', 'Blue Cheddar']);
  });
});

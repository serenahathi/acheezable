const expect = require('expect');

const cheezeMoulder = require('./sample');

describe('cheezeMoulder', () => {
  it('makes each cheeze blue', () => {
    const actual = cheezeMoulder(['Stilton', 'Halloumi', 'Cheddar']);
    expect(actual).toEqual(['Blue Stilton', 'Blue Halloumi', 'Blue Cheddar']);
  });
});

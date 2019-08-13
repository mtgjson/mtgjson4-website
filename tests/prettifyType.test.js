import helpers from '../docs/.vuepress/scripts/helpers';
const { prettifyType } = helpers;

describe('helpers', () => {
  it('prettifyType should return a string removed of underscores, spaces and capitalized words', async () => {
    const uglyType = 'this_is_text';
    const expected = 'This Is Text';
    const prettifiedType = await prettifyType(uglyType);

    expect(prettifiedType).toEqual(expected);
  });
});
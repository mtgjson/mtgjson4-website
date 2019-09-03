import sort from '../docs/.vuepress/scripts/sort';

describe('sort', () => {
  it('should return the same data if an empty filter is passed', async () => {
    const filter = '';
    const data = [
      {
        type: 'creature',
      },
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(data);
  });

  it('should return the same data if a dom element with no dom target for filter is passed', async () => {
    const filter = document.createElement('div');
    filter.currentTarget = undefined;
    const data = [
      {
        type: 'creature',
      },
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(data);
  });

  it('should return the same data if a dom element with no dom value for filter is passed', async () => {
    const filter = document.createElement('div');
    filter.currentTarget = filter;
    filter.currentTarget.value = undefined;
    const data = [
      {
        type: 'creature',
      },
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(data);
  });

  it('should return sorted data if a dom filter by recent releaseData by descending order is passed', async () => {
    const filter = document.createElement('div');
    filter.currentTarget = filter;
    filter.currentTarget.value = 'releaseDate:true';
    const data = [
      {
        releaseDate: '1995-07-13',
      },
      {
        releaseDate: '2020-01-01',
      },
      {
        releaseDate: '2017-04-05',
      },
    ];
    const expected = [
      {
        releaseDate: '2020-01-01',
      },
      {
        releaseDate: '2017-04-05',
      },
      {
        releaseDate: '1995-07-13',
      },
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(expected);
  });

  it('should return sorted data if a filter by recent releaseData by descending order is passed', async () => {
    const filter = 'releaseDate:true';
    const data = [
      {
        releaseDate: '1995-07-13',
      },
      {
        releaseDate: '2020-01-01',
      },
      {
        releaseDate: '2017-04-05',
      },
    ];
    const expected = [
      {
        releaseDate: '2020-01-01',
      },
      {
        releaseDate: '2017-04-05',
      },
      {
        releaseDate: '1995-07-13',
      },
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(expected);
  });

  it('should return sorted data if a filter by recent releaseData by ascending order is passed', async () => {
    const filter = 'releaseDate';
    const data = [
      {
        releaseDate: '1995-07-13',
      },
      {
        releaseDate: '2020-01-01',
      },
      {
        releaseDate: '2017-04-05',
      },
    ];
    const expected = [
      {
        releaseDate: '1995-07-13',
      },
      {
        releaseDate: '2017-04-05',
      },
      {
        releaseDate: '2020-01-01',
      },
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(expected);
  });

  it('should throw a TypeError if not data was passed in but no filter was passed', () => {
    expect(() => {
      sort();
    }).toThrow(TypeError);
  });

  it('should throw a TypeError if not data was passed in but a filter was', () => {
    expect(() => {
      sort('test-filter');
    }).toThrow(TypeError);
  });
});

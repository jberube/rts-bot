import entities from './entities';
import * as types from '../../constants/actionTypes';

describe('entities reducer', () => {
  it('should handle initial state', () => {
    expect(entities(undefined, {})).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });
});

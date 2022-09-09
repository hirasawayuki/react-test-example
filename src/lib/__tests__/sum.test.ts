import {sum} from "../sum";

test('calculate sum()', async () => {
  expect(sum(5, 5)).toEqual(10);
});

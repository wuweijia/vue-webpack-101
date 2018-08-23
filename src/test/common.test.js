import { sum, addBarcode} from "../../src/utils/common";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('添加了一个barcode', () => {
  expect(addBarcode(4, [1,2,3])).toContain(4);
});


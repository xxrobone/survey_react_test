import { countAverageAge } from "../utils/countAverageAge";

  test('calculates the average age correctly', () => {
    expect(countAverageAge(3, 9)).toBe(3);

    expect(countAverageAge(5, 20)).toBe(4);

    expect(countAverageAge(0, 0)).toBe(0);
  });

  test('handles edge cases and rounding', () => {
    expect(countAverageAge(7, 15)).toBe(2);

    expect(countAverageAge(2, 4)).toBe(2);

    expect(countAverageAge(1, 2)).toBe(2);
  });

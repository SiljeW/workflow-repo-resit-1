/**
 * Calculates the sum of an array of numbers
 * @param {number[]} numbers - Array of numbers to sum
 * @returns {number} The total sum
 */
export function calculateTotal(numbers) {
  if (!Array.isArray(numbers)) return 0;
  return numbers.reduce(
    (sum, num) => sum + (typeof num === "number" ? num : 0),
    0
  );
}

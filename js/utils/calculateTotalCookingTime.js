/**
 * Calculates the cooking time in minutes based on preparation and cooking times
 * @param {number} prepTimeMinutes - Preparation time in minutes
 * @param {number} cookTimeMinutes - Cooking time in minutes
 * @returns {number} - Total cooking time in minutes
 */
function calculateTotalCookingTime(prepTimeMinutes, cookTimeMinutes) {
  if (
    typeof prepTimeMinutes !== "number" ||
    typeof cookTimeMinutes !== "number"
  ) {
    return 0;
  }

  return Math.max(0, prepTimeMinutes) + Math.max(0, cookTimeMinutes);
}

/**
 * Formats a recipe title by capitalizing first letter of each word
 * @param {string} title - The recipe title to format
 * @returns {string} - The formatted title
 */
export function formatRecipeTitle(title) {
  if (!title) return '';
  return title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

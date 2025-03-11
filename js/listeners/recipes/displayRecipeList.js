import { apiService } from "../../apiService.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderRecipeList } from "../../ui/recipes/renderRecipeList.js";

/**
 * Formats a recipe title by capitalizing first letter of each word
 * @param {string} title - The recipe title to format
 * @returns {string} - The formatted title
 */
export function formatRecipeTitle(title) {
  if (!title) return "";
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Calculates the cooking time in minutes based on preparation and cooking times
 * @param {number} prepTimeMinutes - Preparation time in minutes
 * @param {number} cookTimeMinutes - Cooking time in minutes
 * @returns {number} - Total cooking time in minutes
 */
export function calculateTotalCookingTime(prepTimeMinutes, cookTimeMinutes) {
  if (
    typeof prepTimeMinutes !== "number" ||
    typeof cookTimeMinutes !== "number"
  ) {
    return 0;
  }

  return Math.max(0, prepTimeMinutes) + Math.max(0, cookTimeMinutes);
}

export async function displayRecipeList() {
  const container = document.querySelector("#recipe-container");

  try {
    const recipes = await apiService.getRecipes();
    renderRecipeList(container, recipes.data);
  } catch (error) {
    console.log(error);
    displayMessage(container, "error", error.message);
  }
}

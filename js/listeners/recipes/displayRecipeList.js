import { apiService } from "../../apiService.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderRecipeList } from "../../ui/recipes/renderRecipeList.js";

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

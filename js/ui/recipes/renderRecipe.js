export function renderRecipe(container, recipe) {
  container.innerHTML = "";
  const img = document.createElement("img");
  img.src = recipe.media[0];
  img.alt = recipe.name;
  container.append(img);
}

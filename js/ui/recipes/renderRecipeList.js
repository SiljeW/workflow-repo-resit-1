export function renderRecipeList(container, recipes) {
  if (recipes.length === 0) {
    return "<div class='text-center'>No recipes found</div>";
  }

  const recipeElements = recipes.map(venue => createRecipeCard(venue));
  container.innerHTML = '';
  container.append(...recipeElements);
}

const createRecipeCard = recipe => {
  const { image, id } = recipe;

  const card = document.createElement('a');
  card.className = 'bg-cover bg-center h-64 rounded-lg shadow-md';
  card.href = `/recipe/?id=${id}`;

  card.style.backgroundImage = `url(${image})`;

  return card;
};

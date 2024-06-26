import { recipes } from './recipes.mjs';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const recipeSection = document.getElementById('recipe-section');

function ratingTemplate(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += `<span class="star ${i < rating ? 'filled' : 'empty'}">★</span>`;
    }
    return stars;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe-card">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <h2>${recipe.name}</h2>
                <div class="rating" aria-label="${recipe.rating} out of 5 stars">
                    ${ratingTemplate(recipe.rating)}
                </div>
                <p class="description">${recipe.description}</p>
                <ul class="tags">
                    ${tagsTemplate(recipe.tags)}
                </ul>
                <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
                <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
                <p><strong>Yield:</strong> ${recipe.recipeYield}</p>
                <h3>Ingredients</h3>
                <ul class="ingredients">
                    ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h3>Instructions</h3>
                <ol class="instructions">
                    ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
}

function renderRecipes(filteredRecipes) {
    recipeSection.innerHTML = filteredRecipes.map(recipe => recipeTemplate(recipe)).join('');
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
    renderRecipes(filteredRecipes);
});

searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        const query = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
        renderRecipes(filteredRecipes);
    }
});

// Initial render
renderRecipes(recipes);

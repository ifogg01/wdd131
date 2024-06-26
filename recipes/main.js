import { recipes } from './recipes.mjs';

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomEntry(array) {
    const randomIndex = getRandomNumber(array.length);
    return array[randomIndex];
}

function ratingTemplate(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += `<span class="star filled" aria-hidden="true">★</span>`;
        } else {
            stars += `<span class="star" aria-hidden="true">☆</span>`;
        }
    }
    return stars;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe-card">
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

function displayRecipes(recipesToShow) {
    const recipeSection = document.getElementById('recipe-section');
    recipeSection.innerHTML = '';
    recipesToShow.forEach(recipe => {
        const recipeHTML = recipeTemplate(recipe);
        recipeSection.innerHTML += recipeHTML;
    });
}

function searchRecipes() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    console.log('Search term:', searchTerm);
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
    console.log('Filtered recipes:', filteredRecipes);
    if (filteredRecipes.length > 0) {
        displayRecipes(filteredRecipes);
    } else {
        alert('No recipes found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const randomRecipe = getRandomEntry(recipes);
    displayRecipes([randomRecipe]);

    document.getElementById('search-button').addEventListener('click', searchRecipes);
    document.getElementById('search-input').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchRecipes();
        }
    });
});

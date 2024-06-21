document.addEventListener("DOMContentLoaded", function() {
    const recipeData = {
        author: 'AllRecipes',
        url: 'https://www.allrecipes.com/recipe/12409/apple-crisp-ii/',
        isBasedOn: '',
        cookTime: '45min',
        datePublished: '2023-10-10',
        tags: ['dessert'],
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
        recipeIngredient: [
            '10 C apples, cored and sliced',
            '1 C white sugar',
            '1 Tbsp white flour',
            '1 tsp ground cinnamon',
            '3 Tbsp water',
            '1 C rolled oats',
            '1 C Flour',
            '1 C Brown sugar',
            '1/4 tsp baking powder',
            '1/4 tsp baking soda',
            '1/2 C butter, melted'
        ],
        name: 'Apple Crisp',
        prepTime: '30 min',
        recipeInstructions: [
            'Preheat the oven to 350 degrees F (175 degrees C).',
            'Place sliced apples in a 9x13-inch baking dish. Mix white sugar, 1 tablespoon flour, and cinnamon together; sprinkle over apples. Pour water evenly over apples.',
            'Combine oats, 1 cup flour, brown sugar, baking powder, and baking soda in a large bowl. Add melted butter and mix with a fork until crumbly; sprinkle evenly over apple mixture.',
            'Bake in the preheated oven until top is golden brown and apples are bubbling around the edges, about 45 minutes.'
        ],
        recipeYield: '12 servings',
        rating: 4
    };

    function createStarRating(rating) {
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

    function createRecipeSection(recipe) {
        return `
            <div class="recipe-card">
                <div class="recipe-info">
                    <h2>${recipe.name}</h2>
                    <div class="rating" aria-label="${recipe.rating} out of 5 stars">
                        ${createStarRating(recipe.rating)}
                    </div>
                    <p class="description">${recipe.description}</p>
                    <ul class="tags">
                        ${recipe.tags.map(tag => `<li>${tag}</li>`).join('')}
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
        `;
    }

    const recipeSection = document.getElementById('recipe-section');
    recipeSection.innerHTML = createRecipeSection(recipeData);
});

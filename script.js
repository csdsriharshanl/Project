function searchRecipes() {
    var searchInput = document.getElementById('searchInput').value;
    var ingredients = searchInput.split(',');
    var recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';
  
    // Simulated recipe data
    var recipes = [
      {
        name: 'ABIRAMI HOTEL',
        ingredients: ['omlette', 'dosa', 'idly', 'parotta']
      },
      {
        name: 'BAY GRILL',
        ingredients: ['chicken biriyani', 'pasta', 'chicken grill', 'noodles']
      },
      {
        name: 'SWAMI BREAKFAST',
        ingredients: ['poori', 'pongal', 'ghee rice', 'ghee dosa']
      }
    ];
  
    var matchingRecipes = recipes.filter(function(recipe) {
      return ingredients.every(function(ingredient) {
        return recipe.ingredients.includes(ingredient.trim().toLowerCase());
      });
    });
  
    if (matchingRecipes.length > 0) {
      var list = document.createElement('ul');
      matchingRecipes.forEach(function(recipe) {
        var item = document.createElement('li');
        item.textContent = recipe.name;
        list.appendChild(item);
      });
      recipeList.appendChild(list);
    } else {
      recipeList.textContent = 'No matching recipes found.';
    }
  }
  
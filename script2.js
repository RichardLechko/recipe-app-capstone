document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     Parse Recipes Data (ORIGINAL STRUCTURE PRESERVED)
  ============================== */

  const recipes = JSON.parse(data);
  let matchedRecipes = [];

  /* ===============================
     DOM Elements
  ============================== */

  const proteinSelect = document.getElementById("protein");
  const starchSelect = document.getElementById("starch");
  const vegetableSelect = document.getElementById("vegetable");
  const cuisineSelect = document.getElementById("cuisine"); // NEW

  const recipeSelect = document.getElementById("recipeSelect");

  const recipeName = document.getElementById("recipeName");
  const recipeImage = document.getElementById("recipeImage");
  const ingredientList = document.getElementById("ingredientList");
  const instructions = document.getElementById("instructions");

  const btnSearch = document.getElementById("btnSearch");
  const btnReset = document.getElementById("btnReset");


  /* ===============================
     Populate Filter Dropdowns
  ============================== */

  function populateFilters() {

    const proteins = new Set();
    const starches = new Set();
    const vegetables = new Set();
    const cuisines = new Set(); // NEW

    recipes.forEach(recipe => {
      recipe.protein.forEach(p => proteins.add(p));
      recipe.starch.forEach(s => starches.add(s));
      recipe.vegetables.forEach(v => vegetables.add(v));

      if (recipe.cuisine) {
        cuisines.add(recipe.cuisine);
      }
    });

    populateSelect(proteinSelect, proteins, "Select Protein");
    populateSelect(starchSelect, starches, "Select Starch");
    populateSelect(vegetableSelect, vegetables, "Select Vegetable");
    populateSelect(cuisineSelect, cuisines, "Select Cuisine"); // NEW
  }

  function populateSelect(selectElement, values, placeholderText) {

    selectElement.innerHTML = "";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = placeholderText;
    placeholder.disabled = true;
    placeholder.selected = true;
    selectElement.appendChild(placeholder);

    values.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      selectElement.appendChild(option);
    });
  }


  /* ===============================
     Generate Matching Recipes
  ============================== */

  btnSearch.addEventListener("click", function () {

    const selectedProtein = proteinSelect.value;
    const selectedStarch = starchSelect.value;
    const selectedVegetable = vegetableSelect.value;
    const selectedCuisine = cuisineSelect.value; // NEW

    matchedRecipes = recipes.filter(recipe =>
      recipe.protein.includes(selectedProtein) &&
      recipe.starch.includes(selectedStarch) &&
      recipe.vegetables.includes(selectedVegetable) &&
      recipe.cuisine === selectedCuisine
    );

    populateMatchingRecipes();
  });


  /* ===============================
     Populate Matching Recipes (Mobile Safe)
  ============================== */

  function populateMatchingRecipes() {

    recipeSelect.innerHTML = "";

    if (matchedRecipes.length === 0) {
      const option = document.createElement("option");
      option.textContent = "No recipes found";
      option.disabled = true;
      option.selected = true;
      recipeSelect.appendChild(option);
      recipeSelect.selectedIndex = 0;
      return;
    }

    matchedRecipes.forEach((recipe, index) => {

      const option = document.createElement("option");
      option.value = recipe.recipe;
      option.textContent = recipe.recipe;

      // Explicitly select first option (Mobile Fix)
      if (index === 0) {
        option.selected = true;
      }

      recipeSelect.appendChild(option);
    });

    // Force mobile rendering selection
    recipeSelect.selectedIndex = 0;
  }


  /* ===============================
     Display Selected Recipe
  ============================== */

  recipeSelect.addEventListener("change", function () {

    const selectedRecipe = matchedRecipes.find(
      recipe => recipe.recipe === recipeSelect.value
    );

    if (!selectedRecipe) return;

    recipeName.textContent = selectedRecipe.recipe;

    // Accessibility improvement
    recipeName.setAttribute("tabindex", "-1");
    recipeName.focus();

    recipeImage.src = selectedRecipe.image;
    recipeImage.alt = selectedRecipe.recipe + " image";

    ingredientList.innerHTML = "";

    Object.values(selectedRecipe.ingredients)
      .flat()
      .forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ingredientList.appendChild(li);
      });

    instructions.value = selectedRecipe.instructions;
  });


  /* ===============================
     Reset
  ============================== */

  btnReset.addEventListener("click", function () {

    proteinSelect.selectedIndex = 0;
    starchSelect.selectedIndex = 0;
    vegetableSelect.selectedIndex = 0;
    cuisineSelect.selectedIndex = 0; // NEW

    recipeSelect.innerHTML =
      '<option value="" disabled selected>Select a matching recipe</option>';

    matchedRecipes = [];

    recipeName.textContent = "";
    recipeImage.src = "images/placeholder.jpg";
    recipeImage.alt = "Recipe image";

    ingredientList.innerHTML = "";
    instructions.value = "";
  });


  /* ===============================
     Initialize
  ============================== */

  populateFilters();

});

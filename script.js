// Recipe Generator Script
// Anthony Mercer-Bey

document.addEventListener("DOMContentLoaded", function () {

  const recipes = JSON.parse(data);

  const proteinSelect = document.getElementById("protein");
  const starchSelect = document.getElementById("starch");
  const vegetableSelect = document.getElementById("vegetable");
  const cuisineSelect = document.getElementById("cuisine");
  const recipeSelect = document.getElementById("recipeSelect");

  const recipeName = document.getElementById("recipeName");
  const recipeImage = document.getElementById("recipeImage");
  const ingredientList = document.getElementById("ingredientList");
  const instructions = document.getElementById("instructions");

  const btnSearch = document.getElementById("btnSearch");
  const btnReset = document.getElementById("btnReset");
  const btnPrint = document.getElementById("btnPrint");


  /* ===============================
     Populate Filter Dropdowns
  ============================== */

  function populateFilters() {
    const proteins = new Set();
    const starches = new Set();
    const vegetables = new Set();
    const cuisines = new Set();

    recipes.forEach(function (recipe) {
      recipe.protein.forEach(function (p) { proteins.add(p); });
      recipe.starch.forEach(function (s) { starches.add(s); });
      recipe.vegetables.forEach(function (v) { vegetables.add(v); });

      if (Array.isArray(recipe.cuisine)) {
        recipe.cuisine.forEach(function (c) { cuisines.add(c); });
      }
    });

    populateSelect(proteinSelect, proteins);
    populateSelect(starchSelect, starches);
    populateSelect(vegetableSelect, vegetables);
    populateSelect(cuisineSelect, cuisines);
  }

  function populateSelect(selectElement, values) {
    selectElement.innerHTML = '<option value="All" selected>All</option>';

    values.forEach(function (value) {
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
    const selectedCuisine = cuisineSelect.value;

    const matches = recipes.filter(function (recipe) {

      const proteinMatch =
        selectedProtein === "All" || recipe.protein.includes(selectedProtein);

      const starchMatch =
        selectedStarch === "All" || recipe.starch.includes(selectedStarch);

      const vegetableMatch =
        selectedVegetable === "All" || recipe.vegetables.includes(selectedVegetable);

      const cuisineMatch =
        selectedCuisine === "All" || recipe.cuisine.includes(selectedCuisine);

      return proteinMatch && starchMatch && vegetableMatch && cuisineMatch;
    });

    populateMatchingRecipes(matches);
  });


  /* ===============================
     Populate Matching Recipes
  ============================== */

  function populateMatchingRecipes(matches) {

    recipeSelect.innerHTML = "";

    if (matches.length === 0) {
      const option = document.createElement("option");
      option.textContent = "No recipes found";
      option.disabled = true;
      option.selected = true;
      recipeSelect.appendChild(option);

      recipeName.textContent = "- Recipe -";
      recipeImage.src = "images/placeholder.jpg";
      ingredientList.innerHTML = "";
      instructions.value = "";
      return;
    }

    matches.forEach(function (recipe, index) {
      const option = document.createElement("option");
      option.value = recipe.recipe;
      option.textContent = recipe.recipe;

      if (index === 0) {
        option.selected = true;
      }

      recipeSelect.appendChild(option);
    });

    recipeSelect.selectedIndex = 0;

    // ✅ NEW: Automatically load the first recipe
    displayRecipeByName(recipeSelect.value);
  }


  /* ===============================
     Display Selected Recipe
  ============================== */

  function displayRecipeByName(recipeNameValue) {

    const selectedRecipe = recipes.find(function (recipe) {
      return recipe.recipe === recipeNameValue;
    });

    if (!selectedRecipe) return;

    recipeName.textContent = selectedRecipe.recipe;

    recipeName.setAttribute("tabindex", "-1");
    recipeName.focus();

    recipeImage.src = selectedRecipe.image;
    recipeImage.alt = selectedRecipe.recipe + " image";

    ingredientList.innerHTML = "";
    Object.values(selectedRecipe.ingredients).flat().forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      ingredientList.appendChild(li);
    });

    instructions.value = selectedRecipe.instructions;
  }

  recipeSelect.addEventListener("change", function () {
    displayRecipeByName(recipeSelect.value);
  });


  /* ===============================
     Print
  ============================== */

  btnPrint.addEventListener("click", function () {

    if (recipeName.textContent === "- Recipe -") {
      alert("Please select a recipe first.");
      return;
    }

    window.print();
  });


  /* ===============================
     Reset
  ============================== */

  btnReset.addEventListener("click", function () {

    proteinSelect.value = "All";
    starchSelect.value = "All";
    vegetableSelect.value = "All";
    cuisineSelect.value = "All";

    recipeSelect.innerHTML =
      '<option value="" disabled selected>Select a matching recipe</option>';

    recipeName.textContent = "- Recipe -";
    recipeImage.src = "images/placeholder.jpg";
    recipeImage.alt = "Recipe image";

    ingredientList.innerHTML = "";
    instructions.value = "";
  });


  /* ===============================
     Init
  ============================== */

  populateFilters();

});
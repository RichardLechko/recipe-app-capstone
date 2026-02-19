// Recipe Generator Script
// Anthony Mercer-Bey

document.addEventListener("DOMContentLoaded", function () {

  const proteinSelect = document.getElementById("protein");
  const starchSelect = document.getElementById("starch");
  const vegetableSelect = document.getElementById("vegetable");
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

    recipes.forEach(recipe => {
      recipe.protein.forEach(p => proteins.add(p));
      recipe.starch.forEach(s => starches.add(s));
      recipe.vegetables.forEach(v => vegetables.add(v));
    });

    populateSelect(proteinSelect, proteins);
    populateSelect(starchSelect, starches);
    populateSelect(vegetableSelect, vegetables);
  }

  function populateSelect(selectElement, values) {
    selectElement.innerHTML =
      '<option value="" disabled selected>Select an option</option>';

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

    const matches = recipes.filter(recipe =>
      recipe.protein.includes(selectedProtein) &&
      recipe.starch.includes(selectedStarch) &&
      recipe.vegetables.includes(selectedVegetable)
    );

    populateMatchingRecipes(matches);
  });


  /* ===============================
     MOBILE-SAFE DROPDOWN FIX
  ============================== */

  function populateMatchingRecipes(matches) {

    recipeSelect.innerHTML = "";

    if (matches.length === 0) {
      const option = document.createElement("option");
      option.textContent = "No recipes found";
      option.disabled = true;
      option.selected = true;
      recipeSelect.appendChild(option);
      recipeSelect.selectedIndex = 0;
      return;
    }

    matches.forEach((recipe, index) => {
      const option = document.createElement("option");
      option.value = recipe.recipe;
      option.textContent = recipe.recipe;

      // Explicitly select first item (MOBILE FIX)
      if (index === 0) {
        option.selected = true;
      }

      recipeSelect.appendChild(option);
    });

    // Force selection for mobile browsers
    recipeSelect.selectedIndex = 0;

    // Trigger change event so the first recipe's details display automatically
    recipeSelect.dispatchEvent(new Event("change"));
  }


  /* ===============================
     Display Selected Recipe
  ============================== */

  recipeSelect.addEventListener("change", function () {

    const selectedRecipe = recipes.find(
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
    Object.values(selectedRecipe.ingredients).flat().forEach(item => {
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

    recipeSelect.innerHTML =
      '<option value="" disabled selected>Select a matching recipe</option>';

    recipeName.textContent = "";
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

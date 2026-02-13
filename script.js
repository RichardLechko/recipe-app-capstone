// Recipe Generator Script
// Anthony Mercer-Bey

let matchedRecipes = [];

/* ===============================
   Populate Dropdowns
================================ */
function populateDropdowns() {
    const recipes = JSON.parse(data);

    const proteinSelect = document.getElementById("protein");
    const starchSelect = document.getElementById("starch");
    const vegetableSelect = document.getElementById("vegetable");

    const proteins = new Set();
    const starches = new Set();
    const vegetables = new Set();

    recipes.forEach(r => {
        const ing = r.ingredients || {};
        (ing.protein || []).forEach(p => proteins.add(p));
        (ing.starch || []).forEach(s => starches.add(s));
        (ing.vegetables || []).forEach(v => vegetables.add(v));
    });

    populateSelect(proteinSelect, proteins);
    populateSelect(starchSelect, starches);
    populateSelect(vegetableSelect, vegetables);
}

function populateSelect(select, values) {
    select.innerHTML = "";

    const any = document.createElement("option");
    any.value = "";
    any.textContent = "-- Any --";
    select.appendChild(any);

    Array.from(values).sort().forEach(v => {
        const opt = document.createElement("option");
        opt.value = v.toLowerCase();
        opt.textContent = v;
        select.appendChild(opt);
    });
}

/* ===============================
   Search Recipes
================================ */
function getRecipeData() {
    const recipes = JSON.parse(data);

    const pVal = document.getElementById("protein").value;
    const sVal = document.getElementById("starch").value;
    const vVal = document.getElementById("vegetable").value;

    const recipeSelect = document.getElementById("recipeSelect");

    recipeSelect.innerHTML = "";
    matchedRecipes = [];

    recipes.forEach(recipe => {
        const ing = recipe.ingredients || {};

        const p = (ing.protein || []).map(x => x.toLowerCase());
        const s = (ing.starch || []).map(x => x.toLowerCase());
        const v = (ing.vegetables || []).map(x => x.toLowerCase());

        const match =
            (pVal === "" || p.some(x => x.includes(pVal))) &&
            (sVal === "" || s.some(x => x.includes(sVal))) &&
            (vVal === "" || v.some(x => x.includes(vVal)));

        if (match) matchedRecipes.push(recipe);
    });

    if (matchedRecipes.length === 0) {
        const opt = document.createElement("option");
        opt.textContent = "No matching recipes";
        opt.disabled = true;
        recipeSelect.appendChild(opt);
        clearRecipeCard();
        return;
    }

    matchedRecipes.forEach((r, i) => {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = r.recipe;
        recipeSelect.appendChild(opt);
    });
}

/* ===============================
   Display Recipe
================================ */
function showRecipeDetails() {
    const index = document.getElementById("recipeSelect").value;
    if (!matchedRecipes[index]) return;

    const r = matchedRecipes[index];

    document.getElementById("recipeName").textContent = r.recipe;

    const list = document.getElementById("ingredientList");
    list.innerHTML = "";
    Object.values(r.ingredients).flat().forEach(i => {
        const li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li);
    });

    document.getElementById("instructions").value = r.instructions;

    const img = document.getElementById("recipeImage");
    img.src = r.image || "images/placeholder.jpg";
}

/* ===============================
   Reset
================================ */
function resetResults() {
    document.getElementById("protein").value = "";
    document.getElementById("starch").value = "";
    document.getElementById("vegetable").value = "";

    document.getElementById("recipeSelect").innerHTML = "";
    clearRecipeCard();
    matchedRecipes = [];
}

function clearRecipeCard() {
    document.getElementById("recipeName").textContent = "";
    document.getElementById("ingredientList").innerHTML = "";
    document.getElementById("instructions").value = "";
    document.getElementById("recipeImage").src = "images/placeholder.jpg";
}

/* ===============================
   Init
================================ */
function init() {
    populateDropdowns();

    document.getElementById("btnSearch")
        .addEventListener("click", getRecipeData);

    document.getElementById("recipeSelect")
        .addEventListener("change", showRecipeDetails);

    document.getElementById("btnReset")
        .addEventListener("click", resetResults);
}

window.addEventListener("load", init);

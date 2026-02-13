var data = '[\
  {\
    "recipe": "Grilled Chicken Bowl",\
    "protein": ["Chicken"],\
    "starch": ["Rice"],\
    "vegetables": ["Broccoli", "Carrots"],\
    "ingredients": {\
      "protein": ["Chicken"],\
      "starch": ["Rice"],\
      "vegetables": ["Broccoli", "Carrots"]\
    },\
    "image": "images/grilled-chicken-bowl.jpg",\
    "instructions": "Season chicken with salt and pepper.\\nGrill over medium heat for 6–7 minutes per side.\\nCook brown rice according to package directions.\\nSteam broccoli and carrots.\\nAssemble bowl and serve."\
  },\
  {\
    "recipe": "Salmon Quinoa Plate",\
    "protein": ["Salmon"],\
    "starch": ["Quinoa"],\
    "vegetables": ["Asparagus", "Spinach"],\
    "ingredients": {\
      "protein": ["Salmon"],\
      "starch": ["Quinoa"],\
      "vegetables": ["Asparagus", "Spinach"]\
    },\
    "image": "images/salmon-quinoa.jpg",\
    "instructions": "Rinse quinoa and cook until fluffy.\\nSeason salmon with lemon, salt, and pepper.\\nBake salmon at 400°F for 12–15 minutes.\\nSauté asparagus and wilt spinach.\\nServe together."\
  },\
  {\
    "recipe": "Beef Stir Fry",\
    "protein": ["Beef"],\
    "starch": ["Rice"],\
    "vegetables": ["Bell Peppers", "Snap Peas"],\
    "ingredients": {\
      "protein": ["Beef"],\
      "starch": ["Rice"],\
      "vegetables": ["Bell Peppers", "Snap Peas"]\
    },\
    "image": "images/beef-stir-fry.jpg",\
    "instructions": "Cook rice and set aside.\\nHeat oil in a wok.\\nSear beef until browned.\\nStir-fry vegetables.\\nCombine and serve over rice."\
  },\
  {\
    "recipe": "Turkey Sweet Potato Skillet",\
    "protein": ["Ground Turkey"],\
    "starch": ["Sweet Potatoes"],\
    "vegetables": ["Zucchini", "Onions"],\
    "ingredients": {\
      "protein": ["Ground Turkey"],\
      "starch": ["Sweet Potatoes"],\
      "vegetables": ["Zucchini", "Onions"]\
    },\
    "image": "images/turkey-sweet-potato.jpg",\
    "instructions": "Dice sweet potatoes and sauté until tender.\\nAdd turkey and cook through.\\nStir in vegetables.\\nSeason and cook until combined."\
  },\
  {\
    "recipe": "Tofu Veggie Bowl",\
    "protein": ["Tofu"],\
    "starch": ["Soba Noodles"],\
    "vegetables": ["Mushrooms", "Bok Choy"],\
    "ingredients": {\
      "protein": ["Tofu"],\
      "starch": ["Soba Noodles"],\
      "vegetables": ["Mushrooms", "Bok Choy"]\
    },\
    "image": "images/tofu-veggie-bowl.jpg",\
    "instructions": "Cook noodles and drain.\\nPan-fry tofu until golden.\\nAdd vegetables and sauté.\\nToss together with soy sauce."\
  },\
  {\
    "recipe": "Shrimp Garlic Pasta",\
    "protein": ["Shrimp"],\
    "starch": ["Pasta"],\
    "vegetables": ["Spinach", "Tomatoes"],\
    "ingredients": {\
      "protein": ["Shrimp"],\
      "starch": ["Pasta"],\
      "vegetables": ["Spinach", "Tomatoes"]\
    },\
    "image": "images/shrimp-pasta.jpg",\
    "instructions": "Boil pasta until al dente.\\nSauté shrimp with garlic.\\nAdd tomatoes and spinach.\\nToss with pasta and serve."\
  },\
  {\
    "recipe": "Chicken Fajita Bowl",\
    "protein": ["Chicken"],\
    "starch": ["Rice"],\
    "vegetables": ["Bell Peppers", "Onions"],\
    "ingredients": {\
      "protein": ["Chicken"],\
      "starch": ["Rice"],\
      "vegetables": ["Bell Peppers", "Onions"]\
    },\
    "image": "images/chicken-fajita.jpg",\
    "instructions": "Season chicken with fajita spices.\\nCook chicken until done.\\nSauté peppers and onions.\\nServe over rice."\
  },\
  {\
    "recipe": "Pork Fried Rice",\
    "protein": ["Pork"],\
    "starch": ["Rice"],\
    "vegetables": ["Peas", "Carrots"],\
    "ingredients": {\
      "protein": ["Pork"],\
      "starch": ["Rice"],\
      "vegetables": ["Peas", "Carrots"]\
    },\
    "image": "images/pork-fried-rice.jpg",\
    "instructions": "Cook pork until browned.\\nAdd vegetables and rice.\\nStir-fry with soy sauce.\\nServe hot."\
  },\
  {\
    "recipe": "Lentil Vegetable Stew",\
    "protein": ["Lentils"],\
    "starch": ["Potatoes"],\
    "vegetables": ["Carrots", "Celery"],\
    "ingredients": {\
      "protein": ["Lentils"],\
      "starch": ["Potatoes"],\
      "vegetables": ["Carrots", "Celery"]\
    },\
    "image": "images/lentil-stew.jpg",\
    "instructions": "Simmer lentils until tender.\\nAdd potatoes and vegetables.\\nCook until soft.\\nSeason and serve."\
  },\
  {\
    "recipe": "Garlic Chicken Couscous",\
    "protein": ["Chicken"],\
    "starch": ["Couscous"],\
    "vegetables": ["Zucchini", "Onions"],\
    "ingredients": {\
      "protein": ["Chicken"],\
      "starch": ["Couscous"],\
      "vegetables": ["Zucchini", "Onions"]\
    },\
    "image": "images/garlic-chicken-couscous.jpg",\
    "instructions": "Cook couscous according to package.\\nSauté chicken with garlic.\\nAdd vegetables and serve."\
  },\
  {\
    "recipe": "Beef Potato Hash",\
    "protein": ["Beef"],\
    "starch": ["Potatoes"],\
    "vegetables": ["Onions", "Bell Peppers"],\
    "ingredients": {\
      "protein": ["Beef"],\
      "starch": ["Potatoes"],\
      "vegetables": ["Onions", "Bell Peppers"]\
    },\
    "image": "images/beef-potato-hash.jpg",\
    "instructions": "Brown beef in a skillet.\\nAdd potatoes and cook until tender.\\nStir in vegetables."\
  },\
  {\
    "recipe": "Salmon Rice Skillet",\
    "protein": ["Salmon"],\
    "starch": ["Rice"],\
    "vegetables": ["Spinach", "Tomatoes"],\
    "ingredients": {\
      "protein": ["Salmon"],\
      "starch": ["Rice"],\
      "vegetables": ["Spinach", "Tomatoes"]\
    },\
    "image": "images/salmon-rice-skillet.jpg",\
    "instructions": "Cook rice.\\nPan-sear salmon.\\nCombine with vegetables and serve."\
  },\
  {\
    "recipe": "Turkey Quinoa Stir Fry",\
    "protein": ["Ground Turkey"],\
    "starch": ["Quinoa"],\
    "vegetables": ["Broccoli", "Carrots"],\
    "ingredients": {\
      "protein": ["Ground Turkey"],\
      "starch": ["Quinoa"],\
      "vegetables": ["Broccoli", "Carrots"]\
    },\
    "image": "images/turkey-quinoa.jpg",\
    "instructions": "Cook quinoa.\\nBrown turkey.\\nAdd vegetables and stir-fry."\
  },\
  {\
    "recipe": "Chickpea Veggie Rice Skillet",\
    "protein": ["Chickpeas"],\
    "starch": ["Rice"],\
    "vegetables": ["Zucchini", "Peppers"],\
    "ingredients": {\
      "protein": ["Chickpeas"],\
      "starch": ["Rice"],\
      "vegetables": ["Zucchini", "Peppers"]\
    },\
    "image": "images/chickpea-rice.jpg",\
    "instructions": "Warm chickpeas with spices.\\nAdd rice and vegetables.\\nStir until heated through."\
  },\
  {\
    "recipe": "Shrimp Potato Sheet Pan",\
    "protein": ["Shrimp"],\
    "starch": ["Potatoes"],\
    "vegetables": ["Green Beans", "Onions"],\
    "ingredients": {\
      "protein": ["Shrimp"],\
      "starch": ["Potatoes"],\
      "vegetables": ["Green Beans", "Onions"]\
    },\
    "image": "images/shrimp-potato.jpg",\
    "instructions": "Roast potatoes until tender.\\nAdd shrimp and vegetables.\\nBake until shrimp is cooked."\
  },\
  {\
    "recipe": "Pork Noodle Bowl",\
    "protein": ["Pork"],\
    "starch": ["Noodles"],\
    "vegetables": ["Cabbage", "Carrots"],\
    "ingredients": {\
      "protein": ["Pork"],\
      "starch": ["Noodles"],\
      "vegetables": ["Cabbage", "Carrots"]\
    },\
    "image": "images/pork-noodles.jpg",\
    "instructions": "Cook noodles.\\nSauté pork.\\nAdd vegetables and toss."\
  },\
  {\
    "recipe": "Black Bean Sweet Potato Bowl",\
    "protein": ["Black Beans"],\
    "starch": ["Sweet Potatoes"],\
    "vegetables": ["Corn", "Onions"],\
    "ingredients": {\
      "protein": ["Black Beans"],\
      "starch": ["Sweet Potatoes"],\
      "vegetables": ["Corn", "Onions"]\
    },\
    "image": "images/black-bean-bowl.jpg",\
    "instructions": "Roast sweet potatoes.\\nWarm beans.\\nCombine and serve."\
  },\
  {\
    "recipe": "Tofu Rice Skillet",\
    "protein": ["Tofu"],\
    "starch": ["Rice"],\
    "vegetables": ["Broccoli", "Mushrooms"],\
    "ingredients": {\
      "protein": ["Tofu"],\
      "starch": ["Rice"],\
      "vegetables": ["Broccoli", "Mushrooms"]\
    },\
    "image": "images/tofu-rice.jpg",\
    "instructions": "Pan-fry tofu.\\nAdd rice and vegetables.\\nStir and season."\
  },\
  {\
    "recipe": "Steak Mashed Potatoes",\
    "protein": ["Steak"],\
    "starch": ["Potatoes"],\
    "vegetables": ["Green Beans"],\
    "ingredients": {\
      "protein": ["Steak"],\
      "starch": ["Potatoes"],\
      "vegetables": ["Green Beans"]\
    },\
    "image": "images/steak-potatoes.jpg",\
    "instructions": "Season and grill steak.\\nBoil and mash potatoes.\\nSteam green beans.\\nPlate and serve."\
  }\
]';

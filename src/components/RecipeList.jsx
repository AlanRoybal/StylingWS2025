import React from "react";
import RecipeCard from "./RecipeCard";
import carbonaraImage from "../assets/carbonara.jpg";
import stirfryImage from "../assets/stirfry.jpg";
import smoothieImage from "../assets/smoothie.jpg";

function RecipeList() {
  const recipes = [
    {
      title: "Pasta Carbonara",
      description: "Classic Italian pasta with creamy egg sauce",
      ingredients: [
        "Spaghetti",
        "Eggs",
        "Pancetta",
        "Parmesan",
        "Black Pepper",
      ],
      imageUrl: carbonaraImage,
    },
    {
      title: "Vegetable Stir Fry",
      description: "Quick and healthy mixed vegetable dish",
      ingredients: [
        "Mixed Vegetables",
        "Soy Sauce",
        "Garlic",
        "Ginger",
        "Sesame Oil",
      ],
      imageUrl: stirfryImage,
    },
    {
      title: "Berry Smoothie",
      description: "Refreshing mixed berry smoothie",
      ingredients: ["Mixed Berries", "Yogurt", "Honey", "Banana", "Milk"],
      imageUrl: smoothieImage,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          description={recipe.description}
          ingredients={recipe.ingredients}
          imageUrl={recipe.imageUrl}
        />
      ))}
    </div>
  );
}

export default RecipeList;

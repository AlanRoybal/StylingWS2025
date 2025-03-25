import React, { useState } from 'react';

function RecipeCard({ title, description, ingredients, imageUrl }) {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <button 
          onClick={() => setShowIngredients(!showIngredients)}
          className={`
            w-full py-2 rounded transition duration-300
            ${showIngredients 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-green-500 text-white hover:bg-green-600'
            }
          `}
        >
          {showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
        </button>

        {showIngredients && (
          <ul className="mt-4 space-y-2 text-gray-700 animate-fade-in">
            {ingredients.map((ingredient, index) => (
              <li 
                key={index} 
                className="flex items-center space-x-2 bg-gray-100 p-2 rounded"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
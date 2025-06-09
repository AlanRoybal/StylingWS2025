Header.jsx

```
<header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">
          🍳 Tasty Recipes
        </h1>


<ul className="flex space-x-4">
            <li className="hover:text-yellow-300 transition duration-300">
              <a href="#" className="font-medium">Recipes</a>


<li className="hover:text-yellow-300 transition duration-300">
              <a href="#" className="font-medium">About</a>
```

RecipeCard.jsx

```
<div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>


{showIngredients ? <FaChevronUp /> : <FaChevronDown />}


<span className="w-2 h-2 bg-primary rounded-full"></span>
```

tailwind.config.js

```
theme: {
    extend: {
      colors: {
        primary: "#2b7efe",
      },
    },
  },
```

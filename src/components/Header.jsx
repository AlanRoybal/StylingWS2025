import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">
          🍳 Tasty Recipes
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-yellow-300 transition duration-300">
              <a href="#" className="font-medium">Recipes</a>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <a href="#" className="font-medium">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
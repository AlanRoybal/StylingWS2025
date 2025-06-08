import React from "react";

function Header() {
  return (
    <header className=" py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-wide">🍳 Tasty Recipes</h1>
        <nav>
          <ul className=" ">
            <li className="">
              <a href="#" className="font-medium">
                Recipes
              </a>
            </li>
            <li className="">
              <a href="#" className="font-medium">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

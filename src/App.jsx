import React from 'react';
import RecipeList from './components/RecipeList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <RecipeList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
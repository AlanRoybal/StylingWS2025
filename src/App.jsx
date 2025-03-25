import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import RecipeList from './components/RecipeList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BackgroundScene from './components/BackgroundScene.jsx';

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.from(mainRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      {/* <BackgroundScene /> */}
      <div className="relative z-10">
       <Header />
        <main 
          ref={mainRef} 
          className="flex-grow container mx-auto px-4 py-8 relative"
        >
          <div className="relative z-20">
            <RecipeList />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
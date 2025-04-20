import './App.css';
import Navbar from './components/Navbar';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';
import GradientText from "./components/ReactBits/GradientText";
import AnimatedButton from './components/ReactBits/AnimatedButton';
import AnimatedSection from './components/ReactBits/AnimatedSection';
import AnimatedText from './components/ReactBits/AnimatedText';
import React from 'react';

function App() { //Returns the structure of the page
  return (
    <div className="min-h-screen"> 
      <Navbar />
      
      <main className="container mx-auto px-4 py-12"> 
        {React.createElement(
          AnimatedSection, 
          { 
            delay: 0.2, 
            direction: "down" as const, 
            className: "text-center mb-8" 
          },
          <h1 className="text-4xl font-bold"> 
            <AnimatedText 
              text="WHERE" 
              type="letter" 
              staggerChildren={0.05} 
              className="mr-2"
            />
            {React.createElement(
              GradientText,
              {
                colors: ["#D42CEA", "#571260", "#946799"],
                animationSpeed: 5,
                className: "font-bold"
              },
              "WORK"
            )}
            <AnimatedText 
              text=" GETS DONE" 
              type="letter" 
              staggerChildren={0.05} 
              delay={0.5}
            />
          </h1>
        )}
        
        {React.createElement(
          AnimatedSection,
          {
            delay: 0.5,
            direction: "up" as const,
            className: "flex justify-center mb-12"
          },
          React.createElement(
            AnimatedButton,
            {
              className: "flex items-center",
              color: "#4A1762",
              hoverColor: "#6B2A8A"
            },
            <>GET STARTED <span className="ml-2">→</span></>
          )
        )}
        
        {React.createElement(
          AnimatedSection,
          {
            delay: 0.7,
            className: "mb-16"
          },
          <div className="bg-gray-100 h-64 flex items-center justify-center"> 
            <p className="text-gray-800">app animation goes here</p>
          </div>
        )}
        
        <InfoSections />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

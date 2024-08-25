import React from 'react';
import { about5 } from '../assets/images'; // Replace with your actual image path

const About5 = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-pink-200 border-b-8 border-black p-8">
      {/* Container for the entire section */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        
        {/* Left Side: Image */}
        <div className="lg:w-[75%] flex justify-center mb-8 lg:mb-0">
          <img
            src={about5}
            alt="About Us"
            className="w-[400px] h-[400px] lg:w-[650px] lg:h-[650px] object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Title and Paragraph */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left p-4">
          <h1 className="text-[44px] font-comic text-black mb-4">
            ABOUT
          </h1>
          <p className="text-[26px] font-kalam text-black leading-relaxed">
            BOOM, BOOM, BOOM….What’s that? It’s $PHATY walking to get his favourite snack & he’s right around the corner!!! He’s so fat even mosquitos don’t want a piece of him. His appetite is becoming bigger with each second & his new favourite snacks are pump.fun, ray & dex. Watch out, $PHATY is coming in hot! Help $PHATY afford a gym membership by lighting up the green candles!<br /> Original Matt Furie inspired character
          </p>
        </div>
      </div>
    </section>
  );
};

export default About5;



import React from 'react';
import { rdT2, rd2 } from '../assets/images'; // Import the images

const Roadmap2 = () => {
  return (
    <section
      id="roadmap"
      className="w-full h-screen flex flex-col items-center justify-start text-black"
    >
      {/* Top Centered Image */}
      <div className="w-full flex justify-center pt-8 mb-12">
        <img
          src={rdT2}
          alt="Top Centered"
          className="w-[750px] h-auto"
        />
      </div>

      {/* Content Container */}
      <div className="flex w-full max-w-screen-lg items-center">
        {/* Left Side: Background Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={rd2}
            alt="Background Image"
            className="w-[80%] h-auto object-cover"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-1/2 flex justify-center items-center p-8">
          <div className="text-[22px] text-black">
            <ul className="list-none list-inside font-kalam space-y-4">
              <li>1. CALLER AT KOFH</li>
              <li>2. PREPAYING DEX AT AROUND 30K MCAP</li>
              <li>3. LIVE BURNS AT EVERY COMPLETED STEP</li>
              <li>4. DEX ADS AS SOON AS WE ARE LIVE ON RAYDIUM</li>
              <li>5. MOONTOK LISTING 100k</li>
              <li>6. MORE BURNS</li>
              <li>7. BIG CALLERS 200-300k</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap2;

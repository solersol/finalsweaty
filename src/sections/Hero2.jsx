// import React from 'react';
// import { logoMain, linkImage1, linkImage2, linkImage3 } from '../assets/images'; // Replace with your actual image paths

// const Hero2 = () => {
//   return (
//     <section className="w-full h-screen flex flex-col items-center  text-black">
//       {/* Logo at the top center */}
//       <div className="w-full flex justify-center pt-8 mb-8">
//         <img src={logoMain} alt="Logo" className="w-[700px] h-auto" />
//       </div>

//       {/* Content Centered Vertically */}
//       <div className="flex flex-col items-center justify-center h-full">
//         {/* Title */}
//         <h1 className="text-3xl font-bold mb-8 text-center font-anton">CA: </h1>

//         {/* Linked Images in a Row */}
//         <div className="flex space-x-4">
//           <a href="https://pump.fun/" className="transition-transform transform hover:scale-150">
//             <img src={linkImage1} alt="Link to Page 1" className="w-24 h-auto rounded-lg" />
//           </a>
//           <a href="https://t.me/" className="transition-transform transform hover:scale-150">
//             <img src={linkImage2} alt="Link to Page 2" className="w-24 h-auto rounded-lg" />
//           </a>
//           <a href="https://x.com/" className="transition-transform transform hover:scale-150">
//             <img src={linkImage3} alt="Link to Page 3" className="w-24 h-auto rounded-lg" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero2;


import React from 'react';
import { logoMain, linkImage1, linkImage2, linkImage3, gifImage } from '../assets/images'; // Replace with your actual image paths

const Hero2 = () => {
  return (
    <section className="w-full h-screen flex items-center justify-between text-black">
      {/* Left Content */}
      <div className="flex flex-col items-center justify-center w-1/2 h-full">
        {/* Logo at the top center */}
        <div className="w-full flex justify-center pt-8 mb-8">
          <img src={logoMain} alt="Logo" className="w-[700px] h-auto" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-8 text-center font-anton">CA: </h1>

        {/* Linked Images in a Row */}
        <div className="flex space-x-4">
          <a href="https://pump.fun/" className="transition-transform transform hover:scale-150">
            <img src={linkImage1} alt="Link to Page 1" className="w-24 h-auto rounded-lg" />
          </a>
          <a href="https://t.me/" className="transition-transform transform hover:scale-150">
            <img src={linkImage2} alt="Link to Page 2" className="w-24 h-auto rounded-lg" />
          </a>
          <a href="https://x.com/" className="transition-transform transform hover:scale-150">
            <img src={linkImage3} alt="Link to Page 3" className="w-24 h-auto rounded-lg" />
          </a>
        </div>
      </div>

      {/* GIF on the Right Side */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <img src={gifImage} alt="Animated GIF" className="w-auto h-[80%] object-contain" />
      </div>
    </section>
  );
};

export default Hero2;

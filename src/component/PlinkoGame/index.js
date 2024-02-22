// import React from 'react';
// export default function PlinkoGame() {
//     const rows = [];
//     const height = 16;
//     const startFrom = 3;
//     for (let i = startFrom; i <= height; i++) {
//         const blocks = [];
//         for (let j = 1; j <= i; j++) {
//             blocks.push(<span key={j} className="w-2 rounded-full h-2 rounded-full bg-white mx-3"></span>);
//         }
//         rows.push(<div key={i} className="flex justify-center mt-6">{blocks}</div>);
//     }
//     return (
//         <div className="flex flex-col items-center mt-5 pb-10 w-full">{rows}</div>
//     );
// }

import React from "react";
export default function PlinkoGame() {
  return (
    // <div className="w-full grid grid-cols-1 bg-red sm:bg-yellow">
    //   <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(3)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //                     <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(4)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(5)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(6)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(7)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(8)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(9)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(10)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(11)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(12)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(13)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(14)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(15)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(16)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //         <div className='w-full flex  justify-center mt-4'>
    //             {[...Array(17)].map((_, index) => (
    //                 <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
    //             ))}
    //         </div>
    //   <div className="w-full flex  justify-center mt-4">
    //     {[...Array(18)].map((_, index) => (
    //       <div
    //         key={index}
    //         className="w-[10px] h-[10px] rounded-full bg-white mx-[10px] "
    //       ></div>
    //     ))}
    //   </div>
    // </div>
    <div class="w-full flex flex-col h-[500px] md:h-full justify-between bg-blue4 py-10">
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(13)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(14)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(17)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      <div class="w-full max-w-screen-lg flex items-center justify-center ">
        {[...Array(18)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white mx-[5px] sm:mx-2 xl:mx-3"
          ></div>
        ))}
      </div>
      {/* <div class="w-full max-w-screen-lg flex justify-between items-center bg-red   lg:px-[14%]">
        {[...Array(18)].map((_, index) => (
          <div
            key={index}
            className="w-2 sm:w-3 h-2 sm:h-3 md:w-3 md:h-3 rounded-full bg-white"
          ></div>
        ))}
      </div> */}
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import '../../App.css'; // Import CSS file for styling
// export default function PlinkoGame() {
//     const [balls, setBalls] = useState([]);
//     const height = 16;
//     const startFrom = 3; // Start the game from 3 items
//     // Function to generate a random position for the ball
//     const generateRandomPosition = () => {
//         return Math.floor(Math.random() * (height - startFrom + 1)) + startFrom;
//     };
//     // Function to move the balls down by one position
//     const moveBalls = () => {
//         const newBalls = balls.map(ball => ({
//             position: ball.position + 1,
//         }));
//         setBalls(newBalls);
//     };
//     // Effect to initialize the balls
//     useEffect(() => {
//         const initialBalls = Array.from({ length: 2 }, () => ({
//             position: generateRandomPosition(),
//         }));
//         setBalls(initialBalls);
//         // Set interval to move the balls down periodically
//         const intervalId = setInterval(moveBalls, 1000); // Adjust the interval as needed
//         return () => clearInterval(intervalId); // Cleanup interval on component unmount
//     }, []);
//     // Function to render a single ball
//     const renderBall = (position) => (
//         <div key={position} className="ball" style={{ gridColumn: position }}>
//             {/* Ball content */}
//         </div>
//     );
//     // Function to render all balls
//     const renderBalls = () => balls.map(ball => renderBall(ball.position));
//     const rows = [];
//     for (let i = startFrom; i <= height; i++) {
//         const blocks = [];
//         for (let j = 1; j <= i; j++) {
//             blocks.push(<span key={j} className="w-2 rounded-full h-2 rounded-full bg-white mx-3"></span>);
//         }
//         rows.push(<div key={i} className="flex justify-center mt-6">{blocks}</div>);
//     }
//     return (
//         <div className="w-full">
//             <div className="balls-container">{renderBalls()}</div>
//             <div className="flex flex-col items-center mt-5 pb-10">{rows}</div>
//         </div>
//     );
// }

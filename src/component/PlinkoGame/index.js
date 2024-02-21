


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

import React from 'react';
export default function PlinkoGame() {

    return (
        <div className='w-full px-10'>
            {/* <div className='w-full flex  justify-center mt-4'>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
                        <div className='w-full flex  justify-center mt-4'>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(5)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(6)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(7)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(8)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(9)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(10)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(11)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(12)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(13)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(14)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(15)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(16)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div>
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(17)].map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full bg-white mx-2'></div>
                ))}
            </div> */}
            <div className='w-full flex  justify-center mt-4'>
                {[...Array(18)].map((_, index) => (
                    <div key={index} className='w-[10px] h-[10px] rounded-full bg-white mx-[8px]'></div>
                ))}
            </div>
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
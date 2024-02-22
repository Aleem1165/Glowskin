import React, { useState } from "react";
import images from "../../utilities/images";
import VideoPlayer from "../../component/VideoPlayer";
import videos from "../../utilities/videos";

export default function Game() {
  const [game, setGame] = useState([
    { name: "game1" },
    { name: "game2" },
    { name: "game3" },
    { name: "game4" },
    { name: "game5" },
    { name: "game6" },
    { name: "game7" },
  ]);
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <div className="flex flex-col md:flex-row  items-start gap-2">
        <div className="md:w-[25%] w-full bg-paymentModalBg h-auto shadow-lg relative">
          <VideoPlayer src={videos.caseee} navigate={"/"} />
          {/* <div>name</div> */}
          {/* <img
            src={images.gameShadow}
            className="absolute bottom-2 bg w-full h-1/2 z-10"
          /> */}
        </div>
        <div className="md:w-[50%] w-full h-auto shadow-lg">
          <VideoPlayer src={videos.battle} navigate={"/"} />
        </div>
        <div className="md:w-[25%] w-full h-auto shadow-lg">
          <VideoPlayer src={videos.roulette} navigate={"/"} />
        </div>
      </div>
      <div className="flex  flex-col md:flex-row  items-start gap-2 mt-4">
        <div className="w-full md:w-[25%] h-auto shadow-lg">
          <VideoPlayer src={videos.plinko} navigate={"/plinko"} />
        </div>
        <div className="w-full md:w-[25%] h-auto shadow-lg">
          <VideoPlayer src={videos.mines} navigate={"/mines"} />
        </div>
        <div className="w-full md:w-[25%] h-auto shadow-lg">
          <VideoPlayer src={videos.upgrade} navigate={"/"} />
        </div>
        <div className="w-full md:w-[25%] h-auto shadow-lg">
          <VideoPlayer src={videos.jackpot} navigate={"/jackpot"} />
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// export default function Game() {
//   const [game, setGame] = useState([
//     { name: "game1" },
//     { name: "game2" },
//     { name: "game3" },
//     { name: "game4" },
//     { name: "game5" },
//     { name: "game6" },
//     { name: "game7" },
//   ]);

//   return (
//     <div className="max-w-screen-xl mx-auto w-full flex flex-col text-white">
//       <div className="flex ">
//         {/* First div */}
//         <div className="w-[25%] p-2 bg-red">{game[0].name}</div>
//         {/* Second div */}
//         <div className="w-[50%] p-2 bg-red mx-2">{game[1].name}</div>
//         {/* Third div */}
//         <div className="w-[25%] p-2 bg-red">{game[2].name}</div>
//       </div>
//       <div className="flex">
//         {/* Render the last four items */}
//         {game.slice(3).map((item, index) => (
//           <div
//             key={index}
//             // className="w-[25%] p-2 bg-red"
//             className={
//               index == 1
//                 ? "w-[25%]  p-2 bg-green ml-2 mr-1"
//                 : index == 2
//                 ? "w-[25%]  p-2 bg-green ml-1 mr-2"
//                 : "w-[25%] p-2 bg-red"
//             }
//           >
//             {item.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

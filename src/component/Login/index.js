import React from "react";
// import Line from "../HomeLine";
import images from "../../utilities/images";
import { useHamberg, useModal, useSignIn } from "../../Screens/Layout";

export default function Login({ onClose }) {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { signin, setSignin } = useSignIn();
  const { hamberg, setHamberg } = useHamberg()

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the parent div
  };

  const handleSignIn = async () => {
    setSignin(true);
    setIsModalOpen(false);
    setHamberg(false)
  };
  return (
    <div className="w-full flex flex-col mt-5 " onClick={handleClick}>
      <input
        placeholder="Email"
        className="focus:outline-none border-b-2 border-lineColor pl-1 text-sm bg-transparent text-white text-opacity-50 placeholder-white placeholder-opacity-50 pb-1 mt-2"
      />
      <input
        placeholder="Password"
        className=" mt-4 focus:outline-none border-b-2 border-lineColor pl-1 text-sm bg-transparent text-white text-opacity-50 placeholder-white placeholder-opacity-50 pb-1"
      />
      <div className=" text-xs self-end text-white underline cursor-pointer mt-1 active:opacity-50">
        Forgot password?
      </div>
      <div
        onClick={handleSignIn}
        className=" font-semibold bg-yellow  text-center mt-8 pt-2 pb-2 rounded-md cursor-pointer active:opacity-50"
      >
        Log In
      </div>
      <div className="mt-5 mb-5">{/* <Line /> */}</div>
      <div className="font-semibold flex flex-row items-center justify-center bg-btnLight text-white pt-2 pb-2 rounded-md active:opacity-50 cursor-pointer">
        <img src={images.google} className="w-4 mr-2" />
        Sign in with google
      </div>
    </div>
  );
}

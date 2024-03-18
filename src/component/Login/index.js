import React, { useState } from "react";
import "../../App.css";
// import Line from "../HomeLine";
import images from "../../utilities/images";
import { useHamberg, useModal, useSignIn } from "../../Screens/Layout";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError } from "../ToastFunctions";
import { Signin } from "../../config/Api";
import { FadeLoader, ScaleLoader } from "react-spinners";

export default function Login({ onClose }) {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { signin, setSignin } = useSignIn();
  const { hamberg, setHamberg } = useHamberg();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the parent div
  };

  const handleSignIn = async () => {
    try {
      setLoader(true);
      if (!email || !password) {
        setLoader(false);
        return handleError("*All fields are required.");
      }
      const response = await Signin();
      console.log(response);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("E=--=", error);
    }
  };

  return (
    <div className="w-full flex flex-col mt-5 " onClick={handleClick}>
      <input
        placeholder="Email"
        className="focus:outline-none border-b-2 border-lineColor pl-1 text-sm bg-transparent text-white text-opacity-50 placeholder-white placeholder-opacity-50 pb-1 mt-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        className=" mt-4 focus:outline-none border-b-2 border-lineColor pl-1 text-sm bg-transparent text-white text-opacity-50 placeholder-white placeholder-opacity-50 pb-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className=" text-xs self-end text-white underline cursor-pointer mt-1 active:opacity-50">
        Forgot password?
      </div>
      <div
        onClick={() => !loader && handleSignIn()}
        className={
          loader
            ? "font-semibold bg-yellow h-[42px] flex flex-row items-center justify-center text-center mt-8 rounded-md cursor-pointer"
            : "font-semibold bg-yellow h-[42px] flex flex-row items-center justify-center text-center mt-8 rounded-md cursor-pointer active:opacity-50"
        }
      >
        {loader ? (
          <ScaleLoader
            color="#000000"
            height={20}
            margin={3}
            radius={2}
            width={4}
          />
        ) : (
          "Log In"
        )}
      </div>
      <div className="mt-5 mb-5">{/* <Line /> */}</div>
      <div className="font-semibold flex flex-row items-center justify-center bg-btnLight text-white pt-2 pb-2 rounded-md active:opacity-50 cursor-pointer">
        <img src={images.google} className="w-4 mr-2" />
        Sign in with google
      </div>
      <ToastContainer />
    </div>
  );
}

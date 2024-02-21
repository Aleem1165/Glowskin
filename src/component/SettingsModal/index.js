import { useState, useEffect } from "react";
import images from "../../utilities/images";
import { useModal } from "../../Screens/Layout";
import Login from "../Login";
import Register from "../Register";
import "../../App.css"

const SettingsModal = ({ isModalOpen, setIsModalOpen }) => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    setIsModalOpen(isModalOpen);
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when unmounting
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50  ${
        isModalOpen ? "" : "hidden"
      }`}
      onClick={closeModal}
      style={{
        zIndex: isModalOpen ? 50 : -1,
      }}
    >
      <div className="w-full bg-transparent h-full flex items-center justify-center max-w-screen-xl ">
        <div
          className="bg-paymentModalBg shadow-lg shadow-white-900 bg-cover bg-center p-4  rounded-md w-45p h-[80vh]  flex flex-col items-start"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="w-full flex flex-row items-center justify-between">
            <div className="text-lg font-600 text-white font-semibold">
              Setting
            </div>
            <img
              src={images.crossWhite}
              className="w-4 cursor-pointer"
              onClick={closeModal}
            />
          </div>
          <div className="bg-blue3 w-full rounded-md mt-5 px-10 py-5 overflow-y-scroll check">
            <div className="text-md text-grayText">Username</div>
            <input
              type="text"
              placeholder="Username"
              className="focus:outline-none w-full p-1 mt-1 text-sm bg-transparent text-white placeholder-white border-b-2 border-lineBlue"
            />

            <div className="text-md text-grayText mt-6">
              Trade URL
              <span className="text-yellow cursor-pointer active:opacity-80"> (Find)</span>
            </div>
            <input
              type="text"
              placeholder="Trade URL"
              className="focus:outline-none w-full p-1 mt-1 text-sm bg-transparent text-white placeholder-white border-b-2 border-lineBlue"
            />

            <div className="text-md text-grayText mt-6">
              API Key
              <span className="text-yellow cursor-pointer active:opacity-80"> (Find)</span>
            </div>
            <input
              type="text"
              placeholder="API Key"
              className="focus:outline-none w-full p-1 mt-1 text-sm bg-transparent text-white placeholder-white border-b-2 border-lineBlue"
            />

            <div className="text-md text-grayText mt-6">
              Client Seed
              <span className="text-yellow cursor-pointer active:opacity-80"> (Randomize)</span>
            </div>
            <input
              type="text"
              placeholder="Client Seed"
              className="focus:outline-none w-full p-1 mt-1 text-sm bg-transparent text-white placeholder-white border-b-2 border-lineBlue"
            />
            <div className="flex h-5 flex-row items-center mt-4 text-white text-xs">
              <img
                src={check ? images.check : images.unCheck}
                className="w-4 mr-2 cursor-pointer"
                onClick={() => setCheck(!check)}
              />
              Send SMS and E-mail Instructions
            </div>
            <div className="text-md mt-5 text-white">Link Account</div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  items-start gap-2">
              <div className="flex flex-row items-center justify-center bg-red2 px-4 py-2 mt-2 rounded-md cursor-pointer active:opacity-80">
                <img src={images.google} className="w-4" />
                <div className="text-sm text-white font-semibold ml-1">
                  Google Linked
                </div>
              </div>
              <div className="flex flex-row items-center justify-center bg-steamBtn px-4 py-2 mt-2 rounded-md cursor-pointer active:opacity-80">
                <img src={images.steam} className="w-4" />
                <div className="text-sm text-white font-semibold ml-1">
                  Link Steam
                </div>
              </div>
              <div className="flex flex-row items-center justify-center bg-btnBlue px-4 py-2 mt-2 rounded-md cursor-pointer active:opacity-80">
                <img src={images.game} className="w-4" />
                <div className="text-sm text-white font-semibold ml-1">
                  Link Discord
                </div>
              </div>
            </div>
            <div className="text-md mt-5 text-white">Security</div>
            <div className="w-full flex flex-col lg:flex-row items-start gap-2">
              <div className="flex flex-row items-center justify-center bg-yellow px-4 py-2 mt-2 rounded-md cursor-pointer active:opacity-80">
                <img src={images.simpleLock} className="w-4" />
                <div className="text-sm text-black font-semibold ml-1">
                  Enable 2FA
                </div>
              </div>
              <div className="flex flex-row items-center justify-center bg-disabledGray px-4 py-2 mt-2 rounded-md cursor-pointer active:opacity-80">
                <img src={images.signinOut} className="w-4" />
                <div className="text-sm text-white font-semibold ml-1">
                Signout from everywhere
                </div>
              </div>
            </div>
            <div className="text-md mt-5 text-white">Profile Anonymity</div>
            <div className="w-full flex items-start gap-2">
              <div className="flex flex-row items-center justify-center bg-yellow px-4 py-2 mt-2 rounded-md cursor-pointer active:opacity-80">
                <img src={images.cap} className="w-4" />
                <div className="text-sm text-black font-semibold ml-1">
                Hide My Profile
                </div>
              </div>
            </div>
            <div className="text-lg mt-5 text-white font-semibold underline cursor-pointer active:opacity-80">Enroll As Trader</div>
            <div className="w-full flex items-center justify-center">
            <div onClick={closeModal} className="mt-5 bg-yellow font-bold text-sm px-7 py-2 rounded-md cursor-pointer active:opacity-80">Save</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;

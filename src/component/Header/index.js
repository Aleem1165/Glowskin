import React, { useState } from "react";
import images from "../../utilities/images";
import { useModal, usePayment, useSignIn } from "../../Screens/Layout";

export default function Header({ deposit, setDeposit }) {
  const { paymentModal, setPaymentModal } = usePayment();
  const { isModalOpen, setIsModalOpen } = useModal();
  const { signin, setSignin } = useSignIn();

  const [hamberg, setHamberg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [headerRight, setHeaderRight] = useState(false);
  const [headerRightSignin, setHeaderRightSignin] = useState(false);

  return (
    <div className="w-full bg-headerBg fixed top-0 flex flex-row items-center justify-between px-3 py-3 opacity-80 z-10">
      <div className="text-white text-2xl font-extrabold flex flex items-center">
        GLOW SKIN
        <div className="w-[2px] h-10 bg-logoLine ml-10"></div>
      </div>
      <div className="hidden md:flex align-center justify-between text-white w-30p lg:w-20p xl:10p text-xs">
        <div className="cursor-pointer">Home</div>
        <div
          className="relative cursor-pointer flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          Games
          <img
            src={isOpen ? images.arrowUpWhite : images.arrowDownWhite}
            className="h-2 w-3 ml-2 mt-0.5"
          />
          {isOpen && (
            <div className="absolute top-full left-5 bg-white shadow-md py-2">
              <a
                // href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                1
              </a>
              <a
                // href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                2
              </a>
              <a
                // href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                3
              </a>
            </div>
          )}
        </div>
        <div className="cursor-pointer">Rewards</div>
      </div>
      <div>
        {signin ? (
          <div className="hidden md:flex items-center justify-between w-full">
            <div>
              <img src={images.race} className="h-7 cursor-pointer" />
            </div>
            <div className="h-7 bg-yellow flex items-center px-1 ml-2 cursor-pointer">
              <img src={images.transfer} className="h-6" />
            </div>
            <div className="h-7 bg-yellow flex items-center px-2 ml-2 cursor-pointer">
              <img src={images.notification} className="h-4" />
            </div>
            <div
              onClick={() => {
                setDeposit(true);
                setPaymentModal(true);
              }}
              className="bg-yellow ml-2 h-7 px-4 flex items-center active:opacity-50 cursor-pointer text-xs font-semibold"
            >
              Deposit
            </div>
            <div
              onClick={() => {
                setDeposit(false);
                setPaymentModal(true);
              }}
              className="bg-btnGray text-white ml-2 h-7 px-4 flex items-center active:opacity-50 cursor-pointer text-xs font-semibold"
            >
              Withdraw
            </div>
            <div className="bg-gemsBtn h-7 ml-2 flex flex-row items-center px-3">
              <img src={images.coin} className="h-5" />
              <div className="ml-2 text-sm text-white">0.00</div>
              <div className="ml-2 bg-yellow text-sm font-semibold cursor-pointer px-2 active:opacity-70">
                Gems
              </div>
            </div>
            <div className="relative">
              <div
                className="h-7 bg-white flex items-center px-2 ml-2 cursor-pointer"
                onMouseEnter={() => setHeaderRightSignin(true)}
                onMouseLeave={() => setHeaderRightSignin(false)}
              >
                <img src={images.user} className="h-4" />
              </div>
              {headerRightSignin && (
                <div
                  className="absolute right-0 bg-white shadow-md w-40"
                  onMouseEnter={() => setHeaderRightSignin(true)}
                  onMouseLeave={() => setHeaderRightSignin(false)}
                >
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                    1
                  </a>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                    2
                  </a>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                    3
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center justify-between w-full">
            <div>
              <img src={images.race} className="h-7 cursor-pointer" />
            </div>
            <div
              className="bg-yellow ml-3 h-7 px-4 flex items-center active:opacity-50 cursor-pointer text-xs"
              onClick={() => setIsModalOpen(true)}
            >
              Sign In
            </div>
            <div className="relative">
              <div
                className="h-7 bg-white flex items-center px-2 ml-3 cursor-pointer"
                onMouseEnter={() => setHeaderRight(true)}
                onMouseLeave={() => setHeaderRight(false)}
              >
                <img
                  src={headerRight ? images.arrowUp : images.arrowDown}
                  className="h-2"
                />
              </div>
              {headerRight && (
                <div
                  className="absolute right-0 bg-white shadow-md w-40"
                  onMouseEnter={() => setHeaderRight(true)}
                  onMouseLeave={() => setHeaderRight(false)}
                >
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                    1
                  </a>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                    2
                  </a>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                    3
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        <button
          onClick={() => setHamberg(!hamberg)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {hamberg && (
        <div className="lg:hidden bg-headerBg py-4 px-7 transition-all duration-300 absolute top-0 left-0 w-full flex justify-between items-start">
          <div>
            <a className="block px-4 py-2 text-white hover:bg-gray-200">Home</a>
            <a className="block px-4 py-2 text-white hover:bg-gray-200">
              About
            </a>
            <a className="block px-4 py-2 text-white hover:bg-gray-200">
              Services
            </a>
            <a className="block px-4 py-2 text-white hover:bg-gray-200">
              Contact
            </a>
          </div>
          <button
            onClick={() => setHamberg(!hamberg)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

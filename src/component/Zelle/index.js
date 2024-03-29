import React, { useState } from "react";
import images from "../../utilities/images";
import "../../App.css";

export default function Zelle() {
  const [pay, setPay] = useState(5);
  const [received, setReceived] = useState(7.3);
  const [check, setCheck] = useState(false);

  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value); // Ensure value is parsed as a float
    setPay(value);
    const receivedValue = value * 1.46;
    const formattedReceivedValue =
      receivedValue % 1 === 0
        ? receivedValue.toFixed(0)
        : receivedValue.toFixed(2);
    setReceived(formattedReceivedValue);
  };

  return (
    <div className="-70p md:w-50p">
      <div className="w-full bg-paymentModalBg p-4">
        <div className="flex flex-row items-center ">
          <img src={images.zelle} className="w-12 h-8 bg-transparent" />
          <div className="text-xs ml-2 font-semibold">
            <div className="text-white text-sm">Zelle</div>
            <div className="text-lineBlue">1 USD = 1.46</div>
          </div>
        </div>
        <div className="w-full flex flex-row  gap-4">
          <div className="w-50p mt-3">
            <div
              className={
                !pay || pay < 5 || pay > 500
                  ? "text-red text-sm mb-1 font-semibold"
                  : "text-white text-sm mb-1 font-semibold"
              }
            >
              Pay
            </div>
            <div
              className={
                !pay || pay < 5 || pay > 500
                  ? "flex flex-row items-center justify-center bg-inputBG px-1 py-1 rounded-sm border border-red"
                  : "flex flex-row items-center justify-center bg-inputBG px-1 py-1 rounded-sm"
              }
            >
              <img src={images.dollar} className="w-5 h-5" />
              <input
                className="w-full focus:outline-none pl-2 bg-transparent text-white"
                type="number"
                value={pay}
                onChange={handleInputChange}
              />
            </div>
            {(!pay || pay < 5 || pay > 500) && (
              <div className="text-red text-sm mb-1 font-semibold">
                Min: 5.00, Max: 500.00
              </div>
            )}
          </div>
          <div className="w-50p mt-3 ">
            <div className="text-white text-sm mb-1 font-semibold">Receive</div>
            <div className="flex flex-row items-center justify-center bg-inputBG px-1 py-1 rounded-sm">
              <img src={images.coin} className="w-5 h-5" />
              <input
                className="w-full focus:outline-none pl-2 bg-transparent text-white"
                type="number"
                value={received}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4 mt-5">
          <div className="w-50p ">
            <input
              type="text"
              placeholder="First Name"
              className="w-80p focus:outline-none bg-transparent text-white border-b border-lineBlue border-opacity-50 pb-1 text-sm placeholder-white placeholder-opacity-50"
            />
          </div>
          <div className="w-50p">
            <input
              type="text"
              placeholder="Last Name"
              className="w-80p focus:outline-none bg-transparent text-white border-b border-lineBlue border-opacity-50 pb-1 text-sm placeholder-white placeholder-opacity-50"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <input
            type="text"
            placeholder="Email"
            className="w-full focus:outline-none bg-transparent text-white border-b border-lineBlue border-opacity-50 pb-1 text-sm placeholder-white placeholder-opacity-50"
          />
        </div>
        <div className="w-full flex flex-row gap-4 mt-5">
          <div className="w-50p ">
            <input
              type="text"
              placeholder="Country"
              className="w-80p focus:outline-none bg-transparent text-white border-b border-lineBlue border-opacity-50 pb-1 text-sm placeholder-white placeholder-opacity-50"
            />
          </div>
          <div className="w-50p">
            <input
              type="text"
              placeholder="Phone"
              className="w-80p focus:outline-none bg-transparent text-white border-b border-lineBlue border-opacity-50 pb-1 text-sm placeholder-white placeholder-opacity-50"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <img
            src={check ? images.check : images.unCheck}
            onClick={() => setCheck(!check)}
            className="w-4 cursor-pointer"
          />
          <div className="text-white text-xs mb-1 font-semibold ml-2 mt-1">
            Send SMS and E-mail Instructions
          </div>
        </div>
        <div className="w-80p bg-yellow mx-auto mt-4 flex items-center justify-center text-sm text-black font-bold py-2 rounded-md cursor-pointer active:opacity-70">
          Pay With Zelle
        </div>
      </div>
      <div className="text-xs text-white mt-3">
        <p className="border-l-2 border-yellow bg-paymentModalBg p-2">
          You will be emailed and texted instructions on how to complete your
          Zelle deposit. It is important to include the memo your receive in the
          text and email. It may take up to 5-10 minutes for your deposit to
          credit. A 8% fee is applied before the bonus.
        </p>
        <p className="mt-2 border-l-2 border-yellow bg-paymentModalBg p-2">
          Following limits apply to Zelle deposits:
          <div className="flex flex-row items-center ml-2">
            <div className="w-[6px] h-[6px] bg-white rounded-full mt-[1px] mr-1"></div>
            <div>Daily: $1,000 or 3 transactions</div>
          </div>
          <div className="flex flex-row items-center ml-2">
            <div className="w-[6px] h-[6px] bg-white rounded-full mt-[1px] mr-1"></div>
            <div>Weekly: $3,500 or 21 transactions</div>
          </div>
          <div className="flex flex-row items-center ml-2">
            <div className="w-[6px] h-[6px] bg-white rounded-full mt-[1px] mr-1"></div>
            <div>Monthly: $9,500 or 60 transactions</div>
          </div>
        </p>
      </div>
    </div>
  );
}

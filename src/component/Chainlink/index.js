import React, { useEffect, useState } from "react";
import images from "../../utilities/images";
import "../../App.css";
import { BarLoader } from "react-spinners";

export default function Chainlink() {
  const [copied, setCopied] = useState(false);
  const [address, setAddress] = useState("");
  const [loader, setLoader] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setAddress("bc1q42xyapd3fpt9nnghz9utk5uprydv87pqwhz03u");
    }, 1000);
  }, []);

  return (
    <div className="w-80p lg:w-65p xl:w-60p">
      <div className="w-full bg-paymentModalBg p-4">
        <div className="flex flex-row items-center ">
          <img src={images.chainlink} className="w-10 h-10 bg-transparent" />
          <div className="text-xs ml-2 font-semibold">
            <div className="text-white text-sm">Chainlink</div>
            <div className="text-lineBlue">1 USD = 1.46</div>
          </div>
        </div>
        <div className="w-full mt-5 flex flex-col md:flex-row items-center ">
          <div className="h-[165px] w-[220px] p-4 bg-white flex flex-row items-center justify-center">
            {loader ? (
              <BarLoader color={"#0CAAF3"} />
            ) : (
              <img src={images.chainlink} className="h-full w-full" />
            )}
          </div>
          <div className="w-full ml-4 ">
            <div className="text-sm text-white">Chainlink Address</div>
            <div className="text-white text-xs rounded-md p-2 mt-1 bg-inputBG flex flex-row items-center justify-between">
              <span>{address}</span>
              <img
                src={copied ? images.done : images.copy}
                className="w-3 cursor-pointer mr-1"
                onClick={() => copyToClipboard(address)}
              />
            </div>
            <div className="text-sm text-white opacity-70 mt-2">
              Send any amount to this address. You will receive your coins and a
              <span className="text-yellow font-semibold "> +46% </span> bonus
              after the transaction is confirmed.
            </div>

            <div className="opacity-90 border-l-2 border-yellow p-2 text-sm text-yellow bg-inputBG mt-2 font-semibold">
              Only deposit over the Chainlink Network!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

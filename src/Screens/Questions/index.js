import React, { useState } from "react";
import images from "../../utilities/images";
import Footer from "../../component/Footer";

export default function Questions() {
  const [signin, setSignin] = useState(false);
  const [progress, setProgress] = useState(40);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div
        className="p-4 bg-cover bg-center "
        style={
          {
            // backgroundImage: `url(${images.dashboardBackground})`,
          }
        }
      >
        <div className="flex flex-col items-start justify-center">
          <div className="text-white font-semibold text-xl border-b-4 border-lineBlue pb-1 pr-3">
            <span> Frequently Asked Questions</span>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold ">
              I opened a case, where is my skin?
            </div>
            <p className="text-white text-opacity-50  pb-2">
              Glowskins uses a balance system instead of an onsite inventory,
              the skin you won has been converted into balance that can be used
              to withdraw items from our onsite store.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold pt-2 pb-2">
              I just deposited with steam and haven’t gotten my onsite balance?
            </div>
            <p className="text-white text-opacity-50 pb-2">
              Deposits can take up to a few minutes to register-based off how
              long steam takes, if you are on trade hold or do not have Mobile
              Authenticator setup on your smartphone for over 15 days your
              deposits will not come through and must be canceled until you have
              Mobile Authenticator setup on your smartphone for over 15 days.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold pt-2 pb-2">
              I just deposited with a Crypto Currency and haven’t gotten my
              onsite balance?
            </div>
            <p className="text-white text-opacity-50 pb-2">
              We use fireblocks for cryptocurrency deposits which require
              multiple blockchain confirmations before a deposit can be
              credited, depending on the currency this can take from a few
              minutes to a few hours. If you exited from payment page before
              funds confirmed at there and didn't get any balance, you should
              contact with us via providing proofs.
            </p>
          </div>

          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-semibold  pt-2 pb-2">
              The screen froze/disconnected mid-spin.
            </div>
            <p className="text-white text-opacity-50 pb-2">
              Our provably fair system determines what item will be pulled from
              a case as the animation starts, even if you leave the site or lose
              connection you will still be credited.
            </p>
          </div>

          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-semibold pt-2 pb-2">
              I cannot redeem my free cases.
            </div>
            <p className="text-white text-opacity-50 b-2">
              You must join our Discord and connect your account. If you want to
              open level 5 case for free, you must complete KYC.
            </p>
          </div>

          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full mb-5">
            <div className="text-white text-xl font-semibold pt-2 pb-2">
              All games on Glowskins have a built in house edge similar to any
              platform. Below you can find the house edge for each game.
            </div>
            <p
              className="text-white text-opacity-50 >
            Cases: 10% House Edge built into item pricing.
          </p>
          <p className="
              text-white
              text-opacity-50
            >
              Battles: 10% House Edge due to cases being used.
            </p>
            <p
              className="text-white text-opacity-50 >
            Roulette: 6.67% House Edge.
          </p>
          <p className="
              text-white
              text-opacity-50
            >
              Upgrader: 7.3% House Edge.
            </p>
            <p
              className="text-white text-opacity-50 >
            Crash: 8.65% House Edge.
          </p>
          <p className="
              text-white
              text-opacity-50
            >
              Mines: 7% House Edge.
            </p>
            <p className="text-white text-opacity-50 b-3">
              Jackpot: 7.5% House Edge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

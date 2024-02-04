import React from "react";
import images from "../../utilities/images";

export default function Footer() {
  return (
    <div
      className="bg-cover bg-center p-10 flex flex-row items-start justify-between  border-t-2 border-lineBlue"
      style={{
        backgroundImage: `url(${images.footerBG})`,
      }}
    >
      <div className="w-20p">
        <div className="text-yellow font-bold text-2xl">
          Glow
          <span className="text-white"> Skin</span>
        </div>
        <div className="text-white text-opacity-50 text-sm mt-5">
          The Premier DUMMY case and case battle site.
        </div>
        <div className="text-white text-opacity-50 text-sm mt-5 mb-8">
          DUMMY is owned and operated by Glowskins Entertainment Ltd located at
          Thermistokli Dervi, 48, 3rd Floor, Office 306, 1065, Nicosia, Cyprus
        </div>
        <div className="flex flex-row items-center">
          <img src={images.message} className="w-3 mr-3" />
          <div className="text-white text-opacity-50 text-sm">
            support@dummy.com
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img src={images.call} className="w-3 mr-3" />
          <div className="text-white text-opacity-50 text-sm mt-1">
            +353 21 212 8322
          </div>
        </div>
        <div className="text-white text-opacity-50 text-sm mt-5">
          All rights reserved 2021-2023
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="text-yellow  text-md font-semibold mt-2 mb-5">
          INFORMATION
        </div>
        <div
          //   to={"/fairness"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50  "
        >
          Fairness
        </div>
        <div
          //   to={"/questions"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50  mt-0.5"
        >
          Questions
        </div>
        <div
          //   to={"/tos"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50  mt-0.5"
        >
          Terms of Service
        </div>
        <div
          //   to={"/privacy"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 "
        >
          Privacy Policy
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 ">
          Legal Opinion
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 ">
          AML Policy
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  mt-0.5">
          Meet the Team
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 ">
          About Us
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 ">
          Contact Us
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 ">
          Disclaimer
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 ">
          Code of Ethics
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 ">
          Editorial Policy
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="text-yellow text-md font-semibold mt-2 mb-5">GAMES</div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Battles
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Upgrader
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Jackpot
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Roulette
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Mines
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Crash
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Cases
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="text-yellow text-md font-semibold mt-2 mb-5">
          ADDITIONAL
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Case Creator
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          10K Daily Race
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Affiliates
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Rewards
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Game Responsibly
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Free to Play
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Blog
        </div>
      </div>
      <div className="flex flex-col items-start w-15p">
        <div className="text-yellow text-md font-semibold mt-2 mb-5">
          ARTICLES
        </div>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          <span className="block">M9 Bayonet:</span>A Detailed Analysis of One
          of CS:GO's Most Iconic Weapons
        </div>
        <div className="text-white text-sm  mt-4  cursor-pointer hover:text-opacity-50  ">
          <span className="block">Karambit:</span>Unveiling the Secrets Behind
          the Most Sought-After Knife in CS:GO
        </div>
        <div className="text-white text-sm  mt-4  cursor-pointer hover:text-opacity-50  ">
          <span className="block">Huntsman Knife: </span>Learn Elite Details and
          Performance Insights for Blade Mastery
        </div>
      </div>
    </div>
  );
}

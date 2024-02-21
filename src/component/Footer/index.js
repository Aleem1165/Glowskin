import React from "react";
import images from "../../utilities/images";
import { Link } from "react-router-dom";
import ScrollToTopLink from "../ScrollToTopLink";

export default function Footer() {
  return (
    <div
      className="bg-cover w-full bg-center p-10 flex flex-row items-start justify-between  border-t-2 border-lineBlue"
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
        <ScrollToTopLink
          to={"/fairness"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50  "
        >
          Fairness
        </ScrollToTopLink>
        <ScrollToTopLink
          to={"/questions"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50  mt-0.5"
        >
          Questions
        </ScrollToTopLink>
        <ScrollToTopLink
          to={"/tos"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50  mt-0.5"
        >
          Terms of Service
        </ScrollToTopLink>
        <ScrollToTopLink
          to={"/privacy"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 "
        >
          Privacy Policy
        </ScrollToTopLink>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 ">
          Legal Opinion
        </div>

        <ScrollToTopLink
          to={"/aml"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 "
        >
          AML Policy
        </ScrollToTopLink>
        <div className="text-white text-sm  cursor-pointer hover:text-opacity-50  mt-0.5">
          Meet the Team
        </div>
        <ScrollToTopLink
          to={"/about"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 "
        >
          About Us
        </ScrollToTopLink>
        <ScrollToTopLink
          to={"/contact"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 "
        >
          Contact Us
        </ScrollToTopLink>
        <ScrollToTopLink
          to={"/disclaimer"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 "
        >
          Disclaimer
        </ScrollToTopLink>
        <ScrollToTopLink
          to={"/code-of-ethics"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 "
        >
          Code of Ethics
        </ScrollToTopLink>
        <ScrollToTopLink
          to={"/editorial-policy"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50 mt-0.5 "
        >
          Editorial Policy
        </ScrollToTopLink>
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
        <ScrollToTopLink
          to={"/mines"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50  "
        >
          Mines
        </ScrollToTopLink>
        <ScrollToTopLink
        to={'/plinko'}
        className="text-white text-sm  cursor-pointer hover:text-opacity-50  ">
          Plinko
        </ScrollToTopLink>
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
        <ScrollToTopLink
          to={"/blog"}
          className="text-white text-sm  cursor-pointer hover:text-opacity-50  "
        >
          Blog
        </ScrollToTopLink>
      </div>
      <div className="flex flex-col items-start w-15p">
        <div className="text-yellow text-md font-semibold mt-2 mb-5">
          ARTICLES
        </div>
        <ScrollToTopLink
          className="text-white text-sm  cursor-pointer hover:text-opacity-50  "
          to={"/M9Bayonet"}
        >
          <span className="block">M9 Bayonet:</span>A Detailed Analysis of One
          of CS:GO's Most Iconic Weapons
        </ScrollToTopLink>
        <ScrollToTopLink
          to={"/Karambit"}
          className="text-white text-sm  mt-4  cursor-pointer hover:text-opacity-50  "
        >
          <span className="block">Karambit:</span>Unveiling the Secrets Behind
          the Most Sought-After Knife in CS:GO
        </ScrollToTopLink>
        <ScrollToTopLink
          to={"/Huntsman"}
          className="text-white text-sm  mt-4  cursor-pointer hover:text-opacity-50  "
        >
          <span className="block">Huntsman Knife: </span>Learn Elite Details and
          Performance Insights for Blade Mastery
        </ScrollToTopLink>
      </div>
    </div>
  );
}

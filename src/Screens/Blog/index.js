import React, { useState } from "react";
import images from "../../utilities/images";

export default function Blog() {
  const [signin, setSignin] = useState(false);
  const [progress, setProgress] = useState(40);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data] = useState([
    {
      title:
        "M9 Bayonet: A Detailed Analysis of One of CS:GO's Most Iconic Weapons",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Karambit: Unveiling the Secrets Behind the Most Sought-After Knife in CS:GO",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Huntsman Knife: Learn Elite Details and Performance Insights for Blade Mastery",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Gut Knife: Unveiling the Secrets of the Popular Melee Weapon",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Flip Knife: The Ultimate Guide to Mastering This Exclusive Blade",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Falchion Knife: Strategies, Tips, and In-Game Performance Analysis",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Butterfly Knife: The Ultimate Guide to Selecting, Using, and Mastering this Blade",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Bowie Knife: The Ultimate Guide to Mastering this Blade",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Bayonet Mastery: The Ultimate Guide to Mastering This Melee Knife",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "The Complete Guide to CS:GO Knives",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "XM1014: Complete Weapon Stats, Tips, and Loadouts",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Sawed-Off: Guide: Mastering the Shotgun's Power & Range",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Nova: Guide: Mastering This Heavy’s Strengths and Weaknesses in CS:GO and In-depth Analysis of the Iconic Shotgun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Negev Guide: Mastering the Powerhouse Light Machine Gun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "MAG-7: In-depth Weapon Review and User Guide for A Powerful, Precise SMG",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "M249 Analysis: From Spray Patterns to Competitive Usage of the CS:GO M249",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "The Complete Guide to CS:GO Heavy Weapons (Shotguns and Machine Guns) with Stats",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "AUG Rifle: Ultimate Analysis of Firepower & Control of the CS:GO AUG",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "AWP Rifle: A Comprehensive Guide to Mastering the Sharpshooter",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "UMP-45: Unveiling the Secrets of this Versatile SMG Submachine Gun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "PP-Bizon: Expert Analysis on Maximizing the Potential of the PP-Bizon.",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "GO P90 Guide: Mastering the Run-and-Gun SMG for Competitive Play",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "MP9 Gameplay: Strategies and Tips for Dominance with a Semi-Automatic",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "MP7 Stats and Analysis: Elevate Your In-game Performance",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "MP5-SD Stats: Understanding the Silent Submachine Gun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "MCA-10: In-depth Weapon Review and User Guide for A Powerful, Precise SMG",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "The Complete Guide to CS:GO Sub Machine Guns (SMGs) with Stats",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "The Complete Guide to CS:GO Rifles with Stats for Every Long Gun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "SSG 08 Rifle: Sniper Scout Deep Dive – Stats to Master the SSG 08",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "SG 553 Rifle: The Complete Guide, Historical Evolution and Gameplay Impact",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "SCAR-20: Comprehensive Guide & Weapon Analysis for the SCAR-20: Tips, Tactics, and Usage Statistics",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "M4A4 Guide: Stats, Skins, and Tips for Dominating the Game, Understanding Spray Patterns and Gameplay",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "M4A1-S Rifle: The Comprehensive Weapon for the CS:GO M4A1-S Long Gun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Galil AR Rifle: The Comprehensive Weapon Guide and Tactics with In-depth Analysis and Best Practices",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "G3SG1 Rifle: Sniper Tactics, Damage Stats, and Economy Guide for the G3SG1",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "FAMAS Rifle: Tactics: Optimal Situations and Playstyles for the FAMAS",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "AK-47 Rifle: The Complete Guide, Tips & Trick for the CS:GO AK-47 Long Gun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "P250 Guide: Mastering the Semi-Automatic Power of the P250 Pistol",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Five-SeveN Guide: An In-depth Analysis on Mastering the Pistol Rounds",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Dual Barettas: Usage, Strategies and How to Master this Pair of Handguns",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Desert Eagle: A Comprehensive Guide to Mastering the Deagle Handgun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CZ75-Auto: The Ultimate Weapon Breakdown for the CZ75-Auto Sidearm",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "USP-S Guide: Detailed Analysis and Performance Stats of the USP-S Handgun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "P2000 Guide: Pro Tips and Tricks for Dominating Your Opponents With the P2000 Pistol",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "TEC-9 Guide: Comprehensive Weapon Guide and Tactics of the TEC-9 Handgun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "R8 Revolver Guide: Detailed Statistics, Skins, and Performance Analysis of the R8 Revolver Handgun",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Locked & Loaded: The Complete Guide to CS:GO Weapons",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Glock-18 Pistol Guide with Handgun Stats for the Glock-18 Sidearm",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "The Complete Guide to CS:GO Pistols with Handgun Stats for Every Sidearm",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Why Gamers Love CS:GO Skins | Understanding Skins & What Makes Them Special",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Choosing the Best CS:GO Cases | Get Your Preferred Skins and More",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Making a Statement with CS:GO MAG-7 Skins | CS:GO MAG-7 Skin Guide",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Discover Top CS:GO SSG 08 Skins |  SSG 08 Skins: Boost Your CS:GO Collection",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "CS:GO's Desert Eagle Skins: Where Aesthetics Meet Achievement",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Unleash Your Unique Style and Dominate in CS:GO with Top SG 553 Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "CS:GO AUG Skins: Boost Your Game and Flaunt Your Style",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Transform Your Arsenal: The Most Coveted UMP-45 Skins in CS:GO",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Unleash Style and Power: The Ultimate Guide to CS:GO CZ75-Auto Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Skin Showcase: Unveiling the Best Tec-9 Skins for 2023 and Where to Find Them",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "The Power of Personalization: Best-Selling and Most Popular P250 Skins in CS:GO",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Top CS:GO M4A1-S Skins of 2023 | Unlock Your Arsenal",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Best MP9 Skins in CS:GO | Complete MP9 Skin Guide & Where to Find Them",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "A Guide to the Top CS:GO AWP Skins of 2023 | Snipe in Style",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "Unleash Your Style with Top CS:GO Glock-18 Skins | CS:GO Glock-18 Skin Guide",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Mystery of CS:GO Case Prices: Why Are CS:GO Cases So Expensive?",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "The CS:GO Weapon Case Paved the Way for Skins, Cases, and a Thriving CS:GO Economy",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "eSports 2013 Case is the Rarest Case in CS:GO and Offers Exclusive Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Weapon Case 2 Brings Rare and Valuable Arms Deal Collection 2 Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Huntsman Case Introduced Huntsman Knives & A CS:GO Contraband Skin",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Winter Offensive Case Begins the Era of Community-Designed Weapon Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "Operation Bravo Case is One of the Most Valuable Cases in CS:GO",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO eSports 2013 Winter Case Grants the CS:GO Community New Exclusive Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Weapon Case Features the CZ75-Auto 3 and is the First Pistol-Only Case",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO eSports 2014 Summer Case Offers Exclusive Weapon and Knife Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Operation Phoenix Case Gives Players the Chance for Rare and Valuable Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Chroma Case Presents Original Knives in New, Exciting Chroma Finishes",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Operation Vanguard Case Has Valuable Weapon and Knife Skins for Collectors",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Operation Breakout Case Brings a New Knife to the Counter-Strike Community",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "CS:GO Shadow Case | First CS:GO Case to Feature Shadow Daggers",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Chroma 2 Case is a Second Opportunity to Claim an Original Chroma Knife",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Falchion Case | First CS:GO Case Featuring the Falchion Knife",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Operation Wildfire Case Presents the Bowie Knife to CS:GO Gamers",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Revolver Case Features Elite Skins During a Controversial Update",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Gamma Case Presents the Gamma Knife Collection & Changing Glock-18 Skin",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Gamma 2 Case | Allowing Artists to Live On in the Online Gaming Arena",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Chroma 3 Case is a Third Opportunity to Score Original Chroma Knives",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Glove Case is the First Look at New Glove Skins with More Great Weapon Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO CS20 Case Takes Gamers Around the World on a Trip to the Past",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "CS:GO Clutch Case | Offering 24 New Glove Finishes in 2018",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Operation Hydra Case is a Rare Case that Offers Big Value and Great Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Spectrum Case | Introducing a New Set of Chroma Knives and Skins",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Spectrum 2 Case | Add Additional Chroma Knives and Other Skins to Your Collection",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Horizon Case and the Panorama Update Bring New Skins & Knives",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Danger Zone Case | A Second Chance for the Original Horizon Knives",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Prisma Case: Brings New Versions of Horizon Knives with Chroma Finishes",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Operation Broken Fang Case Holds Steady Despite Being Discontinued",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title: "CS:GO Snakebite Case Celebrates the End of Operation Broken Fang",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Shattered Web Case | Fresh Look for Operation Shattered Web",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Prisma 2 Case: New Skins after Operation Shattered Web Ends",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
    {
      title:
        "CS:GO Fracture Case: A Second Chance for the Shattered Web Knife Collection",
      date: "9/22/2023",
      mainImg: images.blogBg,
      subImg: images.dashboardGame11,
    },
  ]);
  return (
    <div className="mx-auto">
        <div
          className="p-4 bg-cover bg-center"
          style={{
            // backgroundImage: `url(${images.dashboardBackground})`,
          }}
        >
          <div className="mx-auto  w-full mt-5">
            <div className="flex justify-center">
              <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-5p">
                {data.map((card) => (
                  <div
                    key={card.id}
                    className="rounded-md bg-cover bg-center flex flex-col  p-2 cursor-pointer hover:pl-3 hover:pr-3 relative"
                    style={{
                      backgroundImage: `url(${images.homeMainImgBG})`,
                    }}
                  >
                    <img src={card.mainImg} className="rounded-md" />
                    <div className="flex flex-row  mt-2">
                      <div className="text-white font-semibold text-lg ml-2">
                        {card.title}
                      </div>
                    </div>
                    <div className="text-white text-opacity-50 pb-2 ml-3 font-semibold">
                      {card.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
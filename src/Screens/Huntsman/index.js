import React, { useState } from "react";
import images from "../../utilities/images";

export default function Huntsman() {
  const [signin, setSignin] = useState(false);
  const [progress, setProgress] = useState(40);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-auto">
      <div
        className="p-4 bg-cover bg-center"
        style={
          {
            // backgroundImage: `url(${images.dashboardBackground})`,
          }
        }
      >
        <div className="flex flex-col items-start justify-center">
          <div className="text-white font-semibold text-5xl border-b-4 border-lineBlue pb-1 pr-3 mt-1">
            Huntsman Knife: Learn Elite Details and Performance Insights for
            Blade Mastery
          </div>
          {/* <p className="text-white text-opacity-50 w-full">9/22/2023</p> */}
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-2xl font-bold ">
              Hunstman Knife CS:GO Knife – Rugged, Raw Power in a Blade
            </div>
            <p className="text-white text-opacity-50 w-full">
              In CS:GO, the Huntsman Knife has raw power. It is also a beacon of
              meticulous craftsmanship. Its design is a blend of ruggedness and
              sleek aesthetics, drawing inspirations from real-world tactical
              knives. The serrated spine and sleek blade of the knife are not
              only stunning but also embody a tool of devastation in
              close-quarter combats. This knife stands as a reliable ally,
              promising not only efficiency but also an enhanced gaming
              experience embellished with a touch of personalized aesthetics
              through its various skins.
            </p>
            <p className="text-white text-opacity-50 w-full">
              Its utility in the game as a melee weapon, effective in
              close-quarters scenarios, brings a blend of strategy and thrill to
              the gameplay. Players find themselves relying on the Huntsman
              Knife in crucial moments, where ammunition is scarce, and stealth
              is the key. Its significant damage output and quick attack speed
              have made it a favorite, turning many battles in favor of the
              wielder.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-bold ">
              Huntsman Basic Information
            </div>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Team:</b> Both (Terrorists and Counter-Terrorists)
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Usage:</b>Primarily used in close-quarters combat, suitable
              for stealth kills.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Range:</b> Short (it is a melee weapon)
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Fire Rate:</b> Not applicable as it is a melee weapon, but it
              has a relatively fast attack speed.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Fire Modes:</b> Single slash (left-click) for a quick attack
              and a stabbing motion (right-click) for a more powerful but slower
              attack.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Kill Award:</b> Standard kill reward as per game settings,
              often different in various game modes.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Movement Speed:</b> Generally allows for high mobility,
              though exact statistics might not be available.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Kill Reward:</b> This would vary based on the game mode being
              played.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Damage:</b> High damage, especially when utilizing the more
              powerful stabbing motion.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Skins:</b> Available in a variety of skins which can be
              acquired through different means such as cases or market
              purchases.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Market Value:</b> High, especially for rare skins, and
              fluctuates based on several factors including rarity and demand.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Community Reception:</b> Generally positive, with players
              appreciating its design and in-game utility.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-bold ">
              Huntsman Knife Key Features & Gameplay Elements
            </div>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Versatility:</b> The Huntsman Knife is a melee weapon highly
              versatile in close-quarters combat. Its design allows for swift
              and stealthy maneuvers, making it a suitable choice for various
              tactical approaches. It is often used for surprise attacks and
              flanking strategies. Its different attack modes (quick slash and
              powerful stab) offer players the flexibility to adapt to changing
              in-game scenarios.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Damage:</b> This weapon is known for its high damage output,
              especially when utilizing the stab attack mode. This mode can
              deliver devastating blows to opponents. Its ability to inflict
              significant damage makes it a formidable tool in tight situations
              where firearms might not be the most practical choice.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2">
              • <b>Accuracy:</b> The Huntsman Knife boasts high accuracy in
              terms of landing blows on the target. Players can depend on it to
              deliver precise strikes, where the blade is aimed, facilitating
              one-hit kills in many situations. Its pinpoint accuracy in close
              combat scenarios makes it a preferred choice for players looking
              to maintain stealth and efficiency during engagements.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-bold ">
              Huntsman Knife Damage Statistics
            </div>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Base Damage:</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Left-Click Attack:</b> 40 (estimated)
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Right-Click Attack:</b> 65 (estimated)
            </p>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Headshot</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Left-Click Attack:</b> 121 (estimated, as melee weapons
              usually have a 3x headshot multiplier)
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Right-Click Attack:</b> 195 (estimated)
            </p>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Chest and Arm Shots:</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Left-Click Attack:</b> 40 (estimated)
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Right-Click Attack:</b> 65 (estimated)
            </p>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Stomach Shots:</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Left-Click Attack:</b> 50 (estimated, typically has a higher
              damage than chest/arm shots)
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Right-Click Attack:</b> 81 (estimated)
            </p>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Leg Shots:</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Left-Click Attack:</b> 30 (estimated, usually has 75% damage
              of the base)
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Right-Click Attack:</b> 49 (estimated)
            </p>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Armor Penetration:</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • The Huntsman Knife is known to have high armor penetration,
              effectively bypassing armor to deal significant damage.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-bold ">
              Huntsman Knife Usage
            </div>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Role</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Stealth Assassin:</b> The Huntsman Knife is often employed by
              players adopting a stealth role, allowing them to get close to
              their enemies silently and eliminate them with precision.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Backup Weapon:</b> Players often use it as a backup weapon,
              pulling it out in situations where their primary firearm is not
              the most suitable choice, such as when ammunition is depleted.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Economy</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Cost-Effective:</b> In terms of in-game economy, the Huntsman
              Knife is a cost-effective weapon as it doesn't require any
              ammunition and is part of the default loadout.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Market Trade and Investment:</b> Outside the gameplay, it
              holds significant market value, especially the rare skins, and can
              be a substantial investment and trade item in the community
              marketplace.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Tactic</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Close-Quarters Engagement:</b> It's best employed in
              close-quarters engagements where players can utilize its high
              damage output to their advantage.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Flanking and Surprise Attacks:</b> It is also a choice tool
              for tactics involving flanking and surprise attacks, enabling
              players to maintain an element of surprise and eliminate enemies
              swiftly.
            </p>
            <p className="text-white text-opacity-50 w-full ml-2 mt-1">
              • <b>Shooting Techniques</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Quick Slash:</b> The quick slash (left-click) is a fast
              attack mode that allows for swift strikes, suitable for situations
              where speed is of the essence.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Powerful Stab:</b> The powerful stab (right-click) is a
              slower but more potent attack, capable of dealing substantial
              damage, ideal for stealth kills where one powerful strike can
              neutralize the enemy effectively.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Hit-and-Run:</b> This technique involves striking the enemy
              and quickly retreating to avoid retaliation, a strategy that
              utilizes the Huntsman Knife's high mobility to its advantage.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-bold ">
              Huntsman Knife Pros and Cons
            </div>
            <p className="text-white text-xl w-full mt-2 mb-1">
              <b>Pros</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>High Damage Output:</b> The Huntsman Knife is recognized for
              its significant damage, especially when deploying the stabbing
              motion. This high damage potential ensures that players can
              incapacitate or eliminate opponents in close-quarters situations
              swiftly, especially when surprise and stealth are involved. The
              ability to deliver lethal blows with minimal engagement time makes
              it a favored choice for players in tight situations.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Speed and Mobility:</b> When equipped, the Huntsman Knife
              allows players to move at high speeds. This increased mobility
              ensures that players can traverse the map more swiftly, dodge
              enemy fire, or execute rapid flanking maneuvers. In intense
              moments where speed is crucial, the Huntsman Knife can be the
              difference between life and death.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Cost-Effectiveness:</b> In the in-game economy, the Huntsman
              Knife is a staple that doesn't necessitate any monetary investment
              for ammunition or purchase. It's always available as a default
              backup weapon, ensuring that players always have a reliable tool
              in situations where firearms might not be optimal.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Versatility in Gameplay:</b> Whether it's executing stealth
              attacks, finishing off wounded enemies, or serving as a
              last-resort weapon in ammo-depleted scenarios, the Huntsman Knife
              offers a high degree of versatility. Its adaptability ensures that
              it remains a practical choice across a myriad of game situations.
            </p>
            <p className="text-white text-xl w-full mt-2 mb-1">
              <b>Cons</b>
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Limited Range: </b> Being a melee weapon, the Huntsman Knife
              is constrained by its short range. Players need to get very close
              to their opponents to deploy it effectively, which can be a risk,
              especially when going up against adversaries with ranged weapons.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Requires Tactical Precision: </b> Effective usage of the
              Huntsman Knife requires a certain level of tactical precision and
              game sense. Misjudging distances, timings, or player movements can
              leave the user vulnerable, given the close engagement range the
              knife demands.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Predictability in Certain Scenarios: </b> In certain
              situations, especially when a player's primary weapon is out of
              ammo, opponents might anticipate the switch to the knife. This
              predictability can make it easier for adversaries to counter the
              player's movements and tactics.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Lack of Ranged Defense: </b> When wielding the Huntsman
              Knife, players lack a direct means of defending against ranged
              attacks. This limitation means that users have to rely on speed,
              cover, and evasion tactics when approaching enemies or when caught
              in the open.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-bold ">
              Huntsman Knife Additional Features
            </div>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Collectible Value:</b> The Huntsman Knife has an inherent
              collectible value, especially for rare and special edition skins.
              These items can sometimes be sold or traded at high prices in the
              community marketplace, making them sought-after items for
              collectors and enthusiasts alike.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Customization: </b> Players have the opportunity to further
              personalize their Huntsman Knife with custom stickers and
              nametags, adding a personal touch to their weapon. This feature
              amplifies the sense of ownership and connection between the player
              and their chosen tool of battle.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Animation and Aesthetics:</b> The Huntsman Knife features
              unique draw and kill animations, adding a visual flair to its
              usage. The detailed design and animation contribute to an
              immersive gameplay experience, especially for players who
              appreciate the aesthetics of their weapons.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Community Status Symbol:</b> Possession of a Huntsman Knife,
              particularly those with rare skins, often serves as a status
              symbol within the CS:GO community. Owning one can signify
              experience, dedication, or investment in the game, sometimes
              granting the player a certain level of prestige among peers.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Physical Features:</b> The Huntsman Knife is distinguished by
              its physical features, having a distinctive blade shape compared
              to other knives in the game. The tactical blade design not only
              adds a level of realism to the weapon but also contributes to its
              popularity among players who prefer its look and feel.
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • <b>Sound Effects: </b> The Huntsman Knife has specific sound
              effects associated with its use, including a distinctive sound
              during a successful stab. These sound effects add a layer of
              realism and immersion to the gameplay, enhancing the player's
              connection with the weapon.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-bold ">
              Huntsman Knife Application & Usage
            </div>
            <p className="text-white text-opacity-50 w-full">
              The Huntsman Knife, as a quintessential melee weapon in CS:GO,
              should ideally be used in high-stakes, close-quarter combat
              scenarios where stealth and speed are paramount. Its utility
              shines in situations where ammunition is depleted, and a quick
              solution is needed to fend off adversaries. Adept players can use
              this knife as a tool for psychological warfare, demoralizing the
              enemy team with a series of unexpected knife kills.
            </p>
            <p className="text-white text-opacity-50 w-full  mt-2">
              The Huntsman Knife, as a quintessential melee weapon in CS:GO,
              should ideally be used in high-stakes, close-quarter combat
              scenarios where stealth and speed are paramount. Its utility
              shines in situations where ammunition is depleted, and a quick
              solution is needed to fend off adversaries. Adept players can use
              this knife as a tool for psychological warfare, demoralizing the
              enemy team with a series of unexpected knife kills.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full mb-5">
            <div className="text-white text-xl font-bold ">
              Huntsman Knife Skins
            </div>
            <p className="text-white text-opacity-50 w-full">
              The Huntsman Knife has a variety of available skins. These skins,
              which range from the elegant "Crimson Web" to the fierce
              "Slaughter", are more than just digital accessories. They are
              coveted assets, with some variants holding substantial market
              value, becoming collectibles and a form of investment for avid
              players. The fluctuating market value of these skins forms a
              bustling economy, with players keenly tracking the trends to
              acquire or trade these items at opportune moments.
            </p>
            <p className="text-white text-opacity-50 w-full mt-5 ">
              Glowskins.gg has an inventory of Huntsman Knife skins. {"  "}
              <a className="text-blue" href="#">
                Open our CS:GO cases,
              </a>
              {"  "}
              earn credits, and get the CS:GO skins you’ve been seeking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

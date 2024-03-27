import React, { useState } from "react";
import images from "../../utilities/images";

export default function Karambit() {
  const [signin, setSignin] = useState(false);
  const [progress, setProgress] = useState(40);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" mx-auto">
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
            Karambit: Unveiling the Secrets Behind the Most Sought-After Knife
            in CS:GO
          </div>
          {/* <p className="text-white text-opacity-50 w-full">9/22/2023</p> */}
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-2xl font-bold ">
              Karambit CS:GO Knife – The Knife of Choice
            </div>
            <p className="text-white text-opacity-50 w-full">
              In CS:GO, the Karambit is one of the knives of choice for many
              players. It is a symbol of prestige and skill. This curved blade,
              inspired by the claws of big cats, has a history rooted in the
              Indonesian archipelago. The Karambit's design is not just for
              aesthetic appeal; its curvature allows for close-quarter combat,
              making it a deadly tool in the hands of a skilled player. The
              distinctive ring at the handle provides not only a firm grip but
              facilitates complex maneuvers and quick transitions between attack
              and defense. Its utility and versatility have cemented its status
              as a beloved choice among the aficionado players of CS:GO.
            </p>
            <p className="text-white text-opacity-50 w-full">
              As a player progresses in their CS:GO journey, mastering the
              Karambit becomes a rite of passage. The skilled wielding of this
              weapon can significantly tilt the battlefield in their favor,
              adding a layer of strategy and depth to the gameplay. Its swift
              attack sequences and the ability to inflict heavy damage at close
              quarters make it a formidable weapon in the right hands. Moreover,
              the art of using the Karambit effectively also extends to
              understanding its defensive capabilities, making it a well-rounded
              choice for those looking to excel in CS:GO.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <div className="text-white text-xl font-bold ">
            Karambit Basic Information
          </div>
          <p className="text-white text-opacity-50 w-full">
            • <b>Team:</b> Both (Terrorists and Counter-Terrorists)
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Usage:</b> Primarily used in close-quarters combat situations
            due to its melee nature.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Range:</b> Very short, as it is a melee weapon requiring
            players to be extremely close to their target.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Fire Modes:</b> Stab (primary attack) and slash (secondary
            attack).
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Kill Award:</b> Standard kill reward as per game settings,
            often different in various game modes.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Movement Speed:</b> Being a knife, carrying it often allows
            players to move at the maximum speed possible in the game.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Kill Reward:</b> In competitive modes, players usually receive
            a higher kill reward for knife kills compared to firearm kills.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Damage:</b> The damage can vary depending upon whether a player
            is hitting an opponent from the front or the back, with backstabs
            dealing significantly higher damage, usually resulting in an instant
            kill.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Skins & Variants:</b> The Karambit has various skins and
            variants available, which are purely cosmetic and do not alter the
            weapon's stats.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Weapon Slot:</b> Melee slot, replacing the standard issue knife
            when equipped.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Rarity & Value: </b> Some of the skins for the Karambit are
            highly sought after, making them rare and valuable within the
            community.
          </p>
          <p className="text-white text-opacity-50 w-70p mt-1 pb-2">
            Karambit Key Features & Gameplay Elements
          </p>
          <p className="text-white text-opacity-50 w-70p mt-2 pb-2">
            <b>Versatility</b>
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Close-Quarter Efficiency:</b> The Karambit is highly effective
            in close-quarter combat, allowing for swift and lethal attacks on
            nearby enemies.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Speed Enhancement:</b> When equipped, it enables players to
            move at the highest possible speed in the game, aiding in quick
            navigation and strategic positioning.
          </p>
          <p className="text-white text-opacity-50 w-full mb-3">
            • <b>Skill Display:</b> Mastery over the Karambit is often seen as a
            display of skill and experience in CS:GO, showcasing a player's
            prowess and tactical awareness.
          </p>
          <p className="text-white text-opacity-50 w-70p mt-2 pb-2">
            <b>Damage</b>
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>High Damage Potential:</b> The Karambit can deliver substantial
            damage, especially with backstab attacks which usually result in
            instant kills.
          </p>
          <p className="text-white text-opacity-50 w-full pb-2">
            • <b>Critical Hits:</b> Being a melee weapon, it offers the
            opportunity for critical hits, significantly increasing its damage
            output in skilled hands.
          </p>
          <p className="text-white text-opacity-50 w-70p mt-2 pb-2">
            <b>Recoil</b>
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Consistent Strikes:</b> Players can execute consistent strikes
            without worrying about the weapon swaying or becoming less accurate
            over a series of attacks.
          </p>
          <p className="text-white text-opacity-50 w-70p mt-2 pb-2">
            <b>Accuracy</b>
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Precision Required:</b> To make the most out of the Karambit,
            players need to demonstrate a high level of accuracy, especially to
            land backstabs or critical hits.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Skill-Based Usage:</b> The effectiveness of the Karambit
            greatly depends on the player's skill and ability to accurately
            gauge the distance and position of the enemy for a successful
            attack.
          </p>
          <p className="text-white text-opacity-50 w-70p mt-1 pb-3">
            Karambit Damage Statistics
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Base Damage</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Primary Attack:</b> Approximately 25 HP (This varies depending
            on the direction and position relative to the opponent.)
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Secondary Attack:</b> Approximately 55 HP
          </p>
          <p className="text-white text-opacity-50 w-full mt-1">
            • <b>Headshot</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • Knives in CS:GO don't have specific headshot multipliers as
            firearms do, but hitting an enemy in the head will cause damage
            similar to a chest or arm hit.
          </p>
          <p className="text-white text-opacity-50 w-full mt-1">
            • <b>Chest and Arm Shots</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Primary Attack:</b> Approximately 25 HP
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Secondary Attack:</b> Approximately 55 HP
          </p>
          <p className="text-white text-opacity-50 w-full mt-1">
            • <b>Stomach</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Primary Attack:</b> Approximately 33 HP (Usually, melee attacks
            to the stomach area deal slightly more damage than to the chest.)
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Secondary Attack:</b> Approximately 73 HP
          </p>
          <p className="text-white text-opacity-50 w-full mt-1">
            • <b>Leg Shots</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • Melee weapons like the Karambit don't have a reduced damage model
            for leg shots as firearms do in CS:GO.
          </p>
          <p className="text-white text-opacity-50 w-full mt-1">
            • <b>Armor Penetration</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • Melee weapons, including the Karambit, are highly effective
            against armored opponents, often ignoring armor completely or having
            very high armor penetration.
          </p>
          <p className="text-white text-opacity-50 w-full mt-1">
            • <b>Range Modifier</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • The Karambit has a very short range, consistent with other melee
            weapons in CS:GO, requiring players to be close to their opponent
            for effective damage.
          </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <div className="text-white text-xl font-bold ">Karambit Usage</div>
          <p className="text-white text-opacity-50 w-full ">
            • <b>Role</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Silent Assassin:</b> The Karambit serves the role of a silent
            assassin tool, allowing players to execute stealthy kills without
            making noise.
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Quick Escape:</b> Given the speed advantage it provides, it's
            often used for quick escapes and fast rotations around the map.
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Status Symbol:</b> Due to its iconic design and rare skins, it
            serves as a status symbol, showcasing a player's experience and
            prestige in the game.
          </p>
          <p className="text-white text-opacity-50 w-full mt-1">
            • <b>Economy</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Budget-Friendly:</b> Being a default melee weapon, it doesn't
            require any investment, making it a budget-friendly option in tight
            economic situations.
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>High Kill Reward:</b> In competitive modes, knife kills,
            including those with the Karambit, offer a higher kill reward
            compared to other weapons, potentially helping to boost a player's
            economy.
          </p>
          <p className="text-white text-opacity-50 w-full mt-1">
            • <b>Tactic</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Flanking:</b> The Karambit is best used in flanking tactics,
            where players can approach enemies from behind for a one-hit kill.
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Distraction and Disengagement:</b> It can also be used
            tactically as a tool for distraction or disengagement, drawing enemy
            fire or creating space between the player and the enemy.
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Close-Quarter Ambush:</b> Setting up close-quarter ambushes in
            narrow passages or corners where enemies won't expect a melee attack
            is another effective tactic.
          </p>
          <p className="text-white text-opacity-50 w-full mt-1">
            • <b>Shooting Techniques</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Primary Attack (Stab):</b> A quick attack that can be used for
            a series of rapid strikes on an enemy.
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Secondary Attack (Slash):</b> A slower but more powerful attack
            that can be used for inflicting heavy damage, especially effective
            when attacking from behind.
          </p>
          <p className="text-white text-opacity-50 w-70p ml-5">
            • <b>Quick Switch:</b> This technique involves quickly switching to
            the Karambit and back to a firearm, used mainly to reset the firing
            cooldown on certain guns or to move quickly between positions.
          </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <div className="text-white text-xl font-bold ">Karambit Usage</div>
          <p className="text-white text-xl w-70p mt-2 mb-1">
            <b>Pros</b>
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>High Damage Potential:</b> The Karambit can deal substantial
            damage, especially when executing backstabs, which often result in
            an instant kill. This high damage potential makes it a lethal weapon
            in close-quarter combat scenarios. When a player skillfully uses the
            Karambit, they can quickly eliminate opponents with a few
            well-placed strikes, allowing for potentially game-changing plays
            that can swing the momentum in their favor.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Speed Advantage:</b> Equipping the Karambit allows players to
            move at the game's maximum speed, facilitating quick rotations and
            strategic positioning on the map. This speed advantage can be
            crucial in high-stakes situations where every second counts. Being
            able to outrun opponents or swiftly navigate to crucial points on
            the map can provide a significant strategic advantage during
            matches.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Stealth and Surprise Element:</b> Utilizing the Karambit
            provides an element of stealth, as it enables silent kills that
            don't alert nearby enemies. This surprise element can be a critical
            factor in executing flanking maneuvers or ambushes, where
            maintaining the element of surprise can be the difference between
            success and failure. Skilled players can leverage this
            characteristic to orchestrate stealthy assaults, catching enemies
            off guard and securing critical kills.
          </p>
          <p className="text-white text-xl w-70p mt-2 mb-1">
            <b>Cons</b>
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Limited Range:</b> One significant drawback of the Karambit is
            its limited range, which confines its usage to extremely
            close-quarter engagements. This range limitation can be a
            considerable disadvantage in open spaces where opponents equipped
            with firearms can easily maintain a safe distance while shooting.
            Players wielding the Karambit may find it challenging to close the
            gap against vigilant opponents, making it less viable in various
            combat situations.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>High Skill Threshold:</b> To effectively use the Karambit, a
            player needs to have a good understanding of the game's mechanics
            and a high level of skill. The weapon requires precise aim, timing,
            and a deep understanding of movement mechanics to be used
            effectively. This high skill threshold can be a barrier for newer
            players, making it a weapon that is more suited to experienced and
            skilled individuals who can fully leverage its potential.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Risk of Exposure:</b> Attempting to secure a kill with the
            Karambit often involves getting dangerously close to the enemy,
            exposing the player to significant risks. In many situations,
            attempting a knife kill can leave the player vulnerable to
            counterattacks from the targeted individual or nearby enemies. This
            risk of exposure can sometimes outweigh the potential benefits of
            using the Karambit, making it a high-risk, high-reward choice that
            may not always be the optimal strategy.
          </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <p className="text-white text-xl w-70p mt-2 mb-1">
            <b>Karambit Additional Features</b>
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Iconic Curved Design:</b> The Karambit is renowned for its
            iconic curved design which not only gives it a distinctive and
            menacing appearance but also allows for unique attack animations
            within the game. This design has been a significant factor in its
            popularity, making it a sought-after item among the player
            community.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Rare and Collectible Skins:</b> Aside from the standard skins
            mentioned before, the Karambit features a range of rare and
            collectible skins that are highly valued in the CS:GO community.
            These skins can sometimes be part of limited releases or special
            editions, making them prized possessions for collectors and
            enthusiasts.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Animation and Inspection:</b> The Karambit features some of the
            most detailed and stylish animation sequences in CS:GO. Players can
            inspect the weapon in-game, showcasing fluid spinning and flipping
            animations that highlight the weapon's aesthetic appeal. These
            animations contribute to the weapon's allure, making it a favorite
            among players who appreciate the finer details in the game's design.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Cultural and Historical Significance:</b> The Karambit has
            cultural and historical significance, with its design being inspired
            by a traditional Filipino claw-shaped knife. Its roots can be traced
            back to Southeast Asian martial arts, where it was used both as a
            tool and a weapon. This historical background adds a layer of depth
            to its inclusion in CS:GO, showcasing a blend of tradition and
            modern gaming culture.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Psychological Advantage:</b> The possession and display of a
            Karambit, especially with rare skins, can sometimes confer a
            psychological advantage in gameplay. It can be seen as a status
            symbol, indicating a player's experience or achievements in the
            game. This can potentially have a psychological impact on opponents,
            either instilling respect or intimidation, which might influence the
            dynamics of a match.
          </p>
          <p className="text-white text-opacity-50 w-full">
            • <b>Community and Marketplace Value:</b>
            The Karambit holds substantial value in the CS:GO community and
            marketplace. Rare skins can sometimes fetch high prices in the
            marketplace, making it an investment of sorts for players. Its
            vibrant community of enthusiasts also contributes to discussions,
            trading platforms, and events centered around the Karambit,
            showcasing its significance beyond just a weapon in the game.
          </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <p className="text-white text-xl w-70p mt-2 mb-1">
            <b>Karambit Application & Usage</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ">
            The Karambit, a weapon that thrives in close-quarter combat, should
            ideally be deployed in situations that favor stealth, agility, and
            precision. Its natural habitat is within the narrow corridors and
            tight spaces of various maps where the distance between you and your
            adversary is minimal. Choosing to utilize the Karambit is often a
            tactical decision made in the spur of the moment, especially when
            ammunition runs out or when a silent, swift kill is necessary to
            maintain the element of surprise. Its usage is also deeply
            intertwined with a player's mastery over movement techniques,
            allowing for rapid, fluid attacks that can catch opponents
            off-guard.
          </p>
          <p className="text-white text-opacity-50 w-70p mt-3">
            Having the Karambit can act as a significant morale booster. It is a
            show of dominance and skill, especially when executed with finesse
            to secure a critical kill. The Karambit can turn the tide of the
            match. Experienced players might also use it to humiliate their
            opponents, showcasing their superiority on the battlefield. Thus,
            the Karambit is not just a weapon of last resort, but a tool that is
            often used as an instrument of psychological warfare.
          </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md mb-5">

          <p className="text-white text-xl w-70p mt-3 mb-1">
            <b>Karambit Skins</b>
          </p>
          <p className="text-white text-opacity-50 w-70p ">
            Beyond its functionality, the Karambit serves as a status symbol
            within the CS:GO community. The weapon’s skins, a significant aspect
            of its allure, are highly sought after, with some variants
            commanding staggering prices in the market. Players often showcase
            these skins as a mark of experience and achievement, a testimony to
            their dedication and prowess in the game. The aesthetics of these
            skins, ranging from simple and sleek to elaborate and vibrant
            designs, add a personalized touch to a player's arsenal, enhancing
            the gaming experience manifold.
          </p>
          <p className="text-white text-opacity-50 w-70p mt-5 ">
            Looking for a Karambit skin? Check out Glowskin for a wide
            variety of Karambit skins - {"  "}
            <a className="text-blue" href="#">
              CS:GO cases
            </a>
            {"  "}, earn credits, and get the CS:GO skins.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

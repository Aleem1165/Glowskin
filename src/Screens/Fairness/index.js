import React, { useState } from "react";
import Header from "../../component/Header";
import images from "../../utilities/images";
import Footer from "../../component/Footer";
import "./index.css";
export default function Fairness() {
  const [signin, setSignin] = useState(false);
  const [progress, setProgress] = useState(40);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabName, setTabName] = useState("How it works");
  return (
    <div  className="mx-auto ">
      <div >
        <div
          className="p-4 bg-cover bg-center "
          style={{
            // backgroundImage: `url(${images.dashboardBackground})`,
          }}
        >
          <div className=" flex  flex-row mt-5 overflow-x-scroll coniatner">
            <div
              className={`text-white text-sm py-2 min-w-[110px] text-center ${
                tabName === "How it works" ? "activeItem" : "inactiveItem"
              } `}
              onClick={() => setTabName("How it works")}
            >
              How it works
            </div>
            <div
              className={`text-white text-sm p-2 ml-2 ${
                tabName === "Random.org" ? "activeItem" : "inactiveItem"
              }`}
              onClick={() => setTabName("Random.org")}
            >
              Random.org
            </div>
            <div
              className={`text-white text-sm p-2 ml-5 ${
                tabName === "Battles" ? "activeItem" : "inactiveItem"
              }`}
              onClick={() => setTabName("Battles")}
            >
              Battles
            </div>
            <div
              className={`text-white text-sm p-2 ml-2  ${
                tabName === "Upgrader" ? "activeItem" : "inactiveItem"
              }`}
              onClick={() => setTabName("Upgrader")}
            >
              Upgrader
            </div>
            <div
              className={`text-white text-sm p-2 ml-2  ${
                tabName === "Jackpot" ? "activeItem" : "inactiveItem"
              }`}
              onClick={() => setTabName("Jackpot")}
            >
              Jackpot
            </div>
            <div
              className={`text-white text-sm p-2 ml-2  ${
                tabName === "Plinko" ? "activeItem" : "inactiveItem"
              }`}
              onClick={() => setTabName("Plinko")}
            >
              Plinko
            </div>
            <div
              className={`text-white text-sm p-2 ml-2  ${
                tabName === "Roulette" ? "activeItem" : "inactiveItem"
              }`}
              onClick={() => setTabName("Roulette")}
            >
              Roulette
            </div>
            <div
              className={`text-white text-sm p-2 ml-2  ${
                tabName === "Mines" ? "activeItem" : "inactiveItem"
              }`}
              onClick={() => setTabName("Mines")}
            >
              Mines
            </div>
            <div
              className={`text-white text-sm p-2 ml-2  ${
                tabName === "Cases" ? "activeItem" : "inactiveItem"
              }`}
              onClick={() => setTabName("Cases")}
            >
              Cases
            </div>
          </div>
        
        
          <img
            src={images.banner2}
            className="w-39p  absolute right-5 hidden xl:block"
          />
          {tabName === "How it works" && (
            <div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  What is Provably Fair?
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  Provably Fair is a system allowing players to verify that the
                  site operates legitimately and doesn't tamper game results. It
                  leverages cryptography and third party input to generate
                  random values. At the end of the game, players can verify that
                  the outcome was indeed determined by the original seed and
                  inputs, thus proving that the game was fair.
                </p>
              </div>
              <div className="bg-btnDark  opacity-90  p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  Server Seed
                </div>
                <p className="text-white text-opacity-50">
                  Server Seed is a randomly generated hexadecimal string created
                  before each PvE game by the server. The seed is stored
                  privately in our database, and its SHA256 hash is sent to the
                  client.
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  Every time a string is hashed, it produces the same result.
                  The process cannot be reversed. This means that the client
                  doesn't know the outcome, but can verify that the server is
                  not changing the seed during the game.
                </p>
                <p className="text-white text-opacity-50 pb-2">Server Hash</p>
                <input className="w-60p p-2 input" />
              </div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  Client Seed
                </div>
                <p className="text-white text-opacity-50  pb-2">
                  Client Seed is a random string of characters generated by your
                  browser. It is shared with the server the moment a PvE game
                  takes place, after a Server Hash is shared and Server Seed is
                  set in stone. It's possible to change the seed however you
                  want, but we recommend enabling client seed rotation for
                  increased security.
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  Client Seed <span className="text-yellow">(Randomize)</span>
                </p>
                <div className="flex flex-row">
                  <input className="w-60p p-2 input" />
                  <div className="bg-yellow text-black ml-2 text-sm pl-5 pr-5 pt-3 pb-2 rounded-md font-medium cursor-pointer active:opacity-50">
                    Save
                  </div>
                </div>
                <div className="flex flex-row text-xs items-start mt-4 text-white">
                  <input type="checkbox" className="mt-0.5 mr-2 " />
                  <div className="text-white text-opacity-50">
                    Automatically rotate client seed after each bet placed
                  </div>
                </div>
              </div>
              <div className="pb-5"></div>
            </div>
          )}
          {tabName === "Random.org" && (
            <div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Random.org works
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  While Client Seed and Server Seed are used to generate PvE
                  results, Player vs Player games rely on a third party service
                  <span className="text-yellow cursor-pointer">
                    {" "}
                    Random.org
                  </span>{" "}
                  to generate random outcomes.
                  <span className="text-yellow cursor-pointer">
                    {" "}
                    Random.org{" "}
                  </span>
                  is a website that provides true randomness through atmospheric
                  noise, which is captured and converted into random numbers.
                  This source of randomness is considered highly unpredictable
                  and unbiased.
                </p>
              </div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  Random.org Serial Verifier
                </div>
                <p className="text-white text-opacity-50 pb-3">
                  Random.org cryptographically signs their responses and assigns
                  an incremental serial. This allows you to verify that all
                  outcomes are indeed generated by random.org, and we don't
                  cherry-pick a favorable outcome by requesting random values
                  multiple times. By using the search option below, you can
                  check each response by the Serial ID, and verify the signature
                  on random.org:
                </p>
                <p className="text-white text-opacity-50 pb-2">Serial ID</p>

                <div className="flex flex-row">
                  <input className="w-60p p-2 input" />
                  <div className="bg-yellow text-black ml-2 text-sm pl-5 pr-5 pt-3 pb-2 rounded-md font-medium cursor-pointer active:opacity-50">
                    Check Serial
                  </div>
                </div>
              </div>
              <div className="pb-5"></div>
            </div>
          )}
          {tabName === "Battles" && (
            <div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Case Battle Results Are Generated
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  Case Battles are a Player vs Player gamemode and use
                  random.org instead of Client and Server seeds. After all
                  players join, a random seed is requested from random.org. We
                  then assign a nonce to each player and round, and generate
                  case outcomes. Check the Cases tab to learn more.
                </p>
              </div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Ties Are Resolved
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  In case of a tie, a "coinflip" ticket is generated to
                  determine the winning team. It is a float value between 0 and
                  1. Every winning team gets an equal share.
                </p>

                <p className="text-white text-opacity-50 pb-2">
                  Example: In a 1v1v1v1 game there are 3 players with the exact
                  same item value - spot 1, 3 and 4. Player 1 is assigned a
                  range 0 - 1/3, player 3 - 1/3 - 2/3, player 4 - 2/3 - 1. The
                  coinflip ticket is 0.45612148050081647 - this means that
                  player 3 wins the battle.
                </p>
              </div>

              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Double Down Works
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  Double Down is a provably fair option that allows you to risk
                  your winnings by doubling down. If you win, your winnings
                  double, if you lose you get nothing. This option has a house
                  edge, meaning you have 45% chance to win double or nothing.
                  The outcome is determined by a random integer number between 1
                  and 100. If the drawn number is less or equal to 45, you win.
                  Otherwise, you lose. You can verify the outcome of Double Down
                  by entering the serial ID below, and reading the data field in
                  the Random object.
                </p>
                <p className="text-white text-opacity-50 pb-2">Serial ID</p>
                <div className="flex flex-row">
                  <input className="w-60p p-2 input" />
                  <div className="bg-yellow text-black ml-2 text-sm pl-5 pr-5 pt-3 pb-2 rounded-md font-medium cursor-pointer active:opacity-50">
                    Check Serial
                  </div>
                </div>
              </div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  Case Battle Verifier
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  Our provably fair system works as follows: When a battle
                  starts, we request a random string of characters (called seed)
                  from Random.org.
                </p>
                <p className="text-white text-opacity-50 pb-2">Battle ID</p>
                <div className="flex flex-row">
                  <input className="w-60p p-2 input" />
                  <div className="bg-yellow text-black ml-2 text-sm pl-5 pr-5 pt-3 pb-2 rounded-md font-medium cursor-pointer active:opacity-50">
                    Verify battle
                  </div>
                </div>
              </div>
              {/* outcome */}
              {/* <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  Outcome Verifier
                </div>
                <iframe
                  title="Embedded Content"
                  src="https://codepen.io/mjchal/pen/YzExVBp"
                  width="800"
                  height="600"
                  frameBorder="0"
                >
                  <p>Your browser does not support iframes.</p>
                </iframe>
              </div> */}
              <div className="pb-5"></div>
            </div>
          )}
          {tabName === "Upgrader" && (
            <div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Upgrader Results Are Generated
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  <i>
                    This game uses Server and Client seeds to generate outcomes.
                    The concept is explained in detail in the{" "}
                    <span
                      className="text-yellow cursor-pointer"
                      onClick={() => setTabName("How it works")}
                    >
                      {" "}
                      "How it works"
                    </span>{" "}
                    tab.
                  </i>
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  Both seeds are used to generate a ticket - float value between
                  0 and 1. The ticket then is compared with user odds to
                  determine the outcome. For example, if an user has 20% chance
                  of winning, the ticket must satisfy 0 &lt;= ticket &lt; 0.2
                  for rolls under, or 1 &gt;= ticket &gt; (1 - 0.2) for rolls
                  over.
                </p>
              </div>
              <div className="pb-5"></div>
            </div>
          )}
          {tabName === "Jackpot" && (
            <div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Jackpot Results Are Generated
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  Jackpot tickets are generated by a third-party service
                  random.org. To verify a game result do the following:
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  1. First, determine the number of tickets - it's the total pot
                  amount in gems times 100
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  2. Check your jackpot game history to find the Serial ID and
                  verify it on this page
                </p>
                <p className="text-white text-opacity-50  pb-2">
                  3. Open the random.org verification page and copy winning
                  percent - a float number <br /> between 0 and 1
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  4. Multiply winning number times the number of tickets and
                  round the result to an integer - this is the winning ticket
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  5. Check if the winning ticket corresponds to the winners'
                  ticket range
                </p>
              </div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  Random.org Serial Verifier
                </div>
                <p className="text-white text-opacity-50 pb-3">
                  Random.org cryptographically signs their responses and assigns
                  an incremental serial. This allows you to verify that all
                  outcomes are indeed generated by random.org, and we don't
                  cherry-pick a favorable outcome by requesting random values
                  multiple times. By using the search option below, you can
                  check each response by the Serial ID, and verify the signature
                  on random.org:
                </p>
                <p className="text-white text-opacity-50 pb-2">Serial ID</p>

                <div className="flex flex-row">
                  <input className="w-60p p-2 input" />
                  <div className="bg-yellow text-black ml-2 text-sm pl-5 pr-5 pt-3 pb-2 rounded-md font-medium cursor-pointer active:opacity-50">
                    Check Serial
                  </div>
                </div>
              </div>
              <div className="pb-5"></div>
            </div>
          )}
          {tabName === "Plinko" && (
            <div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Plinko Results Are Generated
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  <i>
                    This game uses Server and Client seeds to generate outcomes.
                    The concept is explained in detail in the{" "}
                    <span
                      className="text-yellow cursor-pointer"
                      onClick={() => setTabName("How it works")}
                    >
                      {" "}
                      "How it works"
                    </span>{" "}
                    tab.
                  </i>
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  The ball path is chosen using server seed and client seed.
                  After the game is complete, users can verify that the result
                  is not manipulated by checking if the hashed server seed
                  equals the server hash.
                </p>
              </div>
              <div className="pb-5"></div>
            </div>
          )}
          {tabName === "Roulette" && (
            <div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Roulette Results Are Generated
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  Roulette outcome is determined by a number between 0 and 14
                  inclusive:
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  • <b>CT:</b> 1, 2, 3, 4, 5, 6, 7
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  • <b>T:</b> 8, 9, 10, 11, 12, 13, 14
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  • <b> Green:</b> 0
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  • <b> Bait:</b> 4,11
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  To verify that a roulette round you participated in was fair,
                  go to your bet history and copy the Serial ID, then verify it
                  on this page.
                </p>
              </div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  Random.org Serial Verifier
                </div>
                <p className="text-white text-opacity-50 pb-3">
                  Random.org cryptographically signs their responses and assigns
                  an incremental serial. This allows you to verify that all
                  outcomes are indeed generated by random.org, and we don't
                  cherry-pick a favorable outcome by requesting random values
                  multiple times. By using the search option below, you can
                  check each response by the Serial ID, and verify the signature
                  on random.org:
                </p>
                <p className="text-white text-opacity-50 pb-2">Serial ID</p>

                <div className="flex flex-row">
                  <input className="w-60p p-2 input" />
                  <div className="bg-yellow text-black ml-2 text-sm pl-5 pr-5 pt-3 pb-2 rounded-md font-medium cursor-pointer active:opacity-50">
                    Check Serial
                  </div>
                </div>
              </div>
              <div className="pb-5"></div>
            </div>
          )}
          {tabName === "Mines" && (
            <div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Mines Results Are Generated
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  <i>
                    This game uses Server and Client seeds to generate outcomes.
                    The concept is explained in detail in the{" "}
                    <span
                      className="text-yellow cursor-pointer"
                      onClick={() => setTabName("How it works")}
                    >
                      {" "}
                      "How it works"
                    </span>{" "}
                    tab.
                  </i>
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  Our provably fair system works as follows: Before each game,
                  we generate a random string of characters (server seed), and
                  show its hash (server hash) to the user. The user then chooses
                  its own random string (client seed) and sends it to the
                  server. The mine layout is chosen using server seed and client
                  seed. After the game is complete, users can verify that the
                  result is not manipulated by checking if the hashed server
                  seed equals the server hash.
                </p>
              </div>
              <div className="pb-5"></div>
            </div>
          )}
          {tabName === "Cases" && (
            <div>
              <div className="bg-btnDark  opacity-90 p-5 mt-5 w-full rounded-xl ">
                <div className="text-white text-xl font-bold pt-2 pb-2">
                  How Case Results Are Generated
                </div>
                <p className="text-white text-opacity-50 pb-2">
                  <i>
                    This game uses Server and Client seeds to generate outcomes.
                    The concept is explained in detail in the{" "}
                    <span
                      className="text-yellow cursor-pointer"
                      onClick={() => setTabName("How it works")}
                    >
                      {" "}
                      "How it works"
                    </span>{" "}
                    tab.
                  </i>
                </p>
                <p className="text-white text-opacity-50 pb-2">
                  Both seeds are used in a random number generator to generate
                  an integer ticket value between 0 and 99,999 inclusive. Each
                  item in a case is assigned certain ticket ranges where 1% is
                  represented by 1000 tickets.
                </p>
              </div>
              <div className="pb-5"></div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
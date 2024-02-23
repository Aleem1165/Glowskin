import React, { useEffect, useState } from "react";
import images from "../../utilities/images";
import { useHamberg, useModal, usePayment, useSignIn } from "../../Screens/Layout";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ScrollToTopLink from "../ScrollToTopLink";

export default function Header({ deposit, setDeposit }) {

  const navigate = useNavigate()
  const location = useLocation();
  const activePath = location.pathname

  const { paymentModal, setPaymentModal } = usePayment();
  const { isModalOpen, setIsModalOpen } = useModal();
  const { signin, setSignin } = useSignIn();
  const { hamberg, setHamberg } = useHamberg()
  // const [hamberg, setHamberg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [headerRight, setHeaderRight] = useState(false);
  const [headerRightSignin, setHeaderRightSignin] = useState(false);

  useEffect(() => {
    if (hamberg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hamberg]);

  const handleSignOut = async () => {
    setHeaderRightSignin(false)
    setSignin(false)
  }

  return (
    <div className="w-full bg-headerBg fixed top-0 flex flex-row items-center justify-between px-3 py-3 bg-opacity-80 z-10">
      <Link
        to={'/'}
        className="text-white text-2xl font-extrabold flex flex items-center">
        GLOW SKIN
        <div className="w-[2px] h-10 bg-logoLine ml-10"></div>
      </Link>
      <div
        // className="hidden md:flex align-center justify-between text-white w-[32%] lg:w-[25%] max-w-[320px] text-xs "
        className={
          signin ? "hidden md:flex align-center justify-between text-white w-[32%] max-w-[320px]   mr-[15%] md:mr-0 xl:ml-[18%]  text-xs" :
            "hidden md:flex align-center justify-between text-white w-[32%] lg:w-[25%] max-w-[320px] text-xs"
        }
      >
        <Link to={'/'} className={
          activePath === '/' ? " cursor-pointer text-lineBlue px-1 font-semibold text-lg border-b-2 border-lineBlue" : "cursor-pointer text-white font-semibold text-lg"
        }>
          Home
        </Link>
        <div
          className={
            activePath === '/mines' || activePath === "/jackpot" || activePath === "/plinko" ? "flex items-center relative cursor-pointer text-lineBlue px-1 font-semibold text-lg border-b-2 border-lineBlue" :
              "flex items-center relative cursor-pointer text-white font-semibold text-lg"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          Games
          <img
            src={
              isOpen
                ? activePath === "/mines" || activePath === "/jackpot" || activePath === "/plinko"
                  ? images.arrowUpBlue
                  : images.arrowUpWhite
                : activePath === "/mines" || activePath === "/jackpot" || activePath === "/plinko"
                  ? images.arrowDownBlue
                  : images.arrowDownWhite
            }
            className="h-2 w-3 ml-2 mt-0.5"
          />
          {isOpen && (
            <div className="absolute py-2 top-full left-[-70%] top-[30px] bg-paymentModalBg shadow-lg">
              <div className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                <img src={images.battles} className="w-7 mx-3" />
                <div className=" w-[165px]">
                  <div className="text-sm text-white">Battles</div>
                  <div className="text-grayText text-xs">Pvp case  opening</div>
                </div>
              </div>

              <div className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                <img src={images.upgrader} className="w-7 mx-3" />
                <div className=" w-[165px]">
                  <div className="text-sm text-white">Upgrader</div>
                  <div className="text-grayText text-xs">Upgrade your skins</div>
                </div>
              </div>

              <ScrollToTopLink
                to={'/jackpot'}
                className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                <img src={images.jackpot} className="w-7 mx-3" />
                <div className=" w-[165px]">
                  <div className="text-sm text-white">Jackpot</div>
                  <div className="text-grayText text-xs">Win a huge pot</div>
                </div>
              </ScrollToTopLink>

              <ScrollToTopLink
                to={'/plinko'}
                className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                <img src={images.plinko} className="w-7 mx-3" />
                <div className=" w-[165px]">
                  <div className="text-sm text-white">Plinko</div>
                  <div className="text-grayText text-xs">Win up to win 10,000x</div>
                </div>
              </ScrollToTopLink>
              <div className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                <img src={images.roulette} className="w-7 mx-3" />
                <div className=" w-[165px]">
                  <div className="text-sm text-white">Roulette</div>
                  <div className="text-grayText text-xs">Spin to win!</div>
                </div>
              </div>
              <ScrollToTopLink
                to={'/mines'}
                className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                <img src={images.mines} className="w-7 mx-3" />
                <div className=" w-[165px]">
                  <div className="text-sm text-white">Mines</div>
                  <div className="text-grayText text-xs">Uncover the mines</div>
                </div>
              </ScrollToTopLink>
              <div
                className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                <img src={images.cases} className="w-8 mx-3" />
                <div className=" w-[165px]">
                  <div className="text-sm text-white">Cases</div>
                  <div className="text-grayText text-xs">Open Skins</div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={
          activePath === '/rewards' ? " cursor-pointer text-lineBlue px-1 font-semibold text-lg border-b-2 border-lineBlue" : "cursor-pointer text-white font-semibold text-lg"
        }>
          Rewards
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        {signin ? (
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="hidden lg:flex">
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
              className="bg-yellow hidden lg:flex ml-2 h-7 px-4 items-center active:opacity-50 cursor-pointer text-xs font-semibold"
            >
              Deposit
            </div>
            <div
              onClick={() => {
                setDeposit(false);
                setPaymentModal(true);
              }}
              className="bg-btnGray hidden text-white ml-2 h-7 px-4 lg:flex items-center active:opacity-50 cursor-pointer text-xs font-semibold"
            >
              Withdraw
            </div>
            <div className="bg-gemsBtn hidden h-7 ml-2 lg:flex flex-row items-center px-3">
              <img src={images.coin} className="h-5" />
              <div className="ml-2 text-sm text-white">0.00</div>
              <div className="ml-2 bg-yellow text-sm font-semibold cursor-pointer px-2 active:opacity-70">
                Gems
              </div>
            </div>
            <div className="relative">
              <div
                // onClick={() => navigate('/profile')}
                className="h-7 bg-white flex items-center px-2 ml-2 cursor-pointer"
                onMouseEnter={() => setHeaderRightSignin(true)}
                onMouseLeave={() => setHeaderRightSignin(false)}
              >
                <img src={images.user} className="h-4" />
              </div>
              {headerRightSignin && (
                <div
                  className="absolute py-2 right-0 bg-paymentModalBg shadow-md w-[200px] shadow-lg"
                  onMouseEnter={() => setHeaderRightSignin(true)}
                  onMouseLeave={() => setHeaderRightSignin(false)}
                >
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.profile} className="w-4 ml-2 mr-3" />
                    Profile
                  </div>
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.affiliatesWhite} className="w-5 ml-2 mr-2" />
                    Affiliates
                  </div>
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.padlockWhite} className="w-5 ml-2 mr-2" />
                    Game Responsibility
                  </div>
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.judgementWhite} className="w-5 ml-2 mr-2" />
                    Fairness
                  </div>
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.dicesWhite} className="w-5 ml-2 mr-2" />
                    Game History
                  </div>
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.wikiWhite} className="w-5 ml-2 mr-2" />
                    Wiki
                  </div>
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.vault} className="w-5 ml-2 mr-2" />
                    Vault
                  </div>
                  <div
                    onClick={handleSignOut}
                    className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.signinOut} className="w-5 mr-2 ml-2" />
                    Sign out
                  </div>
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
              className="bg-yellow ml-3 h-7 font-semibold px-4 flex items-center active:opacity-50 cursor-pointer text-xs"
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
                  className="absolute py-2 right-0 bg-paymentModalBg shadow-md w-[200px] shadow-lg"
                  onMouseEnter={() => setHeaderRight(true)}
                  onMouseLeave={() => setHeaderRight(false)}
                >
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.padlock} className="w-5 mr-2" />
                    Game Responsibility
                  </div>
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.judgement} className="w-5 mr-2" />
                    Fairness
                  </div>
                  <div className="block px-2 py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.world} className="w-5 mr-2" />
                    Wiki
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <button
          onClick={() => setHamberg(!hamberg)}
          className={
            signin ? "lg:hidden focus:outline-none" : "md:hidden focus:outline-none"
          }
        >
          <svg
            className={
              signin ? "w-8 h-8 text-white ml-3" : "w-6 h-6 text-white "
            }
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
        <div className="lg:hidden bg-headerBg py-3 overflow-y-scroll  px-3 transition-all duration-300 absolute h-[100vh] top-0 left-0 w-full flex flex-col">
          <div className="text-white flex flex-row items-center justify-between w-full h-10">
            <Link
              to={'/'}
              onClick={() => setHamberg(!hamberg)}
              className="text-white text-2xl font-extrabold flex flex items-center">
              GLOW SKIN
              <div className="w-[2px] h-10 bg-logoLine ml-10"></div>
            </Link>
            <button
              onClick={() => setHamberg(!hamberg)}
              className="lg:hidden focus:outline-none"
            >
              <svg
                className={
                  signin ? "w-8 h-8 text-white" : "w-6 h-6 text-white"
                }
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
          <div>
            {
              signin ?
                <div className="flex flex-col items-start">
                  <div className="mt-4 w-full grid grid-cols-2 gap-2">
                    <div className="bg-gemsBtn flex flex-row items-center justify-between px-3">
                      <div className="flex flex-row items-center">
                        <img src={images.coin} className="h-5" />
                        <div className="ml-2 text-sm text-white">0.00</div>
                      </div>
                      <div className="ml-2 bg-yellow text-sm font-semibold cursor-pointer px-2 active:opacity-70">
                        Gems
                      </div>
                    </div>
                    <div
                      className="border border-lineBlue flex items-center justify-center font-semibold active:opacity-50 cursor-pointer text-xs"
                    >
                      <img src={images.race2} className="h-10" />
                    </div>
                    <div
                      onClick={() => {
                        setDeposit(true);
                        setPaymentModal(true);
                      }}
                      className="bg-yellow flex py-3 items-center justify-center active:opacity-50 cursor-pointer text-xs font-semibold"
                    >
                      Deposit
                    </div>
                    <div
                      onClick={() => {
                        setDeposit(false);
                        setPaymentModal(true);
                      }}
                      className="bg-btnGray text-white py-3 px-4 flex items-center justify-center active:opacity-50 cursor-pointer text-xs font-semibold"
                    >
                      Withdraw
                    </div>
                  </div>
                  <Link to={'/'} onClick={() => setHamberg(!hamberg)} className={
                    activePath === '/' ? " cursor-pointer text-lineBlue pr-1 mt-4 text-sm md:hidden" :
                      "md:hidden cursor-pointer text-white text-sm mt-4"
                  }>
                    Home
                  </Link>
                  <div className={
                    activePath === '' ? " cursor-pointer text-lineBlue pr-1 font-semibold text-sm md:hidden" :
                      " md:hidden cursor-pointer text-white text-sm"
                  }>
                    Rewards
                  </div>
                  <div
                    className={
                      activePath === '/mines' || activePath === "/jackpot" || activePath === "/plinko" ?
                        "md:hidden flex items-center cursor-pointer text-lineBlue text-sm" :
                        " flex items-center cursor-pointer text-white text-sm md:hidden "
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <img
                      src={
                        isOpen
                          ? activePath === "/mines" || activePath === "/jackpot" || activePath === "/plinko"
                            ? images.arrowUpBlue
                            : images.arrowUpWhite
                          : activePath === "/mines" || activePath === "/jackpot" || activePath === "/plinko"
                            ? images.arrowDownBlue
                            : images.arrowDownWhite
                      }
                      className="w-4  mr-2"
                    />
                    Games
                  </div>
                  {
                    isOpen &&
                    <div
                      onClick={() => setHamberg(!hamberg)}
                      className="bg-transparent md:hidden">
                      <div className="flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.battles} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Battles</div>
                          <div className="text-grayText text-xs">Pvp case  opening</div>
                        </div>
                      </div>

                      <div className="flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.upgrader} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Upgrader</div>
                          <div className="text-grayText text-xs">Upgrade your skins</div>
                        </div>
                      </div>

                      <ScrollToTopLink
                        to={'/jackpot'}
                        className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.jackpot} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Jackpot</div>
                          <div className="text-grayText text-xs">Win a huge pot</div>
                        </div>
                      </ScrollToTopLink>

                      <ScrollToTopLink
                        to={'/plinko'}
                        className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.plinko} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Plinko</div>
                          <div className="text-grayText text-xs">Win up to win 10,000x</div>
                        </div>
                      </ScrollToTopLink>
                      <div className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.roulette} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Roulette</div>
                          <div className="text-grayText text-xs">Spin to win!</div>
                        </div>
                      </div>
                      <ScrollToTopLink
                        to={'/mines'}
                        className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.mines} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Mines</div>
                          <div className="text-grayText text-xs">Uncover the mines</div>
                        </div>
                      </ScrollToTopLink>
                      <div
                        className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.cases} className="w-8 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Cases</div>
                          <div className="text-grayText text-xs">Open Skins</div>
                        </div>
                      </div>
                    </div>
                  }
                  <div className="block md:hidden px- py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.profile} className="w-4 mr-3" />
                    Profile
                  </div>
                  <div className="block md:hidden px- py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.affiliatesWhite} className="w-5 mr-2" />
                    Affiliates
                  </div>
                  <div className="block md:hidden px- py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.padlockWhite} className="w-5 mr-2" />
                    Game Responsibility
                  </div>
                  <div className="block md:hidden px- py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.judgementWhite} className="w-5 mr-2" />
                    Fairness
                  </div>
                  <div className="block md:hidden px- py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.dicesWhite} className="w-5 mr-2" />
                    Game History
                  </div>
                  <div className="block md:hidden px- py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.wikiWhite} className="w-5 mr-2" />
                    Wiki
                  </div>
                  <div className="block md:hidden px- py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.vault} className="w-5 mr-2" />
                    Vault
                  </div>
                  <div
                    onClick={handleSignOut}
                    className="block md:hidden px- py-2 text-white text-sm flex flrx-row items-center hover:bg-blue4 text-white cursor-pointer">
                    <img src={images.signinOut} className="w-5  mr-2" />
                    Sign out
                  </div>
                </div> :
                <div className="flex flex-col items-start">
                  <div className="w-full flex flex-row items-center justify-center gap-2">
                    <div
                      className="bg-yellow h-12 w-[50%] flex items-center justify-center font-semibold mt-2 active:opacity-50 cursor-pointer text-xs"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Sign In
                    </div>
                    <div
                      className="border border-lineBlue w-[50%] flex items-center justify-center font-semibold mt-2 active:opacity-50 cursor-pointer text-xs"
                    >
                      <img src={images.race2} className="h-12" />
                    </div>
                  </div>
                  <Link to={'/'} onClick={() => setHamberg(!hamberg)} className={
                    activePath === '/' ? " cursor-pointer text-lineBlue pr-1 font-semibold text-lg border-b-2 border-lineBlue" : "cursor-pointer text-white font-semibold text-lg"
                  }>
                    Home
                  </Link>
                  <div className={
                    activePath === '' ? " cursor-pointer text-lineBlue pr-1 font-semibold text-lg border-b-2 border-lineBlue mt-1" : " mt-1 cursor-pointer text-white font-semibold text-lg"
                  }>
                    Rewards
                  </div>
                  <div
                    className={
                      activePath === '/mines' || activePath === "/jackpot" || activePath === "/plinko" ? " flex items-center cursor-pointer text-lineBlue px-1 font-semibold text-lg border-b-2 border-lineBlue" :
                        " flex items-center cursor-pointer text-white font-semibold text-lg"
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Games
                    <img
                      src={
                        isOpen
                          ? activePath === "/mines" || activePath === "/jackpot" || activePath === "/plinko"
                            ? images.arrowUpBlue
                            : images.arrowUpWhite
                          : activePath === "/mines" || activePath === "/jackpot" || activePath === "/plinko"
                            ? images.arrowDownBlue
                            : images.arrowDownWhite
                      }
                      className="h-2 w-3 ml-2 mt-0.5"
                    />
                  </div>
                  {
                    isOpen &&
                    <div
                      onClick={() => setHamberg(!hamberg)}
                      className="bg-transparent">
                      <div className="flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.battles} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Battles</div>
                          <div className="text-grayText text-xs">Pvp case  opening</div>
                        </div>
                      </div>

                      <div className="flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.upgrader} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Upgrader</div>
                          <div className="text-grayText text-xs">Upgrade your skins</div>
                        </div>
                      </div>

                      <ScrollToTopLink
                        to={'/jackpot'}
                        className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.jackpot} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Jackpot</div>
                          <div className="text-grayText text-xs">Win a huge pot</div>
                        </div>
                      </ScrollToTopLink>

                      <ScrollToTopLink
                        to={'/plinko'}
                        className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.plinko} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Plinko</div>
                          <div className="text-grayText text-xs">Win up to win 10,000x</div>
                        </div>
                      </ScrollToTopLink>
                      <div className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.roulette} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Roulette</div>
                          <div className="text-grayText text-xs">Spin to win!</div>
                        </div>
                      </div>
                      <ScrollToTopLink
                        to={'/mines'}
                        className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.mines} className="w-7 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Mines</div>
                          <div className="text-grayText text-xs">Uncover the mines</div>
                        </div>
                      </ScrollToTopLink>
                      <div
                        className=" flex flex-row items-center cursor-pointer hover:bg-blue4 py-2">
                        <img src={images.cases} className="w-8 mx-3" />
                        <div className=" w-[165px]">
                          <div className="text-sm text-white">Cases</div>
                          <div className="text-grayText text-xs">Open Skins</div>
                        </div>
                      </div>
                    </div>
                  }
                  <div className={
                    activePath === '' ? " cursor-pointer text-lineBlue pr-1 font-semibold text-lg border-b-2 border-lineBlue mt-1" : " mt-1 cursor-pointer text-white font-semibold text-lg"
                  }>
                    Game Responsibility
                  </div>
                  <div className={
                    activePath === '' ? " cursor-pointer text-lineBlue pr-1 font-semibold text-lg border-b-2 border-lineBlue mt-1" : " mt-1 cursor-pointer text-white font-semibold text-lg"
                  }>
                    Fairness
                  </div>
                  <div className={
                    activePath === '' ? " cursor-pointer text-lineBlue pr-1 font-semibold text-lg border-b-2 border-lineBlue mt-1" : " mt-1 cursor-pointer text-white font-semibold text-lg"
                  }>
                    Wiki
                  </div>
                </div>
            }
          </div>
        </div>
      )}
    </div>
  );
}

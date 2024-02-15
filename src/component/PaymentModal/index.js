import React, { useEffect, useState } from "react";
import { usePayment } from "../../Screens/Layout";
import images from "../../utilities/images";
import "../../App.css";
import Visa from "../Visa";
import ArkPay from "../ArkPay";
import Zelle from "../Zelle";

export default function PaymentModal({ deposit, setDeposit }) {
  const { paymentModal, setPaymentModal } = usePayment();

  const [selectedDeposit, setSelectDeposit] = useState("asd");
  const [selectedWidthdraw, setSelectedWidthdraw] = useState("");

  const closeModal = () => {
    setPaymentModal(false);
  };

  useEffect(() => {
    // setSelectDeposit("");
    setSelectedWidthdraw("");
    setPaymentModal(paymentModal);
    if (paymentModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when unmounting
    };
  }, [paymentModal]);

  const handleChangeSelectedDeposit = (name) => {
    // visa; arkpay zelle
    setSelectDeposit(name);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50  ${
        paymentModal ? "" : "hidden"
      }`}
      onClick={closeModal}
      style={{
        zIndex: paymentModal ? 50 : -1,
      }}
    >
      <div className="w-full bg-transparent h-full flex items-center justify-center max-w-screen-xl">
        <div
          className="shadow-lg shadow-white-900 bg-paymentModalBg bg-cover bg-center rounded-lg p-4 w-85p h-[80vh] flex flex-col items-start "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-between gap-2">
              <div
                className={
                  deposit
                    ? "bg-white px-3 py-2 text-sm font-semibold text-paymentModalBg cursor-pointer active:opacity-50"
                    : "bg-btnGray2 px-3 py-2 text-sm font-semibold text-white cursor-pointer active:opacity-50"
                }
                onClick={() => setDeposit(true)}
              >
                Deposit
              </div>
              <div
                className={
                  deposit
                    ? "bg-btnGray2 px-3 py-2 text-sm font-semibold text-white cursor-pointer active:opacity-50"
                    : "bg-white px-3 py-2 text-sm font-semibold text-paymentModalBg cursor-pointer active:opacity-50"
                }
                onClick={() => setDeposit(false)}
              >
                Withdraw
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="flex flex-row items-center justify-center bg-blue2 py-1 px-2">
                <input
                  type="text"
                  placeholder="Affiliate Code"
                  // placeholder-white
                  // bg-transparent
                  className="focus:outline-none text-sm p-1 bg-transparent text-white placeholder-white w-[160px]"
                />
                <img src={images.infoSquare} className="w-5 h-5" />
              </div>
              <div className="bg-lineBlue px-3 py-2 text-sm font-semibold text-white cursor-pointer active:opacity-50">
                Apply
              </div>
              <img
                src={images.crossWhite}
                className="w-4 h-4 cursor-pointer"
                onClick={closeModal}
              />
            </div>
          </div>
          {deposit ? (
            <div className="bg-blue3 rounded-md mt-3 w-full h-full check overflow-y-scroll px-2 py-4">
              {selectedDeposit == "" ? (
                <div>
                  <div className="text-white text-md font-bold mb-2">Skins</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-6">
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.csgo} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">CS: GO</div>
                        <div className="text-white opacity-60 ">Steam</div>
                        <div className="text-lineBlue">Instant</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.rust} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Rust</div>
                        <div className="text-white opacity-60 ">External</div>
                        <div className="text-lineBlue">Instant</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-md font-bold mb-2">Cash</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-6">
                    <div
                      onClick={() => handleChangeSelectedDeposit("visa")}
                      className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80"
                    >
                      <img
                        src={images.visa}
                        className="w-16 h-14 bg-paymentImgBg p-2 border border-yellow"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Credit Card</div>
                        <div className="text-yellow ">Zen Payments</div>
                        <div className="text-yellow">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div
                      onClick={() => handleChangeSelectedDeposit("arkpay")}
                      className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80"
                    >
                      <img
                        src={images.arkPay}
                        className="w-16 h-14 px-[8px] py-[18px] bg-paymentImgBg border border-yellow"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Credit Card</div>
                        <div className="text-yellow ">ArkPay</div>
                        <div className="text-yellow">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div
                      onClick={() => handleChangeSelectedDeposit("zelle")}
                      className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80"
                    >
                      <img
                        src={images.zelle}
                        className="w-16 h-14 bg-paymentImgBg px-2 py-3"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Zelle</div>
                        <div className="text-white opacity-60 ">Zelle</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img
                        src={images.pPay}
                        className="w-16 h-14 bg-paymentImgBg py-1 px-2"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Giftcard</div>
                        <div className="text-white opacity-60 ">
                          Kinguin, G2A
                        </div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img
                        src={images.visa}
                        className="w-16 h-14 bg-paymentImgBg px-2 py-2"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Trustly</div>
                        <div className="text-white opacity-60 ">
                          Zen Payments
                        </div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img
                        src={images.webPay}
                        className="w-16 h-14 px-2 bg-paymentImgBg py-2"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Credit Card</div>
                        <div className="text-white opacity-60 ">
                          Zen Payments
                        </div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img
                        src={images.neteller}
                        className="w-16 h-14 bg-paymentImgBg px-2 py-5"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Credit Card</div>
                        <div className="text-white opacity-60 ">
                          Zen Payments
                        </div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img
                        src={images.sofort}
                        className="w-16 h-14 bg-paymentImgBg px-2 py-3"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Sofort</div>
                        <div className="text-white opacity-60 ">
                          Zen Payments
                        </div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img
                        src={images.neosurf}
                        className="w-16 h-14 bg-paymentImgBg px-2 py-5"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Giftcard</div>
                        <div className="text-white opacity-60 ">
                          Kinguin, G2A
                        </div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img
                        src={images.unionPay}
                        className="w-16 h-14 bg-paymentImgBg px-3 py-3"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Trustly</div>
                        <div className="text-white opacity-60 ">
                          Zen Payments
                        </div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img
                        src={images.sofort2}
                        className="w-16 h-14 bg-paymentImgBg px-3 py-2"
                      />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Sofort</div>
                        <div className="text-white opacity-60 ">
                          Zen Payments
                        </div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-md font-bold mb-2">
                    Cryptocurrencies
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-6">
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.bitcoin} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Bitcoin</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.etherum} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Etherum</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.litecoin} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Litecoin</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.dogecoin} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Dogecoin</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.usdt} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">USDT (TRX)</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.usdc} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">USDC</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.ripple} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Ripple</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.chainlink} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Chainlink</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.solana} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Solana</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.solana2} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Solana</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.bnb} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">BNB (BSC)</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.trx} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">TRX</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.usdt2} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">USDT (ERC20)</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-md font-bold mb-2">Free</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.promotion} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Promotion</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">Instant</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full">
                    <div
                      onClick={() => handleChangeSelectedDeposit("")}
                      className="bg-lineBlue w-8 h-6 flex items-center justify-center rounded-md hover:opacity-80 cursor-pointer"
                    >
                      <img src={images.backArrow} className="w-4 h-3" />
                    </div>
                  </div>
                  {selectedDeposit === "visa" ? (
                    <Visa />
                  ) : selectedDeposit === "arkpay" ? (
                    <ArkPay />
                  ) : (
                    <Zelle />
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-blue3 rounded-md mt-3 w-full h-full check overflow-y-scroll px-2 py-4">
              {selectedWidthdraw === "" ? (
                <div>
                  <div className="text-white text-md font-bold mb-2">Skins</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-6">
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.csgo2} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">CS: GO</div>
                        <div className="text-white opacity-60 ">Steam</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.csgo2} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Rust</div>
                        <div className="text-white opacity-60 ">Waxpeer</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-md font-bold mb-2">
                    Cryptocurrencies
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-6">
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.bitcoin} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Bitcoin</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.etherum} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Etherum</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.litecoin} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Litecoin</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.usdt2} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">USDT (ERC20)</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">1 USD = 1.46 gems</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-md font-bold mb-2">Free</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                    <div className="flex flex-row items-center bg-paymentModalBg p-2 cursor-pointer hover:bg-paymentModalBg2 active:opacity-80">
                      <img src={images.wallet} className="w-16 h-14" />
                      <div className="text-xs ml-2 font-semibold">
                        <div className="text-white text-sm">Vault</div>
                        <div className="text-white opacity-60 ">Glowskin</div>
                        <div className="text-lineBlue">Instant</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>widthdraw selected</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { usePayment } from "../../Screens/Layout";
import images from "../../utilities/images";

export default function PaymentModal({ deposit, setDeposit }) {
  const { paymentModal, setPaymentModal } = usePayment();

  const closeModal = () => {
    setPaymentModal(false);
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
          className="shadow-lg shadow-white-900 bg-paymentModalBg bg-cover bg-center rounded-lg p-4 w-70p flex flex-col items-start justify-center"
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
            <div>
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
            </div>
          </div>
          <div>hello2</div>
        </div>
      </div>
    </div>
  );
}

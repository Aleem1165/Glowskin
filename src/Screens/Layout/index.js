import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import AuthModal from "../../component/AuthModal";
import LiveDrops from "../../component/LiveDrops";
import LiveChat from "../../component/LiveChat";
import images from "../../utilities/images";
import PaymentModal from "../../component/PaymentModal";

const ModalContext = createContext();
const SignInContext = createContext();
const PaymentContext = createContext();
const HambergContext = createContext();

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signin, setSignin] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [deposit, setDeposit] = useState(true);
  const [showLiveDrops, setShowLiveDrops] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [hamberg, setHamberg] = useState(false);

  // useEffect(() => {
  //   // Condition based on screen width
  //   if (window.innerWidth < 1020) {
  //     setShowLiveDrops(false);
  //   } else {
  //     setShowLiveDrops(true);
  //   }
  // }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <SignInContext.Provider value={{ signin, setSignin }}>
          <PaymentContext.Provider value={{ paymentModal, setPaymentModal }}>
            <HambergContext.Provider value={{ hamberg, setHamberg }}>
              <Header deposit={deposit} setDeposit={setDeposit} />
              <LiveDrops showLiveDrops={showLiveDrops} />
              <LiveChat showChat={showChat} />
              <img
                onClick={() => setShowLiveDrops(!showLiveDrops)}
                src={showLiveDrops ? images.hideLiveDrops : images.showLiveDrops}
                className={
                  showLiveDrops
                    ? "fixed top-[50vh] left-[200px] z-10 w-4 cursor-pointer"
                    : "fixed top-[50vh] z-10 w-4 cursor-pointer"
                }
              />
              <img
                onClick={() => setShowChat(!showChat)}
                src={showChat ? images.closeChat : images.openChat}
                className={
                  showChat
                    ? "fixed top-[50vh] right-[210px] z-10 w-4 cursor-pointer hidden 2xl:block"
                    : "fixed top-[50vh] z-10 w-4 right-0 cursor-pointer hidden 2xl:block"
                }
              />
              <div
                className={
                  showLiveDrops
                    ? showChat
                      ? "flex flex-col pt-[7vh] bg-cover lg:pl-[200px] 2xl:pr-[210px] min-h-[100vh] items-center justify-between"
                      : "flex flex-col pt-[7vh] bg-cover lg:pl-[200px] min-h-[100vh] items-center justify-between"
                    : showChat
                      ? "flex flex-col pt-[7vh] bg-cover 2xl:pr-[210px] min-h-[100vh] items-center justify-between"
                      : "flex flex-col pt-[7vh] bg-cover min-h-[100vh] items-center justify-between"
                }
                style={{
                  backgroundImage: `url(${images.BG})`,
                }}
              >
                <div className="w-full ">
                  <Outlet />
                </div>
                {/* <Footer /> */}
              </div>
              <AuthModal />
              <PaymentModal deposit={deposit} setDeposit={setDeposit} />
            </HambergContext.Provider>
          </PaymentContext.Provider>
        </SignInContext.Provider>
      </ModalContext.Provider>
    </>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

const useSignIn = () => {
  const context = useContext(SignInContext);
  if (!context) {
    throw new Error("useSignIn must be used within a SignInProvider");
  }
  return context;
};

const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a SignInProvider");
  }
  return context;
};

const useHamberg = () => {
  const context = useContext(HambergContext);
  if (!context) {
    throw new Error("usePayment must be used within a SignInProvider");
  }
  return context;
};

export { usePayment, useSignIn, useModal, useHamberg, Layout as default };


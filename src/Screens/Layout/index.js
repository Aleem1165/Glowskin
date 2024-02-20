import React, { createContext, useContext, useState } from "react";
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

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signin, setSignin] = useState(true);
  const [paymentModal, setPaymentModal] = useState(false);
  const [deposit, setDeposit] = useState(true);

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
            <Header deposit={deposit} setDeposit={setDeposit} />
            <LiveDrops />
            <LiveChat />
            <div
              className="flex flex-col pt-16 bg-cover pl-[200px] 2xl:pr-[210px] min-h-[100vh] items-center justify-between"
              style={{
                backgroundImage: `url(${images.BG})`,
              }}
            >
              <div className="w-full ">
              {/* <div className="w-full pt-[65vh]"> */}
                <Outlet />
              </div>
              <Footer />
            </div>
            <AuthModal />
            <PaymentModal deposit={deposit} setDeposit={setDeposit} />
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

export { usePayment, useSignIn, useModal, Layout as default };
// export { useModal, Layout as default };
// export default Layout;

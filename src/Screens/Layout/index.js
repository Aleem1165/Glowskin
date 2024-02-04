import React, { createContext, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import AuthModal from "../../component/AuthModal";
import LiveDrops from "../../component/LiveDrops";
import LiveChat from "../../component/LiveChat";
import images from "../../utilities/images";

const ModalContext = createContext();
const SignInContext = createContext();

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signin, setSignin] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        {/* <SignInContext.Provider value={{ signin, setSignin }}> */}
        <Header />
        <div
          className="flex pt-16 bg-cover "
          style={{
            backgroundImage: `url(${images.BG})`,
          }}
        >
          <LiveDrops />
          <div className="w-full pt-[60vh]">
            <Outlet />
          </div>
          <LiveChat />
        </div>
        <Footer />
        <AuthModal />
        {/* </SignInContext.Provider> */}
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

// const useSignIn = () => {
//   const context = useContext(SignInContext);
//   if (!context) {
//     throw new Error("useSignIn must be used within a SignInProvider");
//   }
//   return context;
// };

// export { useSignIn, useModal, Layout as default };
export { useModal, Layout as default };
// export default Layout;

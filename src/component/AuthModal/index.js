import { useState, useEffect } from "react";
import images from "../../utilities/images";
import { useModal } from "../../Screens/Layout";
import Login from "../Login";
import Register from "../Register";

const AuthModal = (
  {
    // useModal,
    // isOpen, onClose
  }
) => {
  const { isModalOpen, setIsModalOpen } = useModal();
  //   const { signin, setSignin } = useSignIn();
  const [modalOpen, setModalOpen] = useState(false);
  const [tabname, setTabname] = useState("login");

  useEffect(() => {
    setModalOpen(isModalOpen);
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when unmounting
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setModalOpen(false);
    setIsModalOpen(false);
  };

  const handleChangeTabname = (name) => {
    setTabname(name);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50  ${
        isModalOpen ? "" : "hidden"
      }`}
      onClick={closeModal}
      style={{
        zIndex: isModalOpen ? 50 : -1,
      }}
    >
      <div className="w-full bg-transparent h-full flex items-center justify-center max-w-screen-xl">
        <div
          className=" shadow-lg shadow-white-900 bg-cover bg-center  border-2 border-headerBorder rounded-lg px-4 lg:pr-8 pt-4 pb-4 w-50p flex flex-row items-center justify-end relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            backgroundImage: `url(${images.modalBG})`,
          }}
        >
          <img
            src={images.modalImg}
            className="h-113p mr-52p bottom-2 absolute hidden lg:flex"
          />
          <div className="lg:w-55p p-2 w-100p">
            <div className="w-full flex flex-row p-1 justify-between bg-btnDark rounded-md ">
              <div
                className={`font-semibold w-49 flex items-center justify-center rounded-md pt-1 pb-1 text-white cursor-pointer active:opacity-50 ${
                  tabname === "login" ? "bg-btnLight" : ""
                }`}
                onClick={() => {
                  handleChangeTabname("login");
                }}
              >
                Log In
              </div>
              <div
                className={` font-semibold w-49 flex items-center justify-center rounded-md pt-1 pb-1 text-white cursor-pointer active:opacity-50 ${
                  tabname === "register" ? "bg-btnLight" : ""
                }`}
                onClick={() => {
                  handleChangeTabname("register");
                }}
              >
                Register
              </div>
            </div>
            {tabname === "login" ? (
              <Login
              // onClose={onClose}
              />
            ) : (
              <Register
              // onClose={onClose}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

import React from "react";
import { useNavigate as useReactRouterNavigate } from "react-router-dom";

const useNavigate = () => {
  const navigate = useReactRouterNavigate();

  const customNavigate = (to, options) => {
    window.scrollTo(0, 0); // Scroll to the top
    navigate(to, options);
  };

  return customNavigate;
};

export default useNavigate;

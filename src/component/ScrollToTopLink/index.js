import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

const ScrollToTopLink = ({ to, children, ...rest }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ReactRouterLink to={to} onClick={handleClick} {...rest}>
      {children}
    </ReactRouterLink>
  );
};

export default ScrollToTopLink;

import React from "react";
import { CallIcon } from "../Icons";

const CallButton = () => {
  return (
    <a
      href="tel:+989122875906"
      className="fixed animate-ripple right-8 z-[99999] bottom-8 w-16 h-16 bg-primary-1 p-4 rounded-full flex items-center justify-center"
    >
      <CallIcon />
    </a>
  );
};

export default CallButton;

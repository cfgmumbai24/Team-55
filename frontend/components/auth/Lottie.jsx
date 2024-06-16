"use client";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/assets/lottie/login.json";

const LottieComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-[50%] m-auto">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieComponent;

"use client";
import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../public/assets/lottie/landing2.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Img } from "@chakra-ui/react";
import Image from "next/image";
const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  // Data for vision, mission, and goal sections
  const sections = [
    {
      title: "DECREASE MIGRATION RATE",
      description:
        "Our goal is to provide a platform where individuals can express their opinions freely and contribute. ",
      imageUrl: "/assets/images/Goat.jpg", // Add image URL here
    },
    {
      title: "PROVIDED SUSTAINABLE LIVELIHOOD",
      description:
        "Our mission is to create a digital space that empowers people to share their perspectives.",
      imageUrl: "/assets/images/mission.jpg", // Add image URL here
    },
    {
      title: "VULNERABLE POVERTY REDUCTION",
      description:
        "Our vision is to build a vibrant community where every voice is heard, valued, and respected.",
      imageUrl: "/assets/images/vision.jpg", // Add image URL here
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-white h-full w-auto overflow-y-hidden">
      <header className="bg-blue-700 py-6">
        <h1 className="text-4xl text-center text-white  font-bold ">
          EAGL Livelihood Foundation
        </h1>
      </header>
      <div className="w-full flex ">
        <div className="flex flex-1 text-black px-2 pt-2 flex-col">
          <Image
            src="/assets/images/Eagl.jpeg"
            alt="Eagl"
            width={300}
            height={100}
          />
          <p className="text-xl text-center mt-2">
            Beautiful Journey of creation of EAGL as a social enterprise began
            with founder directors Ph D research at IITB on “Hunger and
            Starvation Deaths among Tribes in the Melghat Region of
            Maharashtra”. Rigorous process of Ph D allowed him to comprehend
            poverty and issues related to social exclusion of the tribals and
            began initiative focused on livelihood creation with the objective
            of eradication of the poverty and making community and nation
            self-reliance in true sense.
          </p>
          <div className="flex gap-5 justify-center mt-10 items-center">
            <Link className="btn-grad font-bold text-2xl" href="/register">
              Sign Up
            </Link>
            <Link className="btn2-grad font-bold text-2xl" href="/volunteer">
              Contribute Towards Society
            </Link>
          </div>
        </div>
        <div className="flex flex-1">
          <Lottie options={defaultOptions} height={700} width={700} />
          {/* <Image src="/assets/images/Goat.jpg" alt="Goat" width={500} height={500}/> */}
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-20 px-40 pb-10 text-white mt-56 text-center">
        {sections.map((section, index) => (
          <div
            data-aos="fade-up"
            duration="2000"
            className="flex flex-1 rounded-xl p-12 flex-col shadow-xl bg-blue-500"
            // style={{ backgroundColor: "rgba(45,45,45)" }}
            key={index}
          >
            <p className="font-semibold text-3xl mb-10 text-yellow-400">
              {section.title}
            </p>
            <p className="text-xl">{section.description}</p>
          </div>
        ))}
      </div>
      <div className="footer-image-container mt-10">
        <img
          src="/assets/images/Goat.jpg"
          alt="Large Footer"
          layout="responsive"
          className="footer-image w-full h-[56rem] p-20 rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Landing;

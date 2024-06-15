"use client";
import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../public/assets/lottie/landing2.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Img } from "@chakra-ui/react";
import Image from 'next/image';
const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  // Data for vision, mission, and goal sections
  const sections = [
    {
      title: "Our Goal",
      description:
        "Our goal is to provide a platform where individuals can express their opinions freely and contribute to meaningful discussions that shape public opinion and foster understanding.",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to create a digital space that empowers people to share their perspectives, engage in constructive dialogue, and gain insights into diverse viewpoints.",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to build a vibrant community where every voice is heard, valued, and respected, and where collective wisdom leads to positive social change.",
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
    <div className="bg-black h-full w-auto overflow-y-hidden">
      <div className="w-full flex ">
        <div className="flex flex-1 text-white px-10 pt-48 flex-col">
        <Image src="/assets/images/Eagl.jpeg" alt="Eagl" width={100} height={20} />
                  <p className="text-xl text-center mt-10">
                  Beautiful Journey of creation of EAGL as a social enterprise began with founder directors Ph D research at IITB on “Hunger and Starvation Deaths among Tribes in the Melghat Region of Maharashtra”. Rigorous process of Ph D allowed him to comprehend poverty and issues related to social exclusion of the tribals and began initiative focused on livelihood creation with the objective of eradication of the poverty and making community and nation self-reliance in true sense.
          </p>
          <div className="flex gap-5 justify-center mt-10 items-center">
            <Link className="btn-grad font-bold text-2xl" href="/register">
              Sign Up
            </Link>
            <Link className="btn2-grad font-bold text-2xl" href="/feed">
              Share Your Opinion
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
    </div>
  );
};

export default Landing;

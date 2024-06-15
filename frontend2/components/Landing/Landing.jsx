"use client";
import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../public/assets/lottie/landing2.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
          <p className="text-5xl font-bold text-center text-clip">
            Know the <span className="text-orange-300">Public Opinion</span> or
            let know your opinion
          </p>
          <p className="text-xl text-center mt-10">
            We offer a sanctuary for those seeking to navigate the currents of
            thought and emotion, providing a digital haven where minds converge,
            ideas flourish, and connections ignite. Within this dynamic
            ecosystem, individuals are invited to share their insights, pose
            questions, and explore the myriad pathways that shape their
            existence. It&apos a place where the ever-changing winds of
            inspiration guide the collective journey, fostering a sense of
            community, collaboration, and growth. Here, in the fluidity of
            discourse and discovery, each participant finds their unique rhythm,
            charting a course that resonates with their deepest aspirations. As
            the currents of change ebb and flow, FlowSpace remains a steadfast
            beacon, illuminating the way forward and inviting all to embrace the
            transformative power of shared experience.
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

"use client";
import React, { useEffect, useState } from "react";
import PollCard from "./PollCard";
import { isEmpty } from "lodash";
import axios from "axios";
import { getCookie } from "cookies-next";
import { pollAddStore } from "@/store/isAddPoll";

const Polls = ({ polls }) => {
  // const [polls, setPolls] = useState([
  //   {
  //     _id: "663f4d7bfd0ebc999332cb2c",
  //     question: "How will you describe Aniket?",
  //     options: ["Great", "Greatest", "Goat"],
  //     votes: [1, 2, 1],
  //     __v: 0,
  //   },
  //   {
  //     _id: "6643a909e103f8074138b4b7",
  //     question: "hhhhh ?",
  //     options: ["njdkndi", "nfukvn", "cnuefinvief", "cbuihvbcyief"],
  //     votes: [10, 40, 5, 25],
  //     __v: 0,
  //   },
  //   {
  //     _id: "6644ba98f7d6e84900b99758",
  //     user: {
  //       _id: "66448b9f170e30b6e87ac450",
  //       email: "aadityajp04@gmail.com",
  //       username: "Aaditya ",
  //       mobileNo: 7066022137,
  //       password:
  //         "$2a$10$mFYIo7JiyMH.8ZjT.W8BbORfRNvR2ObEupPeIPdtaRSQrF8ukLbEy",
  //       __v: 0,
  //     },
  //     question: "hhhhh ?",
  //     options: ["njdkndi", "nfukvn", "cnuefinvief", "cbuihvbcyief"],
  //     votes: [0, 0, 0, 0],
  //     __v: 0,
  //   },
  //   {
  //     _id: "6644bb3518e542c0326f6494",
  //     user: {
  //       _id: "66448b9f170e30b6e87ac450",
  //       email: "aadityajp04@gmail.com",
  //       username: "Aaditya ",
  //       mobileNo: 7066022137,
  //       password:
  //         "$2a$10$mFYIo7JiyMH.8ZjT.W8BbORfRNvR2ObEupPeIPdtaRSQrF8ukLbEy",
  //       __v: 0,
  //     },
  //     question: "jjjjjj ?",
  //     options: ["njdkndi", "nfukvn", "cnuefinvief", "cbuihvbcyief"],
  //     votes: [0, 0, 0, 0],
  //     __v: 0,
  //   },
  //   {
  //     _id: "6644bf5cc4e28002d2f048be",
  //     user: {
  //       _id: "66448b9f170e30b6e87ac450",
  //       email: "aadityajp04@gmail.com",
  //       username: "Aaditya ",
  //       mobileNo: 7066022137,
  //       password:
  //         "$2a$10$mFYIo7JiyMH.8ZjT.W8BbORfRNvR2ObEupPeIPdtaRSQrF8ukLbEy",
  //       __v: 0,
  //     },
  //     question: "jjjjjj ?",
  //     options: ["njdkndi", "nfukvn", "cnuefinvief", "cbuihvbcyief"],
  //     votes: [0, 0, 0, 0],
  //     category: "Sports",
  //     __v: 0,
  //   },
  // ]);

  const setAllPolls = pollAddStore((state) => state.setAllPolls);
  const allPolls = pollAddStore((state) => state.allPolls);

  // const [polls, setPolls] = useState([]);

  useEffect(() => {
    console.log(polls);
  }, [polls]);

  return (
    <div className="grid gap-4 w-full place-items-start">
      {!isEmpty(polls) &&
        polls?.map((poll, index) => {
          return <PollCard poll={poll} key={index} />;
        })}
    </div>
  );
};

export default Polls;

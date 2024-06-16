"use client";
import { pollAddStore } from "@/store/isAddPoll";
import axios from "axios";
import classNames from "classnames";
import React, { useState } from "react";
import AvatarBg from "../../public/assets/images/profile.png";
import Image from "next/image";

const PollCard = ({ poll, showPercentage }) => {
  const isPollAdd = pollAddStore((state) => state.isPollAdd);

  const [pollAnswers, setPollAnswers] = useState(
    poll?.options?.map((option, index) => ({
      option,
      votes: poll.votes ? poll.votes[index] : 0,
      clicked: false,
    }))
  );

  const getTotalVotes = () => {
    return pollAnswers.reduce((total, answer) => total + answer.votes, 0);
  };

  const getPercentage = (votes) => {
    const totalVotes = getTotalVotes();
    if (totalVotes === 0) {
      return "0.00";
    }
    return ((votes / totalVotes) * 100).toFixed(2);
  };

  const handleVote = async (voteAnswer, index) => {
    // if (pollAnswers[index].clicked) {
    //   return; // If already clicked, return without taking any action
    // }
    try {
      const response = await axios.put(
        `http://localhost:3002/api/polls/${poll._id}/vote`,
        {
          optionIndex: pollAnswers.findIndex(
            (answer) => answer.option === voteAnswer
          ),
        }
      );
      if (response.status === 200) {
        const newPollAnswers = pollAnswers.map((answer) => {
          if (answer.option === voteAnswer) {
            answer.votes++;
          }
          answer.clicked = true;
          return answer;
        });
        setPollAnswers(newPollAnswers);
      }
    } catch (error) {
      console.error("Failed to record vote:", error);
    }
  };

  return (
    <div
      className={classNames(
        "flex flex-col gap-10 bg-black text-white rounded-lg shadow-md p-8 mb-10 transition-all duration-300",
        isPollAdd ? "w-[60%]" : !isPollAdd && "w-full"
      )}
    >
      <div className="flex gap-3 items-center">
        {poll?.user?.imageUrl ? (
          <img src={poll?.user?.imageUrl} alt="" width={20} height={20} />
        ) : (
          <Image
            src={AvatarBg}
            alt=""
            className="w-10 h-10 cursor-pointer rounded-full"
          ></Image>
        )}
        <p className="text-2xl font-semibold">{poll?.user?.username}</p>
      </div>
      <p className="font-semibold text-xl">{poll?.question}</p>
      <ul>
        {pollAnswers.map((answer, index) => {
          const percentage = getPercentage(answer.votes);
          return (
            <li key={index}>
              <button
                onClick={() => handleVote(answer.option, index)}
                className="w-full relative p-3 flex items-center mb-7 rounded-md text-xl font-semibold"
                style={{ backgroundColor: "rgb(55, 55, 55)", color: "white" }}
              >
                <span className="z-10">{answer.option}</span>
                {(answer.clicked || showPercentage) && (
                  <span className="z-10 ml-auto">{percentage}%</span>
                )}
                {(answer.clicked || showPercentage) && (
                  <span
                    className="absolute inset-0 vote-grad rounded-md"
                    style={{
                      width: `${percentage}%`,
                      zIndex: "0",
                      transition: "width 0.5s ease-in-out",
                    }}
                  ></span>
                )}
              </button>
            </li>
          );
        })}

        <p className="text-white text-lg">{getTotalVotes()} voted</p>
      </ul>
    </div>
  );
};

export default PollCard;

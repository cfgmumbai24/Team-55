"use client";
import React, { useMemo, useState } from "react";
import {
  Home,
  Dumbbell,
  LogOut,
  Cpu,
  BookOpenText,
  Store,
  BadgeDollarSign,
  User,
} from "lucide-react";
import { Button } from "@mui/material";
import { tabsStore } from "@/store/tabState";
import AddPost from "./AddPost";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { isLoggedInStore } from "@/store/isLoggedInUser";
import { pollAddStore } from "@/store/isAddPoll";

const Sidebar = ({ polls }) => {
  const [popup, setPopup] = useState(false);
  const setTab = tabsStore((state) => state.setTab);
  const tab = tabsStore((state) => state.tab);
  const router = useRouter();
  const setIsLoggedIn = isLoggedInStore((state) => state.setIsLoggedIn);
  const isLoggedIn = isLoggedInStore((state) => state.isLoggedIn);
  const setIsPollAdd = pollAddStore((state) => state.setIsPollAdd);
  const isPollAdd = pollAddStore((state) => state.isPollAdd);

  const tabs = useMemo(
    () => [
      {
        name: "Home",
        icon: Home,
      },
      {
        name: "Sports",
        icon: Dumbbell,
      },
      {
        name: "Technology",
        icon: Cpu,
      },
      {
        name: "Education",
        icon: BookOpenText,
      },
      {
        name: "Buisness",
        icon: Store,
      },
      {
        name: "Finance",
        icon: BadgeDollarSign,
      },
      {
        name: "Profile",
        icon: User,
      },
    ],
    []
  );

  const handleClick = (tabObj) => {
    setTab(tabObj.name);
    if (tabObj.name.toLowerCase() == "profile") router.push("/profile");
  };
  return (
    <div className="h-screen sticky top-0 flex bg-black flex-col">
      <p className="text-2xl text-white my-10 ml-10 font-bold">Flowspace</p>
      <div className="p-6 flex flex-col gap-2">
        {tabs.map((tabObj, i) =>
          i != tabs.length - 1 ? (
            <div
              key={i}
              className={`flex gap-3 p-4 items-center transition-all hover:bg-gray-800 cursor-pointer rounded-md text-white ${
                tab === tabObj.name ? "bg-gray-800" : "bg-black"
              }`}
              onClick={() => setTab(tabObj.name)}
            >
              <tabObj.icon size={25} />
              <p className="text-lg">{tabObj.name}</p>
            </div>
          ) : (
            isLoggedIn && (
              <div
                key={i}
                className={`flex gap-3 p-4 items-center transition-all hover:bg-gray-800 cursor-pointer rounded-md text-white ${
                  tab === tabObj.name ? "bg-gray-800" : "bg-black"
                }`}
                onClick={() => handleClick(tabObj)}
              >
                <tabObj.icon size={25} />
                <p className="text-lg">{tabObj.name}</p>
              </div>
            )
          )
        )}
      </div>
      {isLoggedIn && (
        <div className="flex flex-col gap-2 flex-1 p-6  justify-end">
          <Button
            className="btn-grad text-2xl"
            onClick={() => {
              setPopup(true);
              setIsPollAdd(!isPollAdd);
            }}
          >
            Post
          </Button>
          <div
            className="flex w-full gap-3 p-4 items-center transition-all hover:bg-gray-800 text-white cursor-pointer rounded-md"
            onClick={() => {
              deleteCookie("token");
              router.push("/login");
              setIsLoggedIn(false);
            }}
          >
            <LogOut size={25} />
            <p className="text-lg">Log out</p>
          </div>
        </div>
      )}
      {popup && <AddPost setPopup={setPopup} closeBtn polls={polls} />}
    </div>
  );
};

export default Sidebar;

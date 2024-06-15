"use client";
import React, { useMemo, useState } from "react";
import {
  Home,
  Dumbbell,
  Cpu,
  LogOut,
  User,
  Briefcase,
  Shield,
} from "lucide-react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { tabsStore } from "@/store/tabState";
import { isLoggedInStore } from "@/store/isLoggedInUser";
import { pollAddStore } from "@/store/isAddPoll";
import AddPost from "./AddPost";

const Sidebar = ({ polls }) => {
  const [popup, setPopup] = useState(false);
  const setTab = tabsStore((state) => state.setTab);
  const tab = tabsStore((state) => state.tab);
  const router = useRouter();
  const pathname = usePathname();
  const setIsLoggedIn = isLoggedInStore((state) => state.setIsLoggedIn);
  const isPollAdd = pollAddStore((state) => state.isPollAdd);

  const defaultTabs = useMemo(
    () => [
      { name: "Dashboard", path: "/dashboard", icon: Home },
      { name: "Beneficiaries", path: "/beneficiaries", icon: Dumbbell },
      { name: "Volunteer", path: "/volunteer", icon: Cpu },
    ],
    []
  );

  const volunteerTabs = useMemo(
    () => [
      { name: "Assignments", path: "/volunteer/profile", icon: User },
      { name: "Data Collection", path: "/volunteer/tasks", icon: Briefcase },
      { name: "Goat Report", path: "/volunteer/security", icon: Shield },
    ],
    []
  );

  const tabs = useMemo(() => {
    return pathname.startsWith("/volunteer") ? volunteerTabs : defaultTabs;
  }, [pathname, defaultTabs, volunteerTabs]);

  const handleClick = (tabObj) => {
    setTab(tabObj.name);
    // router.push(tabObj.path);
  };

  return (
    <div className="h-screen sticky top-0 flex bg-white flex-col">
      <p className="text-2xl text-black my-10 ml-10 font-bold">
        Eagl Livelihood
      </p>
      <div className="p-6 flex flex-col gap-2">
        {tabs.map((tabObj, i) => (
          <div
            key={i}
            className={`flex gap-3 p-4 text-black items-center transition-all hover:bg-gray-400 cursor-pointer rounded-md ${
              pathname === tabObj.path
                ? "bg-gray-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleClick(tabObj)}
          >
            <tabObj.icon size={25} />
            <p className="text-lg">{tabObj.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 flex-1 p-6 justify-end">
        <div
          className="flex w-full gap-3 p-4 items-center transition-all bg-gray-200 hover:bg-gray-400 text-black cursor-pointer rounded-md"
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
      {popup && <AddPost setPopup={setPopup} closeBtn polls={polls} />}
    </div>
  );
};

export default Sidebar;

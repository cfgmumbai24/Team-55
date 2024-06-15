"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Polls from "../poll/Polls";
import { tabsStore } from "@/store/tabState";
import { getCookie } from "cookies-next";
import axios from "axios";
import DataTable from "./Table";
import Dashboard from "./Dashboard";
import Beneficiary from "./Beneficiary";
import Volunteer from "./Volunteer";

const NavContainer = () => {
  const tab = tabsStore((state) => state.tab);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[1fr,350px]  px-14 py-8 bg-gray-200 h-[calc(100vh-90px)] gap-14 overflow-scroll">
        {tab === "Dashboard" ? (
          <Dashboard />
        ) : tab === "Beneficiary" ? (
          <Beneficiary />
        ) : (
          <Volunteer />
        )}
      </div>
    </div>
  );
};

export default NavContainer;

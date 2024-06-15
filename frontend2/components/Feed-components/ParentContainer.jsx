"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import NavContainer from "./NavContainer";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import axios from "axios";
import { pollAddStore } from "@/store/isAddPoll";
import DataTable from "./Table";

const ParentContainer = () => {

  return (
    <div className="grid grid-cols-[320px,1fr]">
      <Sidebar/>
      <NavContainer />
    </div>
  );
};

export default ParentContainer;

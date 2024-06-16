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
// import ListAssignment from "../volunteer_assignments/list_assignment";
// import ListAssignment from "../volunteer_assignments/List_assignment";
import Dataform from "../volunteer_data_collection/Data_collection";
import MyForm from "../volunteer_form/survey_form";
import ListAssignment from "../volunteer_assignments/list_assignment";

const NavContainer = () => {
  const tab = tabsStore((state) => state.tab);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[1fr,350px]  px-14 py-8 bg-gray-200 h-[calc(100vh-90px)] gap-14 overflow-scroll">
        {tab === "Dashboard" ? (
          <Dashboard />
        ) : tab === "Beneficiaries" ? (
          <Beneficiary />
        ) : tab === "Assignments" ? (
          <ListAssignment />
        ) : tab === "Survey Report" ? (
          <MyForm />
        ) : tab === "Data Collection" ? (
          <Dataform />
        ) : tab === "Volunteer" ? (
          <Volunteer />
        ) : null}
      </div>
    </div>
  );
};

export default NavContainer;

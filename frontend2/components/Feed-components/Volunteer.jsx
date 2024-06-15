"use client";

import { Table } from "@mui/material";
import React from "react";
import DataTable from "./Table";

const Volunteer = () => {
  return (
    <div>
      <p className="text-3xl font-semibold">
        Meet Your Organization's Volunteers
      </p>
      <div className="flex h-full py-20">
        <DataTable />
      </div>
    </div>
  );
};

export default Volunteer;

"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VolunterCards from "./VolunterCards";
import axios from "axios";
import { tabsStore } from "@/store/tabState";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "userName", headerName: "User Name", width: 130 },
  { field: "currentLocation", headerName: "Current Location", width: 160 },
  {
    field: "numBeneficiaries",
    headerName: "Beneficiaries",
    type: "number",
    width: 140,
  },
  {
    field: "numAssignments",
    headerName: "Assignments",
    type: "number",
    width: 140,
  },
];

export default function DataTable({ data }) {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const setTab = tabsStore((state) => state.setTab);

  // Transform data to match DataGrid row structure
  const rows = data?.map((volunteer) => ({
    id: volunteer._id,
    userName: volunteer.user?.username || "N/A",
    currentLocation: volunteer.currentlocation,
    numBeneficiaries: volunteer.beneficiary?.length,
    numAssignments: volunteer.assignment?.length,
  }));

  const handleRowClick = async (params) => {
    const volunteerId = params.row.id;
    setLoading(true);
    setError(null);
    setSelectedVolunteer(null);

    try {
      const response = await axios.get(
        `http://localhost:3002/api/volunteers/${volunteerId}`
      );
      const result = await response.data;

      if (result.success) {
        // setTab("");
        setSelectedVolunteer(result.volunteer);
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.log(err);
      setError("Failed to fetch volunteer data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: "1 0 50%", marginBottom: "20px" }}>
        <DataGrid
          className="max-h-[90vh] md:max-h-[80vh] px-6 py-4 bg-white"
          style={{ fontSize: "18px" }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          pageSizeOptions={[7, 14]}
          disableSelectionOnClick
          onRowClick={handleRowClick}
        />
      </div>
      <div style={{ flex: "1 0 50%" }}>
        {loading ? (
          <p>Loading...</p>
        ) : selectedVolunteer ? (
          <VolunterCards volunteerData={selectedVolunteer} />
        ) : (
          <p>Select a volunteer to see details</p>
        )}
      </div>
    </div>
  );
}

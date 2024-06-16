"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "userName", headerName: "First Name", width: 130 },
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
  const router = useRouter();
  // Transform data to match DataGrid row structure
  const rows = data?.map((volunteer, index) => ({
    id: volunteer._id,
    userName: volunteer.user?.username || "N/A", // Adjust field based on your User schema
    currentLocation: volunteer.currentlocation,
    numBeneficiaries: volunteer.beneficiary?.length,
    numAssignments: volunteer.assignment?.length,
  }));

  return (
    <div style={{ height: 500, width: "100%" }}>
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
        disableSelectionOnClick // Optionally disable row selection on click
        onRowClick={(params) => {
          const volunteerId = params.row.id;
          // Navigate to dynamic volunteer page
          router.push(`/singleVol/${volunteerId}`);
        }}
      />
    </div>
  );
}

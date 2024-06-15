"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
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
  // Transform data to match DataGrid row structure
  const rows = data?.map((volunteer, index) => ({
    id: volunteer._id,
    firstName: volunteer.user?.firstName || "N/A", // Adjust field based on your User schema
    lastName: volunteer.user?.lastName || "N/A", // Adjust field based on your User schema
    currentLocation: volunteer.currentloaction,
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
        isRowSelectable={false}
      />
    </div>
  );
}

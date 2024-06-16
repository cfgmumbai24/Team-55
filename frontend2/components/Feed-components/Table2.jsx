"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "name", headerName: "Name", width: 100 },
  {
    field: "village",
    headerName: "Village",
    width: 100,
  },
  {
    field: "Project Co-ordinator",
    headerName: "Project Co-ordinator",
    width: 220,
  },
  {
    field: "Date",
    headerName: "Date",
    width: 100,
  },
  {
    field: "Report",
    headerName: "Report",
    width: 100,
  }
];
const rows = []

export default function DataTable() {
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

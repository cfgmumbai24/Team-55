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
    field: "projectCoordinator",
    headerName: "Project Co-ordinator",
    width: 220,
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
  },
  {
    field: "report",
    headerName: "Report",
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    name: "John Doe",
    village: "Village A",
    projectCoordinator: "Alice Smith",
    date: "2024-01-15",
    report: "Completed",
  },
  {
    id: 2,
    name: "Jane Roe",
    village: "Village B",
    projectCoordinator: "Bob Johnson",
    date: "2024-01-18",
    report: "Pending",
  },
  {
    id: 3,
    name: "Richard Roe",
    village: "Village C",
    projectCoordinator: "Carol White",
    date: "2024-02-01",
    report: "Completed",
  },
  {
    id: 4,
    name: "Doe John",
    village: "Village D",
    projectCoordinator: "David Brown",
    date: "2024-02-10",
    report: "Pending",
  },
  {
    id: 5,
    name: "Marry Poppins",
    village: "Village E",
    projectCoordinator: "Eve Black",
    date: "2024-02-15",
    report: "In Progress",
  },
  {
    id: 6,
    name: "Tom Sawyer",
    village: "Village F",
    projectCoordinator: "Frank Green",
    date: "2024-03-01",
    report: "Completed",
  },
  {
    id: 7,
    name: "Huckleberry Finn",
    village: "Village G",
    projectCoordinator: "Grace Blue",
    date: "2024-03-10",
    report: "Pending",
  },
  {
    id: 8,
    name: "Sherlock Holmes",
    village: "Village H",
    projectCoordinator: "Harry Violet",
    date: "2024-03-20",
    report: "Completed",
  },
  {
    id: 9,
    name: "John Watson",
    village: "Village I",
    projectCoordinator: "Ivy Orange",
    date: "2024-04-01",
    report: "In Progress",
  },
  {
    id: 10,
    name: "Irene Adler",
    village: "Village J",
    projectCoordinator: "Jack Yellow",
    date: "2024-04-15",
    report: "Pending",
  },
  {
    id: 11,
    name: "Arthur Conan",
    village: "Village K",
    projectCoordinator: "Kathy Gray",
    date: "2024-05-01",
    report: "Completed",
  },
  {
    id: 12,
    name: "John Rambo",
    village: "Village L",
    projectCoordinator: "Leo Silver",
    date: "2024-05-15",
    report: "Pending",
  },
  {
    id: 13,
    name: "Rocky Balboa",
    village: "Village M",
    projectCoordinator: "Molly Gold",
    date: "2024-06-01",
    report: "In Progress",
  },
  {
    id: 14,
    name: "John McClane",
    village: "Village N",
    projectCoordinator: "Nathan Copper",
    date: "2024-06-10",
    report: "Completed",
  },
  {
    id: 15,
    name: "Ellen Ripley",
    village: "Village O",
    projectCoordinator: "Oscar Bronze",
    date: "2024-06-20",
    report: "Pending",
  },
];

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
        disableSelectionOnClick
      />
    </div>
  );
}

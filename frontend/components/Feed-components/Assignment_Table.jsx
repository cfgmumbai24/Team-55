import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

// Sample data based on the Assignment schema
const rows = [
  {
    id: 1,
    village: "Village A",
    username: "user1",
    completed: true,
    date: new Date("2024-06-16"),
    report: "Completed task 1",
    benefeciaryId: "60b57a50e2852632ecf6a976",
  },
  {
    id: 2,
    village: "Village B",
    username: "user2",
    completed: false,
    date: new Date("2024-06-15"),
    report: "Incomplete task 2",
    benefeciaryId: "60b57a50e2852632ecf6a977",
  },
  {
    id: 3,
    village: "Village C",
    username: "user3",
    completed: true,
    date: new Date("2024-06-14"),
    report: "Completed task 3",
    benefeciaryId: "60b57a50e2852632ecf6a978",
  },
  {
    id: 4,
    village: "Village D",
    username: "user4",
    completed: false,
    date: new Date("2024-06-13"),
    report: "Incomplete task 4",
    benefeciaryId: "60b57a50e2852632ecf6a979",
  },
  {
    id: 5,
    village: "Village E",
    username: "user5",
    completed: true,
    date: new Date("2024-06-12"),
    report: "Completed task 5",
    benefeciaryId: "60b57a50e2852632ecf6a980",
  },
  {
    id: 6,
    village: "Village F",
    username: "user6",
    completed: false,
    date: new Date("2024-06-11"),
    report: "Incomplete task 6",
    benefeciaryId: "60b57a50e2852632ecf6a981",
  },
  {
    id: 7,
    village: "Village G",
    username: "user7",
    completed: true,
    date: new Date("2024-06-10"),
    report: "Completed task 7",
    benefeciaryId: "60b57a50e2852632ecf6a982",
  },
  {
    id: 8,
    village: "Village H",
    username: "user8",
    completed: false,
    date: new Date("2024-06-09"),
    report: "Incomplete task 8",
    benefeciaryId: "60b57a50e2852632ecf6a983",
  },
  {
    id: 9,
    village: "Village I",
    username: "user9",
    completed: true,
    date: new Date("2024-06-08"),
    report: "Completed task 9",
    benefeciaryId: "60b57a50e2852632ecf6a984",
  },
  {
    id: 10,
    village: "Village J",
    username: "user10",
    completed: false,
    date: new Date("2024-06-07"),
    report: "Incomplete task 10",
    benefeciaryId: "60b57a50e2852632ecf6a985",
  },
  {
    id: 11,
    village: "Village K",
    username: "user11",
    completed: true,
    date: new Date("2024-06-06"),
    report: "Completed task 11",
    benefeciaryId: "60b57a50e2852632ecf6a986",
  },
  // Add more entries as needed
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "village", headerName: "Village", width: 130 },
  { field: "username", headerName: "Username", width: 130 },
  {
    field: "completed",
    headerName: "Completed",
    type: "boolean",
    width: 120,
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
  },
  {
    field: "report",
    headerName: "Report",
    width: 200,
  },
  {
    field: "benefeciaryId",
    headerName: "Beneficiary ID",
    width: 150,
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
        pageSize={7}
        pageSizeOptions={[7, 14]}
        isRowSelectable={false}
      />
    </div>
  );
}

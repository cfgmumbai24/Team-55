import React from "react";
import DataTable from "../Feed-components/Table";

const ListAssignment = () => {
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

export default ListAssignment;
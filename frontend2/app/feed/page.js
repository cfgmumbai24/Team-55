import ParentContainer from "@/components/Feed-components/ParentContainer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  // const token = cookies().get("token")?.value;
  // if (!token) redirect("/login");
  // isLoggedIn();
  return (
    <div>
      <ParentContainer />
    </div>
  );
};

export default page;

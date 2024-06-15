import React from "react";
import LeftBar from "@/components/Profile/LeftBar";
import RightBar from "@/components/Profile/RightBar";

const Profile = () => {
  //   isLoggedIn();
  return (
    <div
      className="w-screen  h-screen flex justify-center overflow-hidden"
      style={{ backgroundColor: "rgba(45,45,45)" }}
    >
      <LeftBar />
      <RightBar />
    </div>
  );
};

export default Profile;

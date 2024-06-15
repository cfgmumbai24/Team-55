"use client";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import { BiSolidCamera } from "react-icons/bi";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/navigation";
import PrimaryBtn from "../Button";
import AvatarBg from "../../public/assets/images/profile.png";
import { userDetailsStore } from "@/store/userStore";
import { isLoggedInStore } from "@/store/isLoggedInUser";

// import { userDetailsStore } from "@/store/userStore";
// import { useLoader } from "@/store/loaderStore";

const RegisterComponent = () => {
  const [type, setType] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const getUserDetails = userDetailsStore((state) => state.getUserDetails);
  const setIsLoggedIn = isLoggedInStore((state) => state.setIsLoggedIn);

  //   const setLoading = useLoader((state) => state.setLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const router = useRouter();

  const submitData = async (data) => {
    try {
      // setLoading(true);
      const response = await axios.post(
        "http://localhost:3002/api/signup",
        data
      );
      if (response?.data?.status) {
        setCookie("token", response?.data?.data?.token);
        reset();
        toast.success("Registration Successful!");
        router.push("/feed");
        getUserDetails();
        setIsLoggedIn(true);
        // setLoading(false);
      } else {
        console.log(response?.data?.message);
        toast.error(response?.data?.message);
        // setLoading(false);
      }
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  };

  const uploadImage = (file) => {
    if (file === undefined) {
      toast.error("Invalid Image!");
      return;
    }
    if (
      file.type == "image/png" ||
      file.type == "image/jpg" ||
      file.type == "image/jpeg"
    ) {
      setImageUrl(URL.createObjectURL(file));
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "study-nex");
      data.append("cloud_name", "dgu3ljso6");
      fetch("https://api.cloudinary.com/v1_1/dgu3ljso6/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          setValue("imageUrl", res?.secure_url?.toString());
        });
    } else {
      toast.error("Invalid Image!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:w-[35%] w-full lg:mx-0 mx-2 lg:px-10 px-4 py-10 pb-12 rounded-xl shadow-xl"
      style={{ backgroundColor: "rgba(45,45,45)" }}
    >
      <div className="flex justify-center flex-col items-center text-white">
        <p className="text-2xl font-semibold">
          Welcome to <span className="text-orange-300">PollVue</span> !
        </p>
        <p>
          Already a member?{" "}
          <a className="text-orange-300 font-semibold" href="/login">
            Log in now
          </a>
        </p>
      </div>
      <form
        action=""
        className="flex flex-col gap-6 justify-center items-center"
        onSubmit={handleSubmit(submitData)}
      >
        <label
          className="m-auto relative flex justify-center mt-4"
          htmlFor="image"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt=""
              className="w-24 h-24 cursor-pointer rounded-full object-cover bg-center"
            />
          ) : (
            <Image
              src={AvatarBg}
              alt=""
              className="w-24 h-24 cursor-pointer rounded-full"
            ></Image>
          )}
          <BiSolidCamera className="absolute bottom-0 right-2 text-white text-2xl bg-blue-500 rounded-full p-1 cursor-pointer" />
          <input
            id="image"
            type="file"
            accept="image/*"
            className="opacity-0 text-[0.4rem] absolute"
            onChange={(e) => uploadImage(e.target.files[0])}
          />
        </label>
        <div className="input-group w-3/4">
          <input
            id="email"
            type="text"
            required
            className="input"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Email is invalid",
              },
            })}
          />
          <label htmlFor="email" className="placeholder">
            Email
          </label>
          {errors.email && errors.email.type === "required" && (
            <span className="text-red-600 text-xs">Email is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="text-red-600 text-xs">{errors.email.message}</span>
          )}
        </div>
        <div className="input-group w-3/4">
          <input
            id="mobileNo"
            type="tel"
            required
            maxLength={10}
            className="input"
            {...register("mobileNo", {
              required: true,
              maxLength: 10,
              minLength: 10,
            })}
          />
          <label htmlFor="mobileNo" className="placeholder">
            Mobile number
          </label>
          {errors.mobile_number && errors.mobile_number.type === "required" && (
            <span className="text-red-600 text-xs">
              Mobile number is required
            </span>
          )}
          {(errors.mobile_number &&
            errors.mobile_number?.type === "maxLength") ||
            (errors.mobile_number?.type === "minLength" && (
              <span className="text-red-600 text-xs">
                Mobile number must be of 10 digits long
              </span>
            ))}
        </div>

        <div className="input-group w-3/4">
          <input
            id="username"
            type="text"
            required
            className="input"
            {...register("username", {
              required: true,
            })}
          />
          <label htmlFor="username" className="placeholder">
            Username
          </label>
          {errors.username && errors.username.type === "required" && (
            <span className="text-red-600 text-xs">Username is required</span>
          )}
        </div>
        <div className="input-group w-3/4">
          <input
            id="role"
            type="text"
            required
            className="input"
            {...register("role", {
              required: true,
            })}
          />
          <label htmlFor="role" className="placeholder">
            Role
          </label>
          {errors.username && errors.username.type === "required" && (
            <span className="text-red-600 text-xs">Role is required</span>
          )}
        </div>
        <div className="input-group w-3/4">
          <input
            id="password"
            type={type ? "text" : "password"}
            required
            className="input"
            {...register("password", { required: true })}
          />
          <label htmlFor="password" className="placeholder">
            Password
          </label>
          <p
            className="absolute right-[10px] top-[11px] cursor-pointer"
            onClick={() => setType(!type)}
          >
            {type ? (
              <AiFillEye className="text-[#808080] text-xl" />
            ) : (
              <AiFillEyeInvisible className="text-[#808080] text-xl" />
            )}
          </p>
          {errors.password && errors.password.type === "required" && (
            <span className="text-red-600 text-xs">Password is required</span>
          )}
        </div>
        <PrimaryBtn label="Sign Up" type="submit" />
      </form>
    </motion.div>
  );
};

export default RegisterComponent;

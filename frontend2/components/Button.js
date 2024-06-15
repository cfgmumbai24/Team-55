import classNames from "classnames";
import React from "react";

const PrimaryBtn = ({
  children,
  label,
  invert,
  box,
  link = "",
  className,
  clickEvent,
  type = "button",
}) => {
  return (
    <button type={type} onClick={clickEvent}>
      <a
        href={link ? link : null}
        className={classNames(
          className,
          "px-4 py-2 z-50 lg:cursor-pointer font-bold uppercase  flex flex-row justify-center items-center  shadow-xl",
          invert
            ? "bg-white text-violet-800 hover:bg-gray-100"
            : "gradient-transition text-white",
          !box && "rounded-full"
        )}
      >
        <p>{label}</p>
        {!invert && (
          <div className="flex gap-1 justify-center items-center">
            <span className="bg-white rounded-full inline-block ml-2 w-[6px] h-[6px]" />
            <span className="bg-white rounded-full  opacity-50 inline-block w-[6px] h-[6px]" />
            <span className="bg-white rounded-full  opacity-20 inline-block w-[6px] h-[6px]" />
          </div>
        )}
      </a>
    </button>
  );
};

export default PrimaryBtn;

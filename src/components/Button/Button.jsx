import React from "react";

export const Button = ({ text = "Button", showIconPlay = true, size, type, className }) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-2 px-8 py-3 overflow-hidden rounded-[100px] justify-center relative ${
        type === "outlined" ? "border border-solid" : ""
      } ${type === "outlined" ? "border-[#91949526]" : ""} ${size === "normal" ? "h-[50px]" : "h-14"} ${
        type === "outlined" ? "bg-neutral-50" : type === "text" ? "bg-white" : "bg-primary-500"
      } ${className}`}
    >
      <div
        className={`font-body-medium-semi-bold w-fit tracking-[var(--body-medium-semi-bold-letter-spacing)] [font-style:var(--body-medium-semi-bold-font-style)] text-[length:var(--body-medium-semi-bold-font-size)] font-[number:var(--body-medium-semi-bold-font-weight)] text-center whitespace-nowrap leading-[var(--body-medium-semi-bold-line-height)] relative ${
          type === "primary" ? "text-white" : "text-[#101619]"
        } ${type === "primary" ? "[text-shadow:0px_-0.5px_1px_#0000000d]" : ""}`}
      >
        {text}
      </div>
    </button>
  );
};

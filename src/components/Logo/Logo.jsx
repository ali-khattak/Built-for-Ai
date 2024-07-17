import React from "react";

export const Logo = ({
  companyName = "Logo",
  showLogo = true,
  state,
  className,
  textClassName,
  logo = "https://c.animaapp.com/WGyyZZBE/img/logo-2.svg",
}) => {
  return (
    <div className={`inline-flex items-center gap-2 relative ${className}`}>
      <img
        className="w-7 h-7 relative"
        alt="Logo"
        src={state === "white" ? logo : "https://c.animaapp.com/WGyyZZBE/img/logo-1.svg"}
      />
      <div
        className={`font-headline-headline-5-medium w-fit mt-[-1.00px] tracking-[var(--headline-headline-5-medium-letter-spacing)] text-[length:var(--headline-headline-5-medium-font-size)] [font-style:var(--headline-headline-5-medium-font-style)] font-[number:var(--headline-headline-5-medium-font-weight)] leading-[var(--headline-headline-5-medium-line-height)] whitespace-nowrap relative ${
          state === "white" ? "text-white" : "text-[#101619]"
        } ${textClassName}`}
      >
        {companyName}
      </div>
    </div>
  );
};

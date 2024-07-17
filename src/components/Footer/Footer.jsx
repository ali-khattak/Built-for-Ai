import React from "react";
import { Logo } from "../Logo";

export const Footer = ({ className, logoCompanyName = "Botify", logoTextClassName }) => {
  return (
    <div className={`flex flex-col w-[1440px] items-start gap-24 px-16 py-20 relative bg-primary-900 ${className}`}>
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-3 relative flex-1 grow">
          <Logo
            className="!flex-[0_0_auto]"
            companyName={logoCompanyName}
            logo="https://c.animaapp.com/WGyyZZBE/img/logo.svg"
            state="white"
            textClassName={logoTextClassName}
          />
          <div className="self-stretch font-[number:var(--body-large-semi-bold-font-weight)] text-white text-[length:var(--body-large-semi-bold-font-size)] leading-[var(--body-large-semi-bold-line-height)] relative font-body-large-semi-bold tracking-[var(--body-large-semi-bold-letter-spacing)] [font-style:var(--body-large-semi-bold-font-style)]">
            Your Virtual Chat Partner
          </div>
          <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-white text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
            hello@botify.com
          </div>
        </div>
        <div className="inline-flex items-start gap-[120px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] font-[number:var(--body-large-semi-bold-font-weight)] text-white text-[length:var(--body-large-semi-bold-font-size)] leading-[var(--body-large-semi-bold-line-height)] relative font-body-large-semi-bold tracking-[var(--body-large-semi-bold-letter-spacing)] [font-style:var(--body-large-semi-bold-font-style)]">
              Company
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              About Us
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Careers
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Blog
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Contact
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] font-[number:var(--body-large-semi-bold-font-weight)] text-white text-[length:var(--body-large-semi-bold-font-size)] leading-[var(--body-large-semi-bold-line-height)] relative font-body-large-semi-bold tracking-[var(--body-large-semi-bold-letter-spacing)] [font-style:var(--body-large-semi-bold-font-style)]">
              Products
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Chatbot
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Integration
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Live Chat
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] font-[number:var(--body-large-semi-bold-font-weight)] text-white text-[length:var(--body-large-semi-bold-font-size)] leading-[var(--body-large-semi-bold-line-height)] relative font-body-large-semi-bold tracking-[var(--body-large-semi-bold-letter-spacing)] [font-style:var(--body-large-semi-bold-font-style)]">
              Our Policies
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Privacy Policy
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Terms of Service
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Refund Policy
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Code of Conduct
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] font-[number:var(--body-large-semi-bold-font-weight)] text-white text-[length:var(--body-large-semi-bold-font-size)] leading-[var(--body-large-semi-bold-line-height)] relative font-body-large-semi-bold tracking-[var(--body-large-semi-bold-letter-spacing)] [font-style:var(--body-large-semi-bold-font-style)]">
              Social Media
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Instagram
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Facebook
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Linkedin
            </div>
            <div className="self-stretch font-[number:var(--body-large-regular-font-weight)] text-[#f8f9f9bf] text-[length:var(--body-large-regular-font-size)] leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
              Youtube
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-1 mt-[-1.00px] font-[number:var(--body-large-regular-font-weight)] text-neutral-50 text-[length:var(--body-large-regular-font-size)] text-center leading-[var(--body-large-regular-line-height)] relative font-body-large-regular tracking-[var(--body-large-regular-letter-spacing)] [font-style:var(--body-large-regular-font-style)]">
          © Copyright Botify 2024
        </div>
      </div>
    </div>
  );
};

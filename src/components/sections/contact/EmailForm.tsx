"use client";

import React from "react";
import { Mail, Send } from "lucide-react";

const EmailForm = () => {
  return (
    <form className="mt-5 w-full max-w-[832px]">
      <div
        className="
          flex w-full items-center
          rounded-full
          border border-[#E4E7EC]
          bg-transparent
          p-1.5
          lg:p-2.5
          transition-colors
          focus-within:border-c1
          max-md:p-1
        "
      >
        {/* Email Icon */}
        <div className="flex bg-[#FFEAD5] rounded-full  p-2 lg:p-3 shrink-0 items-center justify-center lg:ml-0 ml-2 mr-2 max-md:ml-1">
          <Mail
            className="size-5.5 lg:size-6 text-c1 max-md:size-4"
            strokeWidth={1.5}
          />
        </div>

        {/* Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="
            min-w-0
            flex-1
            bg-transparent
            px-2
            py-3
            lg:text-[17px]
            text-sm
            text-c2
            outline-none
            placeholder:text-c2/40
            max-md:py-2.5
            max-md:text-xs
          "
        />

        {/* Send Button */}
        <button
          type="submit"
          aria-label="Send email"
          className="
            flex shrink-0 items-center gap-2
            rounded-full
            bg-c1
            px-6
            lg:py-4
            py-3
            text-sm
            font-medium
            text-c5
            transition-all
            duration-300
            hover:scale-[0.98]
            hover:opacity-90
            max-md:gap-1.5
            max-md:px-3
            max-md:py-2
            max-md:text-xs
            max-md:mr-0.5
          "
        >
          Send
          <Send
            className="size-4 max-md:size-3.5"
            strokeWidth={1.8}
          />
        </button>
      </div>
    </form>
  );
};

export default EmailForm;


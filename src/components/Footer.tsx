import * as React from "react";
import { useState, useLayoutEffect } from "react";
import { IoMdPersonAdd } from "react-icons/io";

const Footer: React.FC<{ className: string }> = ({ className }) => {
  const [year, setYear] = useState<null | number>(null);

  useLayoutEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className={`bg-gradient-to-b from-[#fff6ef] to-[#fff] ${className}`}>
      <div className="container flex justify-center flex-col ">
        <div className="font-crete text-[38px] text-center">
          Get latest posts delivered right to your inbox
        </div>
        <div className="mt-10 mb-20 flex mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-transparent h-[50px] bg-white rounded-md border-[#ddd] border-solid border-2 p-4 w-[320px]"
          />
          <button
            type="submit"
            className="flex items-center gap-x-2 border-[#ddd] bg-white border-solid border-2 ml-4 px-4 text-[#222] rounded-mds"
          >
            <IoMdPersonAdd /> Join Today
          </button>
        </div>
        <div className="text-center mb-10">
          ©{year} Wing Tung Shek. All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Button from "@components/Button";
import Lucide from "@components/Lucide";
import React from "react";

function MyHeader({ logoBrand }) {
  return (
    <header className="w-full fixed top-0 left-0 bg-white/10 shadow-lg z-[1]">
      <div className="w-full max-w-screen-lg mx-auto flex gap-10 py-4 px-2">
        <img src={logoBrand} alt="logo brand" className="w-60 object-contain" />
        <div className="flex-1 hidden md:flex flex-shrink justify-end">
          <div className="flex flex-shrink justify-center items-end gap-4">
            {["1", "2", "3"].map((_, idx) => (
              <p key={idx} className="px-4 pb-1 font-bold border-primary">
                Menu {idx}
              </p>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex ml-auto">
          <Button className="w-32">Buy Ticket</Button>
        </div>
        <button className="active:scale-90 transition-all duration-200">
          <Lucide icon="Menu" className="w-10 h-10" />
        </button>
      </div>
    </header>
  );
}

export default MyHeader;

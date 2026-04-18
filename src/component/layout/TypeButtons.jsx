import React, { useState } from "react";

const TypeButtons = ({ setType }) => {
  const [isActive, setActive] = useState("mikrotik");

  const handleSetType = (types) => {
    setType(types);
    setActive(types)
  };

  return (
    <div className="flex w-full gap-3 font-semibold">
      <button
        className={`py-3 rounded-lg w-full transition-all duration-300 ${isActive == "mikrotik" ? "bg-primary/70 scale-95" : "bg-primary"}`}
        onClick={() => handleSetType("mikrotik")}
      >
        Mikrotik
      </button>
      <button
        className={`py-3 rounded-lg w-full transition-all duration-300 ${isActive == "website" ? "bg-primary/70 scale-95" : "bg-primary"}`}
        onClick={() => handleSetType("website")}
      >
        Website
      </button>
      <button
        className={`py-3 rounded-lg w-full transition-all duration-300 ${isActive == "design" ? "bg-primary/70 scale-95" : "bg-primary"}`}
        onClick={() => handleSetType("design")}
      >
        Design
      </button>
    </div>
  );
};

export default TypeButtons;

import React, { useState } from "react";
import Add from "../single/svg/Add";
import Stat from "../single/svg/Stat";

const Navbar = ({ setStep }) => {
  const [active, setActive] = useState("count");
  return (
    <nav className="py-3 md:mx-12 sticky bottom-4 mx-4 bg-slate-500/50 backdrop-blur-sm rounded-full m-0">
      <ul className="flex justify-around">
        <li>
          <a
            className={`hover:cursor-pointer`}
            onClick={(e) => {
                setStep(2)
                setActive("count")
            }}
          >
            <Add/>
          </a>
        </li>
        <li>
          <a
            className={`hover:cursor-pointer ${active != "count" ? "text-primary" : "text-tertiary"}`}
            onClick={(e) => {
                setStep(3)
                setActive("result")
            }}
          >
            <Stat/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

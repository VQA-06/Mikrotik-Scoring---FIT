import React from "react";

const TextBox = ({value, change}) => {
  return (
    <textarea
      name="peserta"
      id="peserta"
      value={value}
      onChange={e => change(e.target.value)}
      className="text-neutral p-3 bg-slate-800 rounded-lg min-h-52 md:min-h-96 inset-shadow-sm inset-shadow-slate-950 focus:border-none focus:outline-none mb-4 text-md"
      placeholder="Contoh: Budi, Bambang, ..."
    ></textarea>
  );
};

export default TextBox;

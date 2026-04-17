import * as React from "react";
const Stat = (props) => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="#bac8cc"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 18.5V4H4V20H20V18.5H5.5Z"
      fill="#bac8c"
    />
    <path d="M10.5 17V8.00131H12V17H10.5Z" fill="#bac8c" />
    <path d="M7 17V12H8.5V17H7Z" fill="#bac8c" />
    <path d="M17.5 17V10H19V17H17.5Z" fill="#bac8c" />
    <path d="M14 17V5H15.5V17H14Z" fill="#bac8c" />
  </svg>
);
export default Stat;

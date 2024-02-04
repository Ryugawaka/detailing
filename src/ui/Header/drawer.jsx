import React from "react";

const Drawer = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      fill='#FFFFFF'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 60 50'
      width='50px'
      height='50px'
    >
      <path d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z' />
    </svg>
  );
};
export default Drawer;

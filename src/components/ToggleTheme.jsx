"use client";

import React from "react";
const handleColorMode = () => {
  document.body.classList.toggle("dark-mode");
  const state = document.body.classList.contains("dark-mode");
  const currentClass = document.querySelector(".navbar");
  if (currentClass && state) {
    currentClass.style.background = "#0c0b0be6";
  } else {
    currentClass.style.background = "#fffffff5";
  }
};

const ToggleTheme = () => {
  return (
    <div
      className="color-mode d-lg-flex justify-content-center align-items-center"
      onClick={handleColorMode}
    >
      <i className="color-mode-icon"></i> Color mode
    </div>
  );
};

export default ToggleTheme;

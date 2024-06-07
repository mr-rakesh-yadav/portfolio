"use client";
import React from "react";
import myCV from "@/images/myCV.pdf";

const Resume = () => {
  return (
    <div>
      <iframe src={myCV} width="800" height="600"></iframe>
    </div>
  );
};

export default Resume;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
export default function Modal({ children}) {
  return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        {children}
      </div>
  );
}

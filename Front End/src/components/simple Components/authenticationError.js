import React from "react";

export default function AuthenticationError({ children }) {
  return (
    <span>
      <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
      {children}
    </span>
  );
}

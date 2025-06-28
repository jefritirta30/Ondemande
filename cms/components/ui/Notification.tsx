"use client";

import React, { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Notification = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error";
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Notification will disappear automatically after animation
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-4 right-4 px-6 py-3 rounded-md shadow-lg text-white font-medium animate-slideIn ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex items-center">
        {type === "success" ? (
          <FaCheckCircle className="mr-2" />
        ) : (
          <FaExclamationCircle className="mr-2" />
        )}
        {message}
      </div>
    </div>
  );
};

export default Notification;

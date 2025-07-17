"use client";

import { useState } from "react";

export default function PasswordProtect({ onPasswordVerified }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/verify-photo-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        onPasswordVerified();
      } else {
        let errorMessage = "Invalid password.";
        try {
          const data = await response.json();
          if (data && data.message) {
            errorMessage = data.message;
          }
        } catch (e) {
          // Ignore parsing error, use default message
        }
        setError(errorMessage);
        console.error("Password verification failed:", response.status, response.statusText);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Error during password verification fetch:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h2 className="text-2xl font-semibold mb-4 text-white">Enter Password</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="block w-full max-w-xs px-3 py-2 mb-4 text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black active:bg-blue-700 transition-colors duration-200"
      >
        Submit
      </button>
      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
    </div>
  );
}

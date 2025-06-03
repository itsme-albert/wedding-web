"use client";

import { useState } from "react";

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit RSVP");
      }

      setStatus("success");
      setMessage("Thank you for your RSVP!");
      setFormData({ name: "", email: "", attendance: "" });
    } catch (error) {
      setStatus("error");
      setMessage("There was an error submitting your RSVP. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label
          htmlFor="attendance"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Will you attend?
        </label>
        <select
          id="attendance"
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          required
        >
          <option value="">Please select</option>
          <option value="yes">Yes, I will attend</option>
          <option value="no">No, I cannot attend</option>
        </select>
      </div>
      {message && (
        <div
          className={`p-4 rounded-md ${
            status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Submit RSVP"}
      </button>
    </form>
  );
}

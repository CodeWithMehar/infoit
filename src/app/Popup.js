"use client";
import React, { useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router"; // This will now be removed
// import Link from "next/link"; // Import Link for redirection
import Confetti from "react-confetti";

const ServiceBooking = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const [status, setStatus] = useState("");
  const [showConfetti, setShowConfetti] = useState(false); // State to control confetti

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // Clear any previous status message

    try {
      // Send data to API
      const response = await axios.post("http://localhost:8000/popup", formData);

      // Display success message
      setStatus("Thank you! Your details have been submitted.");

      // Optionally, reset form fields
      setFormData({ name: "", email: "", tel: "" });

      // Close the modal after successful form submission
      closeModal();

      // Trigger confetti effect
      setShowConfetti(true);

      // Redirect to /contact-us after a short delay (using Link)
      setTimeout(() => {
        // Use Link to navigate to /contact-us after submission
        window.location.href = "/contact-us"; // This triggers the navigation
      }, 2000); // Redirects after 2 seconds
    } catch (error) {
      // Handle errors and show error message
      if (error.response && error.response.status === 400) {
        const errors = error.response.data.errors;
        setStatus(`Error: ${errors.map((err) => err.msg).join(", ")}`);
      } else {
        setStatus("An error occurred. Please try again later.");
      }
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="relative">
      {/* Button to open the modal */}
      <div className="flex justify-center">
  <button
    onClick={openModal}
    className="w-[20%] bg-[#7d963d] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#404e1e] transition duration-200 font-calibri italic mb-10"
  >
    Book Service
  </button>
</div>


      {/* Confetti Effect */}
      {showConfetti && <Confetti />}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="flex items-center justify-center bg-[#dbefa9] w-full sm:w-[80%] md:w-[60%] lg:w-[40%] p-4">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-lg w-full"
            >
              <h2 className="text-2xl font-bold text-center mb-6 font-calibri italic">
                ENTER YOUR DETAILS
              </h2>

              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2 font-calibri italic"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7d963d]"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2 font-calibri italic"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7d963d]"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label
                  htmlFor="tel"
                  className="block text-gray-700 font-semibold mb-2 font-calibri italic"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Your Phone Number"
                  value={formData.tel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7d963d]"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#7d963d] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#404e1e] transition duration-200 font-calibri italic"
              >
                Submit
              </button>

              {/* Status Message */}
              {status && (
                <div className="mt-4 text-center text-lg font-semibold text-[#7d963d]">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBooking;

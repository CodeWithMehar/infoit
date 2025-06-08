import React, { useState } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use'; // Import useWindowSize hook for dynamic window size

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
  });
  const [status, setStatus] = useState('');
  const [showConfetti, setShowConfetti] = useState(false); // State to control confetti display

  const { width, height } = useWindowSize(); // Get window dimensions for confetti effect

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side check for phone number format (optional)
    if (!/^\+?[0-9\s()-]*$/.test(formData.tel)) {
      setStatus('Please enter a valid phone number.');
      return;
    }

    try {
      const response = await axios.post('http://51.20.147.28:8000/contact', formData);
      setStatus('Thank You! We will contact you soon');
      setFormData({ name: '', email: '', tel: '' }); // Reset form fields
      setShowConfetti(true); // Show confetti after successful form submission

      // Hide confetti after 5 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = error.response.data.errors;
        const messages = errors.map((err) => err.msg).join(", ");
        setStatus(`Error: ${messages}`);
      } else {
        setStatus('Error sending message. Please try again.');
      }
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-5 max-w-lg relative">
      {showConfetti && <Confetti width={width} height={height} />} {/* Display confetti if showConfetti is true */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-xl font-bold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#7d963d] focus:border-[#7d963d] text-gray-900"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-xl font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#7d963d] focus:border-[#7d963d] text-gray-900"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label htmlFor="tel" className="block text-xl font-bold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="With Country Code"
            value={formData.tel}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#7d963d] focus:border-[#7d963d] text-gray-900"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-[#7d963d] text-white rounded-lg font-semibold shadow-md hover:bg-[#6c8733] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7d963d] transition duration-300 font-gabriola text-[20px]"
          >
            Send Message
          </button>
        </div>

        {/* Display status message */}
        {status && <p className="text-center mt-4 text-lg">{status}</p>}
      </form>
    </div>
  );
}

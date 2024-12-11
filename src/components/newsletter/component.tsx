import React from "react";

export const Newsletter: React.FC = () => {
  return (
    <section
      id="subscribe"
      className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
    >
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-4">Stay Updated with</h2>
        <p className="mb-8 text-lg">
          Subscribe to our newsletter and be the first to know about new
          artworks, exhibitions, and exclusive offers.
        </p>
        <form
          action="#"
          method="POST"
          className="flex flex-col sm:flex-row items-center justify-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto px-4 py-3 mb-4 sm:mb-0 sm:mr-4 rounded-md text-gray-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

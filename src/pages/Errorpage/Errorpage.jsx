import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Oops! Page not found
        </h2>

        <p className="text-gray-500 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

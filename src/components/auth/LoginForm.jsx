import React from "react";
import { Link } from "react-router-dom";

function SignInForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-4xl font-bold text-purple-700 text-center mb-2">
          Sign In
        </h1>
        <p className="text-purple-600 text-center mb-8">
          Enter Your Account
        </p>

        {/* Input Email */}
        <div className="mb-4">
          <div className="bg-purple-100 rounded-xl p-4 flex items-center">
            <span className="text-purple-700 mr-3 text-xl">📧</span>
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-transparent outline-none flex-1 text-purple-700 placeholder-purple-400"
            />
          </div>
        </div>

        {/* Input Password */}
        <div className="mb-6">
          <div className="bg-purple-100 rounded-xl p-4 flex items-center">
            <span className="text-purple-700 mr-3 text-xl">🔑</span>
            <input
              type="password"
              placeholder="Enter your Password"
              className="bg-transparent outline-none flex-1 text-purple-700 placeholder-purple-400"
            />
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-4 rounded-xl mb-4 transition-colors">
          Sign In
        </button>

        {/* Divider */}
        <div className="text-center text-gray-600 mb-4">Or</div>

        {/* Google Button */}
        <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-4 rounded-xl flex items-center justify-center mb-6 transition-colors">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
            className="mr-2"
          />
          Sign In with Google
        </button>

        {/* Sign In Link */}
              <p className="text-center text-sm">
        <span className="text-blue-600 font-medium">Don’t have an account?</span>
        <Link to="/registerform" className="text-blue-700 font-semibold underline">
          Sign Up
        </Link>
      </p>
      </div>
    </div>
  );
}

export default SignInForm;
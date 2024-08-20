import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://images.ctfassets.net/c5bd0wqjc7v0/6TEOvIYU6qtgLm87Y4mK5s/4171df02eabc835c518884c2b3476380/hero_3x_B.png?fm=webp&q=100&w=1180"
          alt="Placeholder mage"
          className="object-cover w-[85%] h-[85%] m-auto p-2"
          loading
        />
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-3xl font-semibold mb-4">Sign up</h1>
        <form action="#" method="POST">
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Sign up
          </button>
        </form>
        {/* Sign up  Link */}
        <div className="mt-6 text-blue-500 text-center">
          <Link to={"/login"}>Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

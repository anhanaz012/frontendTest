import React, { useState } from "react";
import backgroundImage from "../assets/images/background.png";
import logo from "../assets/images/logo.png";

const SignUp = () => {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [selectedProfile, setSelectedProfile] = useState("Choose One");

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full"></div>
      <div className="text-black  bg-white h-auto z-10  rounded-lg px-7 py-4 md:w-1/3 sm:w-full">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="mx-auto mb-1 w-16 md:w-24 lg:w-32 xl:w-40 sm:w-10 "
        />
        <p className="font-bold text-black text-center font-sans text-lg mb-4">
          Get Register
        </p>
        {/* Email Address */}
        <div className="mb-4">
          <label className="text-black font-sans text-sm font-semibold ">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Person@email.com"
            className="w-full p-2 rounded text-black outline-none text-sm bg-baby-pink border-2 border-borderPink "
          />
        </div>

        {/* Mobile Number */}
        <label className="text-black font-sans text-sm font-semibold ">
          Phone number
        </label>
        <div className="flex items-center mb-4 bg-baby-pink border-2 border-borderPink">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-1/5 p-2 rounded border-none  bg-baby-pink  outline-none text-black text-sm mr-2"
          >
            <option value="pk" className="text-black  bg-baby-pink">
              +92{" "}
            </option>
            <option value="in">+91 </option>
            <option value="uk">+44 </option>
            <option value="au">+61</option>
          </select>
          <div className="h-5 w-0.5 bg-borderPink"></div>
          <input
            type="tel"
            placeholder="36676689789"
            className="w-2/3 p-2 rounded border-none   bg-baby-pink outline-none text-sm"
          />
        </div>

        {/* Profile Created For Dropdown */}
        <div className="mb-4">
          <label className="text-black font-sans text-sm font-semibold ">
            Profile Created For
          </label>
          <select
            value={selectedProfile}
            onChange={(e) => setSelectedProfile(e.target.value)}
            className="w-full p-2 rounded text-black font-sans text-sm font-semibold  bg-baby-pink outline-none border-2 border-borderPink"
          >
            <option value="Choose One">Choose one</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-black font-sans text-sm font-semibold ">
            Password
          </label>
          <input
            type="password"
            placeholder="12345678"
            className="w-full p-2 rounded outline-none text-sm  bg-baby-pink border-2 border-borderPink"
          />
        </div>

        {/* Register Button */}
        <button className="bg-btnBlue text-white w-full py-2 px-6 rounded focus:outline-nonetext-sm">
          Register Now
        </button>

        <p className="font-sans text-sm font-semibold pt-2">
          By Clicking on <span className="text-orange">Register</span> you
          confirm that you accept our{" "}
          <span className="text-orange">Terms & Conditions</span> and{" "}
          <span className="text-orange">Privacy & Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;


import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import doctor from "../utils/img/header-bg.png";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otps, setOtps] = useState(false);
  const [otp, setOtp] = useState("");
  const [clicked, setClicked] = useState(true);
  const [dis,setDis]=useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const setQueryParams = (params) => {
    const url = new URL(window.location);
    Object.keys(params).forEach((key) =>
      url.searchParams.set(key, params[key])
    );
    window.history.pushState({}, "", url);
  };

  const handleSubmit = async (event) => {
    const params = {
      email,
      otp,
    };
    setQueryParams(params);
    event.preventDefault();
    if (firstName === "") {
      toast.error("Enter first name");
    } else if (email === "") {
      toast.error("Please enter email id");
    } else if (password === "") {
      toast.error("Please enter password");
    } else if (confirmPassword === "") {
      toast.error("Please enter confirm password");
    } else if (password !== confirmPassword) {
      toast.error("Password and confirm password are not matching");
    } else {
      try {
        const response = await fetch(
          `http://localhost:4000/verify-account?email=${email}&otp=${otp}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const json = await response.json();
        const { token, message, status } = json || "";

        if (status === 200) {
          console.log(token);
          localStorage.setItem("logintoken", token);
          navigate("/");
        } else {
          console.error("Error:", message);
          toast.error(message);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  const signUp = async () => {
    setDis(1);
    try {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      if (responseJson.status !== 200) {
        toast.error(responseJson.message);
        setDis(0);

      } else {
        setClicked(false);
        setOtps(true);
      }
      console.log(responseJson);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "An error occurred during signup");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="font-bold text-3xl text-[#046585] text-center">Signup</h2>
          <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              className="p-2 rounded-xl border w-full text-black"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              className="p-2 rounded-xl border w-full text-black"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Id"
              className="p-2 rounded-xl border w-full text-black"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="p-2 rounded-xl border w-full text-black"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Password"
                className="p-2 rounded-xl border w-full text-black"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>
            {otps && (
              <input
                type="text"
                id="otp"
                name="otp"
                placeholder="Enter OTP"
                className="p-2 rounded-xl border w-full text-black"
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            )}
            <div className="flex justify-center mt-4">
              {clicked && (
                <button
                  type="button"
                  className="bg-[#046585] w-[6vw] rounded-xl text-white py-2 hover:bg-[#034b60] duration-300"
                  onClick={signUp}
                  disabled={dis}
                >
                  Signup
                </button>
              )}
              {!clicked && (
                <button
                  type="button"
                  className="bg-[#046585] w-[6vw] rounded-xl text-white py-2 hover:bg-[#034b60] duration-300"
                  onClick={handleSubmit}
                >
                  Submit OTP
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2 h-full">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src={doctor}
            alt="Signup"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;

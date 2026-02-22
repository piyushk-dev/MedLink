import React from "react";
import doctor from "../utils/img/header-bg.png";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const register = () => {
    navigate("/signup");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Please enter email id");
    } else if (password === "") {
      toast.error("Please enter password");
    } else {
      try {
        const response = await fetch("http://localhost:4000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem("logintoken", token);
          navigate("/");
        } else {
          const data = await response.json();
          console.error(data.message);
          toast.error("Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex rounded-2xl shadow-lg max-w-3xl p-5 items-center bg-white">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="font-bold text-3xl text-[#046585] text-center">Login</h2>
          <p className="text-sm mt-4 text-[#046585] text-center">
            If you are already a member, easily log in
          </p>
          <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
            <input
              className="p-2 rounded-xl border w-full text-black"
              type="email"
              value={email}
              onChange={handleEmailChange}
              name="email"
              placeholder="Email"
              required
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full text-black"
                type={visible ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                name="password"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>
            <button className="bg-[#046585] rounded-xl text-white py-2 hover:bg-[#034b60] duration-300">
              Login
            </button>
          </form>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <div className="mt-3 flex justify-between items-center text-[#046585] text-sm">
            <p>Don't have an account?</p>
            <button
              onClick={register}
              className="py-2 px-5 bg-white border rounded-xl hover:bg-gray-100 duration-300"
            >
              Register
            </button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 h-full">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src={doctor}
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

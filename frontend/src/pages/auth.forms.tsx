"use client";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";

interface AuthFormsProps {
  mode: "login" | "signup";
  onToggleMode: () => void;
}

export function AuthForms({ mode, onToggleMode }: AuthFormsProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    //  Password match check
    if (mode === "signup" && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match ");
      setIsLoading(false);
      return;
    }

    try {
      if (mode === "login") {
        const res = await axios.post("http://localhost:5000/api/company/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("userName", res.data.user.name);

      } else {
        await axios.post("http://localhost:5000/api/company/signup", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        //  Store name only during signup
        localStorage.setItem("userName", formData.name);
      }

      alert("Success ");
      navigate("/dashboard");

    } catch (error: any) {
      console.log("FULL ERROR:", error);
      console.log("BACKEND RESPONSE:", error?.response);
      console.log("DATA:", error?.response?.data);

      alert(JSON.stringify(error?.response?.data));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Form Container */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 space-y-6">
        
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-white">
            {mode === "login" ? "Welcome Back" : "Join AllyGo"}
          </h1>
          <p className="text-zinc-400">
            {mode === "login"
              ? "Sign in to your account"
              : "Create your account"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name Field */}
          {mode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white"
              required
            />
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Confirm Password */}
          {mode === "signup" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white"
              required
            />
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-500 p-3 rounded text-white font-semibold flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading...
              </>
            ) : (
              <>
                {mode === "login" ? "Sign In" : "Sign Up"}
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center">
          <p className="text-zinc-400">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <button
              onClick={onToggleMode}
              className="text-orange-500 ml-1"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
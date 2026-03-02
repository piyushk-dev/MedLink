import React, { createContext, useContext, useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { API_BASE } from "./mock-data";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("logintoken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          return { id: decoded.id, name: decoded.sub, email: decoded.sub, token };
        }
        localStorage.removeItem("logintoken");
      } catch {
        localStorage.removeItem("logintoken");
      }
    }
    return null;
  });

  const login = useCallback(async (email, password) => {
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.token) {
        const decoded = jwtDecode(data.token);
        const u = { id: decoded.id, name: decoded.sub, email: decoded.sub, token: data.token };
        setUser(u);
        localStorage.setItem("logintoken", data.token);
        return { success: true, message: "Login successful!" };
      }
      return { success: false, message: data.message || "Invalid credentials" };
    } catch {
      return { success: false, message: "Network error. Please try again." };
    }
  }, []);

  const signup = useCallback(async (name, email, password) => {
    try {
      const parts = name.trim().split(/\s+/);
      const firstName = parts[0] || "";
      const lastName = parts.slice(1).join(" ") || "";
      const res = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      const data = await res.json();
      if (data.status === 200) {
        return { success: true, message: data.message || "OTP sent to your email!" };
      }
      return { success: false, message: data.message || "Registration failed" };
    } catch {
      return { success: false, message: "Network error" };
    }
  }, []);

  const verifyOtp = useCallback(async (email, otp) => {
    try {
      const res = await fetch(
        `${API_BASE}/verify-account?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`,
        { method: "PUT", headers: { "Content-Type": "application/json" } }
      );
      const data = await res.json();
      if (data.token) {
        const decoded = jwtDecode(data.token);
        const u = { id: decoded.id, name: decoded.sub, email: decoded.sub, token: data.token };
        setUser(u);
        localStorage.setItem("logintoken", data.token);
        return { success: true, message: "Account verified!" };
      }
      return { success: false, message: data.message || "Invalid OTP" };
    } catch {
      return { success: false, message: "Network error" };
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("logintoken");
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, verifyOtp, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

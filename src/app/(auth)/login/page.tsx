"use client";

import { ListUser } from "@/model/user";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type responseSuccess = {
  status: string;
  message: string;
  data: responseUser;
};

type responseUser = {
  user: ListUser;
}

const LoginPages = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { push } = useRouter();

  console.log(`${email} ${password}`);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://api-jukang.vercel.app/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data: responseSuccess = await response.json();
      const role = data.data.user.role;

      console.log(data);

      const DataUser = data.data.user;

      if (data.status === "success") {
        localStorage.setItem("nama", DataUser.namalengkap);
        localStorage.setItem("email", DataUser.email);
        localStorage.setItem("user_id", DataUser.user_id);
        localStorage.setItem("role", DataUser.role);

        if (role == "admin") {
          push("/dashboard");
        } else {
          push("/");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem 2.5rem",
          borderRadius: "1rem",
          color: "#333",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          minWidth: "320px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#764ba2",
          }}
        >
          Login
        </h2>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ fontWeight: 500, color: "#333" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ddd",
              fontSize: "1rem",
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
            placeholder="Enter your email"
            autoComplete="email"
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ fontWeight: 500, color: "#333" }}>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 2.5rem 0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "1px solid #ddd",
                fontSize: "1rem",
                marginTop: "0.5rem",
              }}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "0.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#764ba2",
                fontWeight: 600,
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1rem",
            boxShadow: "0 2px 8px rgba(118,75,162,0.15)",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPages;

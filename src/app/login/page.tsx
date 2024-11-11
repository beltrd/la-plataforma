"use client";

import { useState } from "react";
import { Input } from "../components/common/input";
import { Button } from "../components/common/button";
// import { SocialLoginButton } from "../components/common/social-login-button";
// import { Platform } from "../components/common/social-login-button/component";
import { useChangePageTitle } from "../../hooks/change-page-title";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useChangePageTitle("login");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
  };

  // const handleSocialLogin = (platform: Platform) => {
  //   console.log(`Logging in with ${platform}`);
  //   // Handle social login logic here
  // };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-full max-w-sm">
        <div className="bg-black shadow-md rounded px-8 py-8 mb-4">
          <h2 className="text-center text-2xl font-bold mb-6 text-white">
            Login
          </h2>

          {/* Login with Username and Password */}
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              className="w-full mt-4 custom"
              onClick={() => handleSubmit}
            >
              Sign In
            </Button>
          </form>

          {/* OR Section with Divider */}
          {/* <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 font-medium">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div> */}

          {/* Social Login Buttons */}
          {/* <div>
            <SocialLoginButton
              platform="google"
              onClick={() => handleSocialLogin("google")}
            />
            <SocialLoginButton
              platform="facebook"
              onClick={() => handleSocialLogin("facebook")}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

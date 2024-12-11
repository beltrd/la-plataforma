"use client";

import { useState } from "react";

import { signInWithPopup } from "firebase/auth";

import { auth, facebookProvider, googleProvider } from "../../configs/firebase";

import { Button } from "../../components/common/button";
import { Input } from "../../components/common/input";
import { SocialLoginButton } from "../../components/common/social-login-button";

// Mapping for sign-up types
const signUpTypes = {
  email: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    valueKey: "email",
    validationMessage: "Please enter a valid email address.",
  },
  phone: {
    label: "Phone",
    placeholder: "Enter your phone number",
    type: "tel",
    valueKey: "phone",
    validationMessage: "Please enter a valid phone number.",
  },
};

type SignUpType = keyof typeof signUpTypes;

const SignUpPage = () => {
  const [signUpType, setSignUpType] = useState<SignUpType>("email"); // Default is 'email'
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valueKey =
      signUpTypes[signUpType as keyof typeof signUpTypes].valueKey;
    const signUpValue = formData[valueKey as keyof typeof formData];

    if (!signUpValue) {
      alert(
        signUpTypes[signUpType as keyof typeof signUpTypes].validationMessage
      );
      return;
    }

    console.log(`Signing up with ${signUpType}:`, {
      [signUpType]: signUpValue,
      password: formData.password,
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login success:", result.user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("Facebook login success:", result.user);
    } catch (error) {
      console.error("Facebook login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Sign Up
        </h2>

        {/* Type Selector */}
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Sign up with:
          </label>
          <div className="flex justify-center space-x-4">
            {Object.keys(signUpTypes).map((type) => (
              <button
                key={type}
                type="button"
                className={`px-4 py-2 rounded-lg font-medium focus:outline-none ${
                  signUpType === type
                    ? "bg-blue-500 text-white shadow"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setSignUpType(type as SignUpType)}
              >
                {signUpTypes[type as SignUpType].label}
              </button>
            ))}
          </div>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSignUp}>
          <Input
            label={signUpTypes[signUpType].label}
            type={signUpTypes[signUpType].type}
            name={signUpTypes[signUpType].valueKey}
            placeholder={signUpTypes[signUpType].placeholder}
            value={
              formData[
                signUpTypes[signUpType].valueKey as keyof typeof formData
              ]
            }
            onChange={handleInputChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => {}}
          >
            Sign Up
          </Button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 font-medium">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Sign Up */}
        <div>
          <SocialLoginButton platform="google" onClick={handleGoogleLogin} />
          <SocialLoginButton
            platform="facebook"
            onClick={handleFacebookLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

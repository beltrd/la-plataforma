import React from "react";

export type Platform = "google" | "facebook";

export type SocialLoginButtonProps = {
  platform: Platform;
  onClick: () => void;
};

export const SocialLoginButton = ({
  platform,
  onClick,
}: SocialLoginButtonProps) => {
  const platformStyles = {
    google: "bg-red-500 hover:bg-red-700",
    facebook: "bg-blue-500 hover:bg-blue-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${platformStyles[platform]} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2`}
    >
      {`Sign in with ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
    </button>
  );
};

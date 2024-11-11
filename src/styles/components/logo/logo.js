import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" as={process.env["PUBLIC_URL"] + "/"}>
      <img
        alt="AMRC Studio"
        className="img-fluid"
        style={{ width: "140px" }}
        src={process.env["PUBLIC_URL"] + "/assets/images/amrc/logo.png"}
      />
    </Link>
  );
};

export { Logo };

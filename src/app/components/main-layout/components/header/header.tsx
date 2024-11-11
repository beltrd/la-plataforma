"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import logoImage from "../header/logo.png";

import Navigation from "./elements/navigation";
import AboutOverlay from "./elements/about-overlay";
import SearchOverlay from "./elements/search-overlay";
import CartOverlay from "./elements/cart-overlay";
import WishlistOverlay from "./elements/wishlist-overlay";
import MobileMenu from "./elements/mobile-menu";

const Header = ({
  aboutOverlay,
}: {
  aboutOverlay?: boolean;
  wishlistItems?: [];
}) => {
  // const { cartItems } = useCart();

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasAboutActive, setOffCanvasAboutActive] = useState(false);
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
  const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
  const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] =
    useState(false);

  useEffect(() => {
    const header = document.querySelector("header");

    if (header) {
      setHeaderTop(header.offsetTop);
      setHeaderHeight(header.offsetHeight);
    }

    window.addEventListener("scroll", handleScroll);

    scroll > headerTop
      ? (document.body.style.paddingTop = `${headerHeight}px`)
      : (document.body.style.paddingTop = "0px");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      <header
        className={`topbar-shadow ${scroll > headerTop ? "is-sticky" : ""}`}
      >
        <Container className="wide">
          <div className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--10">
            {/* logo */}
            <div className="header-content__logo d-flex align-items-center space-pr--15">
              {/* <button
                onClick={() => {
                  setOffCanvasAboutActive(true);
                  document
                    .querySelector("body")
                    .classList.add("overflow-hidden");
                }}
                className={`${
                  aboutOverlay === false
                    ? "d-none"
                    : "about-overlay-trigger d-none d-lg-block"
                }`}
              >
                <IoIosMenu />
              </button> */}
              <Link href="/" as={process.env["PUBLIC_URL"] + "/"}>
                <Image
                  className="img-fluid"
                  alt="AMRC Studio Logo"
                  src={logoImage}
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </Link>
            </div>

            {/* navigation */}
            <Navigation />

            {/* icons */}
            <div className="header-content__icons space-pl--15">
              <ul className="d-none d-lg-block">
                {/* <li>
                <button
                  onClick={() => {
                    setOffCanvasSearchActive(true);
                    document
                      .querySelector("body")
                      .classList.add("overflow-hidden");
                  }}
                >
                  <IoIosSearch />
                </button>
              </li> */}
                {/* <li>
                <Link
                  href="/other/login-register"
                  as={process.env['PUBLIC_URL'] + "/other/login-register"}
                >
                  <a>
                    <IoMdPerson />
                  </a>
                </Link>
              </li> */}
                {/* <li>
                <button
                  onClick={() => {
                    setOffCanvasWishlistActive(true);
                    document
                      .querySelector("body")
                      .classList.add("overflow-hidden");
                  }}
                >
                  <IoIosHeartEmpty />
                  {wishlistItems.length >= 1 ? (
                    <span className="count">
                      {wishlistItems.length ? wishlistItems.length : ""}
                    </span>
                  ) : (
                    ""
                  )}
                </button>
              </li> */}
                {/* <li>
                  <button
                    onClick={() => {
                      setOffCanvasCartActive(true);

                      const body = document.querySelector("body");

                      if (body) {
                        body.classList.add("overflow-hidden");
                      }
                    }}
                  >
                    <IoIosCart />
                    {cartItems.length >= 1 ? (
                      <span className="count">
                        {cartItems.length ? cartItems.length : ""}
                      </span>
                    ) : (
                      ""
                    )}
                  </button>
                </li> */}
              </ul>

              <ul className="d-block d-lg-none">
                {/* <li>
                <Link
                  href="/other/wishlist"
                  as={process.env['PUBLIC_URL'] + "/other/wishlist"}
                >
                  <a>
                    <IoIosHeartEmpty />
                    {wishlistItems.length >= 1 ? (
                      <span className="count">
                        {wishlistItems.length ? wishlistItems.length : ""}
                      </span>
                    ) : (
                      ""
                    )}
                  </a>
                </Link>
              </li>
                {/* <li>
                  <Link href="/cart" as={process.env["PUBLIC_URL"] + "/cart"}>
                    <IoIosCart />
                    {cartItems.length >= 1 ? (
                      <span className="count">
                        {cartItems.length ? cartItems.length : ""}
                      </span>
                    ) : (
                      ""
                    )}
                  </Link>
                </li> */}
                <li>
                  <button onClick={() => setOffCanvasMobileMenuActive(true)}>
                    <IoIosMenu />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>

      {/* about overlay */}
      {aboutOverlay === false ? (
        ""
      ) : (
        <AboutOverlay
          activeStatus={offCanvasAboutActive}
          getActiveStatus={setOffCanvasAboutActive}
        />
      )}
      {/* search overlay */}
      <SearchOverlay
        activeStatus={offCanvasSearchActive}
        getActiveStatus={setOffCanvasSearchActive}
      />

      {/* cart overlay */}
      <CartOverlay
        activeStatus={offCanvasCartActive}
        getActiveStatus={setOffCanvasCartActive}
      />

      {/* wishlist overlay */}
      <WishlistOverlay
        activeStatus={offCanvasWishlistActive}
        getActiveStatus={setOffCanvasWishlistActive}
        deleteFromWishlist={() => {}}
      />
      {/* Mobile Menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
    </>
  );
};

export default Header;

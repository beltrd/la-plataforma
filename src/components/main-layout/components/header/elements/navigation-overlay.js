// @ts-nocheck
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const NavigationOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`navigation-overlay ${activeStatus ? "active" : ""}`}>
      <div className="navigation-overlay__content">
        <button
          className="navigation-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        <div className="navigation-overlay__content-container">
          <nav>
            <ul>
              <li className="has-children">
                <Link href="/" as={process.env["PUBLIC_URL"] + "/"}>
                  Home
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/art-gallery/shop"
                  as={process.env["PUBLIC_URL"] + "/art-gallery/shop"}
                >
                  Art Gallery
                </Link>
              </li>
              <li className="has-children">
                <Link href="/about" as={process.env["PUBLIC_URL"] + "/about"}>
                  About
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/checkout"
                  as={process.env["PUBLIC_URL"] + "/checkout"}
                >
                  Checkout
                </Link>
              </li>
              {/* <li className="has-children">
                <Link
                  href="/shop/fullwidth-no-sidebar"
                  as={process.env['PUBLIC_URL'] + "/shop/fullwidth-no-sidebar"}
                >
                  <a>fullwidth-no-sidebar</a>
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/shop/product-fullwidth-right-thumb/lorem-ipsum-decor-one"
                  as={process.env['PUBLIC_URL'] + "/shop/product-fullwidth-right-thumb/lorem-ipsum-decor-one"}
                >
                  <a>lorem-ipsum-decor-one</a>
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/cart"
                  as={process.env['PUBLIC_URL'] + "/cart"}
                >
                  <a>cart</a>
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/other/wishlist"
                  as={process.env['PUBLIC_URL'] + "/other/wishlist"}
                >
                  <a>wishlist</a>
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/other/compare"
                  as={process.env['PUBLIC_URL'] + "/other/compare"}
                >
                  <a>compare</a>
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/other/about"
                  as={process.env['PUBLIC_URL'] + "/other/about"}
                >
                  <a>about</a>
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/other/about-two"
                  as={process.env['PUBLIC_URL'] + "/other/about-two"}
                >
                  <a>about-two</a>
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/other/contact"
                  as={process.env['PUBLIC_URL'] + "/other/contact"}
                >
                  <a>contact</a>
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/other/coming-soon"
                  as={process.env['PUBLIC_URL'] + "/other/coming-soon"}
                >
                  <a>coming-soon</a>
                </Link>
              </li>
              <li className="has-children">
                <Link
                  href="/other/not-found"
                  as={process.env['PUBLIC_URL'] + "/other/not-found"}
                >
                  <a>not-found</a>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationOverlay;

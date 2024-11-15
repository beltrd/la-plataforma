// @ts-nocheck
import { useEffect } from "react";
import Link from "next/link";

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu =
      offCanvasNav.querySelectorAll(".mobile-sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="has-children">
          <Link href="/" as={process.env["PUBLIC_URL"] + "/"}>
            Home
          </Link>
        </li>
        <li className="has-children">
          <Link href="/login" as={process.env["PUBLIC_URL"] + "/login"}>
            Login
          </Link>
        </li>
        <li className="has-children">
          <Link href="/register" as={process.env["PUBLIC_URL"] + "/register"}>
            Register
          </Link>
        </li>
        {/* <li className="menu-item-has-children">
          <Link
            href="/art-gallery/shop"
            as={process.env['PUBLIC_URL'] + "/art-gallery/shop"}
          >
            <a>Shop</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link
                href="/art-gallery/shop"
                as={process.env['PUBLIC_URL'] + "/art-gallery/shop"}
              >
                <a>Group One</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/art-gallery/shop"
                    as={process.env['PUBLIC_URL'] + "/art-gallery/shop"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/right-sidebar"
                    as={process.env['PUBLIC_URL'] + "/shop/right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/no-sidebar"
                    as={process.env['PUBLIC_URL'] + "/shop/no-sidebar"}
                  >
                    <a>No Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-no-space"
                    as={process.env['PUBLIC_URL'] + "/shop/fullwidth-no-space"}
                  >
                    <a>Full Width No Space</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-no-sidebar"
                    as={process.env['PUBLIC_URL'] + "/shop/fullwidth-no-sidebar"}
                  >
                    <a>Full Width No Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-left-sidebar"
                    as={process.env['PUBLIC_URL'] + "/shop/fullwidth-left-sidebar"}
                  >
                    <a>Full Width Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-right-sidebar"
                    as={
                      process.env['PUBLIC_URL'] + "/shop/fullwidth-right-sidebar"
                    }
                  >
                    <a>Full Width Right Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/art-gallery/shop"
                as={process.env['PUBLIC_URL'] + "/art-gallery/shop"}
              >
                <a>Group Two</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/art-gallery/shop/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env['PUBLIC_URL'] +
                      "/art-gallery/shop/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Basic</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-fullwidth/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env['PUBLIC_URL'] +
                      "/shop/product-fullwidth/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Full Width</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/shop/product-fullwidth-right-thumb/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env['PUBLIC_URL'] +
                      "/shop/product-fullwidth-right-thumb/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Full Width Right Thumb</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/shop/product-sticky/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env['PUBLIC_URL'] +
                      "/shop/product-sticky/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Sticky Details</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    as={process.env['PUBLIC_URL'] + "/cart"}
                  >
                    <a>Shopping Cart</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/wishlist"
                    as={process.env['PUBLIC_URL'] + "/other/wishlist"}
                  >
                    <a>Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/compare"
                    as={process.env['PUBLIC_URL'] + "/other/compare"}
                  >
                    <a>Compare</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/art-gallery/shop"
                as={process.env['PUBLIC_URL'] + "/art-gallery/shop"}
              >
                <a>Group Three</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/checkout"
                    as={process.env['PUBLIC_URL'] + "/checkout"}
                  >
                    <a>Checkout</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/order-tracking"
                    as={process.env['PUBLIC_URL'] + "/other/order-tracking"}
                  >
                    <a>Order Tracking</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/my-account"
                    as={process.env['PUBLIC_URL'] + "/other/my-account"}
                  >
                    <a>My Account</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/login-register"
                    as={process.env['PUBLIC_URL'] + "/other/login-register"}
                  >
                    <a>Login Register</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/">
            <a>Elements</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/" as={process.env['PUBLIC_URL'] + "/"}>
                <a>Group One</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/element/product-categories"
                    as={process.env['PUBLIC_URL'] + "/element/product-categories"}
                  >
                    <a>Product Categories</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-sliders"
                    as={process.env['PUBLIC_URL'] + "/element/product-sliders"}
                  >
                    <a>Product Sliders</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-tabs"
                    as={process.env['PUBLIC_URL'] + "/element/product-tabs"}
                  >
                    <a>Product Tabs</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-widgets"
                    as={process.env['PUBLIC_URL'] + "/element/product-widgets"}
                  >
                    <a>Product Widget</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/recent-products"
                    as={process.env['PUBLIC_URL'] + "/element/recent-products"}
                  >
                    <a>Recent Products</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/" as={process.env['PUBLIC_URL'] + "/"}>
                <a>Group Two</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/element/sale-products"
                    as={process.env['PUBLIC_URL'] + "/element/sale-products"}
                  >
                    <a>Sale Products</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/featured-products"
                    as={process.env['PUBLIC_URL'] + "/element/featured-products"}
                  >
                    <a>Featured products</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/top-rated-products"
                    as={process.env['PUBLIC_URL'] + "/element/top-rated-products"}
                  >
                    <a>Top Rated products</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/best-selling-products"
                    as={
                      process.env['PUBLIC_URL'] + "/element/best-selling-products"
                    }
                  >
                    <a>Best Selling</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-attributes"
                    as={process.env['PUBLIC_URL'] + "/element/product-attributes"}
                  >
                    <a>Product Attributes</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/" as={process.env['PUBLIC_URL'] + "/"}>
                <a>Group Three</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/element/blog-posts"
                    as={process.env['PUBLIC_URL'] + "/element/blog-posts"}
                  >
                    <a>Blog Posts</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/mailchimp-forms"
                    as={process.env['PUBLIC_URL'] + "/element/mailchimp-forms"}
                  >
                    <a>Mailchimp Form</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/icon-boxes"
                    as={process.env['PUBLIC_URL'] + "/element/icon-boxes"}
                  >
                    <a>Icon Box</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/team-members"
                    as={process.env['PUBLIC_URL'] + "/element/team-members"}
                  >
                    <a>Team Member</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/faqs"
                    as={process.env['PUBLIC_URL'] + "/element/faqs"}
                  >
                    <a>FAQs / Toggles</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/" as={process.env['PUBLIC_URL'] + "/"}>
                <a>Group Four</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/element/countdown-timers"
                    as={process.env['PUBLIC_URL'] + "/element/countdown-timers"}
                  >
                    <a>Countdown Timer</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/buttons"
                    as={process.env['PUBLIC_URL'] + "/element/buttons"}
                  >
                    <a>Buttons</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/testimonials"
                    as={process.env['PUBLIC_URL'] + "/element/testimonials"}
                  >
                    <a>Testimonials</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/google-maps"
                    as={process.env['PUBLIC_URL'] + "/element/google-maps"}
                  >
                    <a>Google Maps</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/" as={process.env['PUBLIC_URL'] + "/"}>
            <a>Pages</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li>
              <Link
                href="/other/about"
                as={process.env['PUBLIC_URL'] + "/other/about"}
              >
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/about-two"
                as={process.env['PUBLIC_URL'] + "/other/about-two"}
              >
                <a>About Us Two</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/contact"
                as={process.env['PUBLIC_URL'] + "/other/contact"}
              >
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/faq"
                as={process.env['PUBLIC_URL'] + "/other/faq"}
              >
                <a>F.A.Q</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/coming-soon"
                as={process.env['PUBLIC_URL'] + "/other/coming-soon"}
              >
                <a>Coming Soon</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/not-found"
                as={process.env['PUBLIC_URL'] + "/other/not-found"}
              >
                <a>Not Found</a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env['PUBLIC_URL'] + "/blog/standard-left-sidebar"}
          >
            <a>Blog</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link
                href="/blog/standard-left-sidebar"
                as={process.env['PUBLIC_URL'] + "/blog/standard-left-sidebar"}
              >
                <a>Standard Layout</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/blog/standard-left-sidebar"
                    as={process.env['PUBLIC_URL'] + "/blog/standard-left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/standard-right-sidebar"
                    as={process.env['PUBLIC_URL'] + "/blog/standard-right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/standard-fullwidth"
                    as={process.env['PUBLIC_URL'] + "/blog/standard-fullwidth"}
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/blog/grid-left-sidebar"
                as={process.env['PUBLIC_URL'] + "/blog/grid-left-sidebar"}
              >
                <a>Grid Layout</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/blog/grid-left-sidebar"
                    as={process.env['PUBLIC_URL'] + "/blog/grid-left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/grid-right-sidebar"
                    as={process.env['PUBLIC_URL'] + "/blog/grid-right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/grid-fullwidth"
                    as={process.env['PUBLIC_URL'] + "/blog/grid-fullwidth"}
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/blog/list-left-sidebar"
                as={process.env['PUBLIC_URL'] + "/blog/list-left-sidebar"}
              >
                <a>List Layout</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/blog/list-left-sidebar"
                    as={process.env['PUBLIC_URL'] + "/blog/list-left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/list-right-sidebar"
                    as={process.env['PUBLIC_URL'] + "/blog/list-right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/list-fullwidth"
                    as={process.env['PUBLIC_URL'] + "/blog/list-fullwidth"}
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/blog/post-left-sidebar"
                as={process.env['PUBLIC_URL'] + "/blog/post-left-sidebar"}
              >
                <a>Single Post Layout</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/blog/post-left-sidebar"
                    as={process.env['PUBLIC_URL'] + "/blog/post-left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/post-right-sidebar"
                    as={process.env['PUBLIC_URL'] + "/blog/post-right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/post-fullwidth"
                    as={process.env['PUBLIC_URL'] + "/blog/post-fullwidth"}
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li> */}
      </ul>
    </nav>
  );
};

export default MobileMenuNav;

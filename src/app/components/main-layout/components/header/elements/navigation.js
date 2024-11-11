import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
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
        {/* <li className="has-children">
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
          <Link href="/checkout" as={process.env["PUBLIC_URL"] + "/checkout"}>
            Checkout
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;

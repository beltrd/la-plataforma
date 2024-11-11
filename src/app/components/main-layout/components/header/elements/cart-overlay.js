// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import CustomScroll from "react-custom-scroll";

import { useCart } from "../../../../../../context/cart";
import { getDiscountPrice } from "../../../../../../lib/product";

const CartOverlay = ({ activeStatus, getActiveStatus }) => {
  const { cartItems, deleteFromCart } = useCart();

  let cartTotalPrice = 0;

  return (
    <div className={`cart-overlay ${activeStatus ? "active" : ""}`}>
      <div
        className="cart-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="cart-overlay__content">
        {/*=======  close icon  =======*/}
        <button
          className="cart-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        {/*=======  offcanvas cart content container  =======*/}
        <div className="cart-overlay__content-container">
          <h3 className="cart-title">Cart</h3>
          {cartItems.length >= 1 ? (
            <div className="cart-product-wrapper">
              <div className="cart-product-container">
                <CustomScroll allowOuterScroll={true}>
                  {cartItems.map((product, i) => {
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2);

                    const quantity = !product.quantity ? 1 : product.quantity;

                    cartTotalPrice += discountedPrice * quantity;

                    return (
                      <div className="single-cart-product" key={i}>
                        <span className="cart-close-icon">
                          <button onClick={() => deleteFromCart(product)}>
                            <IoIosClose />
                          </button>
                        </span>
                        <div className="image">
                          <Link
                            href={`/art-gallery/shop/[slug]?slug=${product.slug}`}
                            as={`${process.env["PUBLIC_URL"]}/art-gallery/shop/${product.slug}`}
                          >
                            <img
                              src={product.thumbImage[0]}
                              className="img-fluid"
                              alt={product.name}
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h5>
                            <Link
                              href={`/art-gallery/shop/[slug]?slug=${product.slug}`}
                              as={`${process.env["PUBLIC_URL"]}/art-gallery/shop/${product.slug}`}
                            >
                              {product.name}
                            </Link>
                          </h5>
                          {product.selectedProductColor &&
                          product.selectedProductSize ? (
                            <div className="cart-item-variation">
                              <span>Color: {product.selectedProductColor}</span>
                              <span>Size: {product.selectedProductSize}</span>
                            </div>
                          ) : (
                            ""
                          )}
                          <p>
                            <span className="cart-count">
                              {product.quantity} x{" "}
                            </span>{" "}
                            <span className="discounted-price">
                              ${discountedPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CustomScroll>
              </div>
              {/*=======  subtotal calculation  =======*/}
              <p className="cart-subtotal">
                <span className="subtotal-title">Subtotal:</span>
                <span className="subtotal-amount">
                  ${cartTotalPrice.toFixed(2)}
                </span>
              </p>
              {/*=======  cart buttons  =======*/}
              <div className="cart-buttons">
                <Link href="/cart" as={process.env["PUBLIC_URL"] + "/cart"}>
                  view cart
                </Link>
                <Link
                  href="/checkout"
                  as={process.env["PUBLIC_URL"] + "/checkout"}
                >
                  checkout
                </Link>
              </div>
              {/*=======  No free shipping text  =======*/}
              <p className="free-shipping-text">
                Shipping and taxes are not included. Calculated at checkout.
              </p>
            </div>
          ) : (
            "No items found in cart"
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
  };
};

export default CartOverlay;

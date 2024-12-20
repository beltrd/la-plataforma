// @ts-nocheck
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import CustomScroll from "react-custom-scroll";
// import { useToasts } from 'react-toast-notifications';
// import { getDiscountPrice } from "@lib/product";
import { getDiscountPrice } from "../../../../../lib/product";
// import { deleteFromWishlist } from "../../../redux/actions/wishlistActions";

const WishlistOverlay = ({
  activeStatus,
  getActiveStatus,
  wishlistItems = [],
  deleteFromWishlist,
}) => {
  // const { addToast } = useToasts();

  const addToast = (something) => console.log(something);

  return (
    <div className={`wishlist-overlay ${activeStatus ? "active" : ""}`}>
      <div
        className="wishlist-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="wishlist-overlay__content">
        {/*=======  close icon  =======*/}
        <button
          className="wishlist-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        {/*=======  offcanvas wishlist content container  =======*/}
        <div className="wishlist-overlay__content-container">
          <h3 className="wishlist-title">Wishlist</h3>
          {wishlistItems.length >= 1 ? (
            <div className="wishlist-product-wrapper">
              <div className="wishlist-product-container">
                <CustomScroll allowOuterScroll={true}>
                  {wishlistItems.map((product, i) => {
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2);
                    return (
                      <div className="single-wishlist-product" key={i}>
                        <span className="wishlist-close-icon">
                          <button
                            onClick={() =>
                              deleteFromWishlist(product, addToast)
                            }
                          >
                            <IoIosClose />
                          </button>
                        </span>
                        <div className="image">
                          <Link
                            href={`/art-gallery/shop/[slug]?slug=${product.slug}`}
                            as={`${process.env["PUBLIC_URL"]}/art-gallery/shop/${product.slug}`}
                          >
                            <img
                              src={
                                process.env["PUBLIC_URL"] +
                                product.thumbImage[0]
                              }
                              className="img-fluid"
                              alt=""
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
                          <p>
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
              {/*=======  wishlist buttons  =======*/}
              <div className="wishlist-buttons">
                <Link
                  href="/other/wishlist"
                  as={process.env["PUBLIC_URL"] + "/other/wishlist"}
                >
                  view wishlist
                </Link>
              </div>
            </div>
          ) : (
            "No items found in wishlist"
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: state.wishlistData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    },
  };
};

export default WishlistOverlay;

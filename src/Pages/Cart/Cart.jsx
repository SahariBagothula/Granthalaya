import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationContext } from "../../Contexts/AuthenticationContext";
import { CartContext } from "../../Contexts/CartContext";
import { WishListContext } from "../../Contexts/WishlistContext";
import CartBilling from "../Checkout/CartBilling";
import "./Cart.css";

const Cart = () => {
  const { inWishlist, addToWishlist } = useContext(WishListContext);
  const { cart, removeFromCart, handleQuantity } = useContext(CartContext);
  const { userToken } = useContext(AuthenticationContext);

  return (
    <>
      <div className="mainBooksCard">
        {cart.map((item) => {
          const {
            _id,
            img,
            name,
            author,
            price,
            originalPrice,
            category,
            rating,
            qty
          } = item;
          return (
            <div key={_id} className="subBooksCard">
              <NavLink to={`/bookDetails/${_id}`}>
                <img src={img} alt="book" height="300" width="200" />
              </NavLink>
              <p>
                <b>Name: </b>
                {name}
              </p>
              <p>
                <b>Author: </b>
                {author}
              </p>
              <p>
                <b>Price: </b>
                {price}{" "}
                <span>
                  <strike>{originalPrice}</strike>
                </span>{" "}
              </p>
              <p>
                <b>Category: </b>
                {category}
              </p>
              <p>
                <b>Rating: </b>
                {rating}
              </p>
              <div>
              <button className="button"
                        onClick={() => handleQuantity("decrement", _id, userToken)}
                      >
                        -
                      </button>
                      <span className="quantity"> {qty} </span>

                      <button className="button"
                        onClick={() => handleQuantity("increment", _id, userToken)}
                      >
                        +
                      </button>
                <button className="button"
                  onClick={() => {
                    removeFromCart(_id, userToken);
                  }}
                >
                  Remove from Cart
                </button>
                {inWishlist(_id) ? (
                  <button className="button">
                    <NavLink to="/wishlist">Go to Wishlist</NavLink>
                  </button>
                ) : (
                  <button className="button"
                    onClick={() => {
                      addToWishlist(item, userToken);
                    }}
                  >
                    {" "}
                    Add to Wishlist
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <CartBilling/>
    </>
  );
};

export default Cart;

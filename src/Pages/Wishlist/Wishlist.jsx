import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationContext } from "../../Contexts/AuthenticationContext";
import { CartContext } from "../../Contexts/CartContext";
import { WishListContext } from "../../Contexts/WishlistContext";

export const WishList = () => {
  const { wishlist, removeFromWishlist } = useContext(WishListContext);
  const { userToken } = useContext(AuthenticationContext);
  const { inCart, addToCart, handleQuantity } = useContext(CartContext);

  return (
    <div>
      <div className="mainBooksCard">
        {wishlist.map((item) => {
          const {
            _id,
            img,
            name,
            author,
            price,
            originalPrice,
            category,
            rating,
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
                  onClick={() => {
                    removeFromWishlist(_id, userToken);
                  }}
                >
                  Remove from wishlist
                </button>
                {inCart(_id) ? (
                  <button className="button" onClick={() => handleQuantity("increment", _id, userToken)}>
                    <NavLink to="/cart">Add more to cart</NavLink>{" "}
                  </button>
                ) : (
                  <button className="button"
                    onClick={() => {
                      addToCart(item, userToken);
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

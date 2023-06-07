import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";
import { BooksContext } from "../../Contexts/BooksContext";
import { CartContext } from "../../Contexts/CartContext";
import { WishListContext } from "../../Contexts/WishlistContext";
import { AuthenticationContext } from "../../Contexts/AuthenticationContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {

  const { bookId } = useParams();

  const { booksData } = useContext(BooksContext);

  const { addToCart, inCart } = useContext(CartContext);

  const { inWishlist, addToWishlist } = useContext(WishListContext);

  const {  userToken } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const bookToBeDisplayed = booksData.filter(({ _id }) => _id === bookId);

  return (
    <>
      <div className="mainBooksCard1">
        {bookToBeDisplayed?.map(
          (
          item
          ) => {

              const {_id,
              img,
              name,
              author,
              price,
              originalPrice,
              category,
              rating} = item;

           return (
            <div key={_id} className="subBooksCard1">
              <div>
              <img src={img} alt="book" height="300" width="200" />
              </div>
              <div>
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
                {inCart(_id) ? (
                  <button>
                    <NavLink to="/cart">Go to Cart</NavLink>{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => 
                      { userToken ? addToCart(item, userToken) : navigate("/login")}
                    }
                  >

                    Add to Cart
                  </button>
                )}
              </div>

              <div>
                {inWishlist(_id) ? (
                  <button>
                    <NavLink to="/wishlist">Go to Wishlist</NavLink>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      userToken ?
                      addToWishlist(item, userToken) : navigate("/login")

                    }}
                  >
                    {" "}
                    Add to Wishlist
                  </button>
                )}
              </div>
            </div>
              </div>
          )}
        )}
      </div>
    </>
  );
};

export default BookDetails;

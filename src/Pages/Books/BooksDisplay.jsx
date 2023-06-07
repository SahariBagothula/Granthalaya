import { useContext } from "react";
import { BooksContext } from "../../Contexts/BooksContext";
import "./BooksDisplay.css";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { WishListContext } from "../../Contexts/WishlistContext";
import { AuthenticationContext } from "../../Contexts/AuthenticationContext";

const BooksDisplay = () => {
  const {
    sortedProducts,
    selectedCategories,
    handleToggleCategory,
    sortOrder,
    handleSortChange,
    ratingFilter,
    handleRatingChange,
    handleClearFilters,
  } = useContext(BooksContext);

  const { addToCart, inCart } = useContext(CartContext);

  const { inWishlist, addToWishlist } = useContext(WishListContext);

  const {  userToken } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  return (
    <>
    <div className="mainBooksDisplay">

      <div className="sideBarBookDisplay">
      <div className="clearButton">
        <h3>Filters</h3>
      <button onClick={handleClearFilters}>Clear</button>
      </div>
      <div className="categoriesCard">
        <div>
          <div><h3>Category</h3></div>
      <label>
        <input
          type="checkbox"
          value="Fiction"
          checked={selectedCategories.includes("Fiction")}
          onChange={handleToggleCategory}
        />
        Fiction
      </label>
     </div>
     <div>
      <label>
        <input
          type="checkbox"
          value="Non Fiction"
          checked={selectedCategories.includes("Non Fiction")}
          onChange={handleToggleCategory}
        />
        Non Fiction
      </label>
      </div>
      <div>
      <label>
        <input
          type="checkbox"
          value="Self Help"
          checked={selectedCategories.includes("Self Help")}
          onChange={handleToggleCategory}
        />
        Self Help
      </label>
      </div>
      </div>
      <div className="sortingCard">
        <div>
      <div><h3>Sort by</h3></div>
      <label>
        <input
          type="radio"
          value="asc"
          checked={sortOrder === "asc"}
          onChange={handleSortChange}
        />
        Low to High
      </label>
      </div>
      <div>
      <label>
        <input
          type="radio"
          value="desc"
          checked={sortOrder === "desc"}
          onChange={handleSortChange}
        />
        High to Low
      </label>
      </div>
      </div>
      <div className="ratingCard">
      <div><h3>Rating</h3></div>
      <div>
      <label>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={ratingFilter}
          onChange={handleRatingChange}
        />
        {ratingFilter}{" "}
      </label>
      </div>
      </div>
      </div>
      <div className="mainBooksCard">
       
        {sortedProducts.map((item) => {
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
                {inCart(_id) ? (
                  <button className="button">
                    <NavLink to="/cart">Go to Cart</NavLink>{" "}
                  </button>
                ) : (
                  <button className="button"
                    onClick={() => 
                    //  { navigate("/login");
                    //   console.log(userToken);}
                      { userToken ? addToCart(item, userToken) : navigate("/login")}
                    }
                  >

                    Add to Cart
                  </button>
                )}
              </div>

              <div>
                {inWishlist(_id) ? (
                  <button className="button">
                    <NavLink to="/wishlist">Go to Wishlist</NavLink>
                  </button>
                ) : (
                  <button className="button"
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
          );
        })}
      </div>
      </div>
    </>
  );
};

export default BooksDisplay;

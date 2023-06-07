import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";
import { BooksContext } from "../../Contexts/BooksContext";

const BookDetails = () => {
  const { bookId } = useParams();
  const { booksData } = useContext(BooksContext);

  const bookToBeDisplayed = booksData.filter(({ _id }) => _id === bookId);

  return (
    <>
      <div className="mainBooksCard">
        {bookToBeDisplayed?.map(
          ({
            _id,
            img,
            name,
            author,
            price,
            originalPrice,
            category,
            rating,
          }) => (
            <div key={_id} className="subBooksCard">
              <img src={img} alt="book" height="300" width="200" />
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
              <button>Add to Cart</button>
              <button>Add to wishlist</button>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default BookDetails;

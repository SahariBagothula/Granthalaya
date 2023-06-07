import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="homeCard">
      <div className="imageCard">
        <img src="https://st4.depositphotos.com/2001403/20595/i/600/depositphotos_205955334-stock-photo-back-school-background-pencils-apple.jpg" alt="book" />
      </div>
      <div className="headingCard">
      <NavLink to="/booksDisplay">Shop now</NavLink>
      </div>
    </div>
    </>
  );
};

export default Home;

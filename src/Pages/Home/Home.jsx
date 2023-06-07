import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
    <div className="homeCard">
      
      <NavLink to="/booksDisplay">Shop now</NavLink>
    </div>
    </>
  );
};

export default Home;

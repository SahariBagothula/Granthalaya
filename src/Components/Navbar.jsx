// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { BooksContext } from "../Contexts/BooksContext";

// const Navbar = () => {
//   const { searchTerm, handleSearch } = useContext(BooksContext);

//   return (
//     <>
//       <header>
//         <h1>Granthalaya</h1>
//         <input
//           type="text"
//           placeholder="Search for books"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <NavLink to="/login">LOGIN</NavLink> <NavLink to="/cart">CART</NavLink>{" "}
//         <NavLink to="/wishlist">WISHLIST</NavLink>
//       </header>
//     </>
//   );
// };

// export default Navbar;

import { useContext } from "react";
import { BooksContext } from "../Contexts/BooksContext";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";


export default function App() {

  const { searchTerm, handleSearch } = useContext(BooksContext);

  return (
    <div className="App">
      <section clasName="nav-section">
        <div className="nav-wrapper">
          <h1><NavLink to="/">Granthalaya</NavLink></h1>
          <div clasName="nav-search">
            <input type="text" placeholder="Search.." value={searchTerm}
           onChange={handleSearch}/>
          </div>
          <div className="nav-right-side">
            <div>
            <NavLink to="/cart">
              <AiOutlineShoppingCart />
              </NavLink>
            </div>
            <div>
            <NavLink to="/wishlist">
              <AiFillHeart />
              </NavLink>
            </div>
            <div>
            <NavLink to="/login">
              <CgProfile />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

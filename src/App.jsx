import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BooksDisplay from "./Pages/Books/BooksDisplay";
import BookDetails from "./Pages/Books/BookDetails";
import Navbar from "./Components/Navbar";
import { Login } from "./Pages/Login/Login";
import { SignUp } from "./Pages/SignUp/SignUp";
import { WishList } from "./Pages/Wishlist/Wishlist";
import Cart from "./Pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequiresAuth } from "./Components/RequiresAuthentication";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">

      <Navbar />
      <ToastContainer
        position="bottom-right"
        autoClose="500"
        closeOnClick="true"
        pauseOnHover="true"
        draggable="true"
      />
      <Routes>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booksDisplay" element={<BooksDisplay />}></Route>
        <Route path="/bookDetails/:bookId" element={<BookDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/cart" element={ <RequiresAuth><Cart /></RequiresAuth>}></Route>
        <Route path="/wishlist" element={<RequiresAuth><WishList /></RequiresAuth>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

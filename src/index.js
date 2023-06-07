import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider, BooksContext } from "./Contexts/BooksContext";
import {
  AuthenticationProvider,
  AuthenticationContext,
} from "./Contexts/AuthenticationContext";
import { CartProvider, CartContext } from "./Contexts/CartContext";
import { WishlistProvider, WishListContext } from "./Contexts/WishlistContext";
import { AddressProvider, AddressContext } from "./Contexts/AddressContext";

// Call make Server
makeServer();

export {
  BooksContext,
  AuthenticationContext,
  CartContext,
  WishListContext,
  AddressContext,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <AuthenticationProvider>
          <CartProvider>
            <WishlistProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthenticationProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

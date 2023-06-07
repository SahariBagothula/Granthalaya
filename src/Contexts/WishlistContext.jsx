import React, { useContext } from "react";
import axios from "axios";
import { createContext, useState } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { toast } from "react-toastify";

export const WishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { userToken } = useContext(AuthenticationContext);

  const addToWishlist = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: { authorization: userToken },
        }
      );
      if (response.status === 201) {
        setWishlist(response.data.wishlist);
        toast.success("Added to wishlist");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(wishlist);

  const removeFromWishlist = async (productId, userToken) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: userToken },
      });
      setWishlist(response.data.wishlist);
      toast.error("Removed from wishlist");
    } catch (error) {
      console.error(error);
    }
  };

  const inWishlist = (productId) => {
    return wishlist.find((item) => item.id === productId);
  };

  const values = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    inWishlist,
  };

  return (
    <WishListContext.Provider value={values}>
      {" "}
      {children}{" "}
    </WishListContext.Provider>
  );
};

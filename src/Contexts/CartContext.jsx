import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { AuthenticationContext } from "./AuthenticationContext";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { userToken } = useContext(AuthenticationContext);

  const addToCart = async (product, userToken) => {
    console.log(product);
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: { authorization: userToken },
        }
      );
      if (response.status === 201) {
        setCart(response.data.cart);
        toast.success("Added to cart");
      }
    } 

    catch (error) {
      console.error(error);
    }
  };
  const removeFromCart = async (productId, userToken) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: userToken },
      });
      setCart(response.data.cart);
      toast.error("Removed from cart");
    } catch (error) {
      console.error(error);
    }
  };
  const handleQuantity = async (type, productId) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: { type: type },
        },
        {
          headers: { authorization: userToken },
        }
      );
      setCart(response.data.cart);
      toast.success("Added to cart")
    } catch (error) {
      console.error(error);
    }
  };

  const inCart = (productId) => {
    return cart.find((item) => item.id === productId);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  const discount = totalPrice * (10 / 100);

  const discountedPrice = totalPrice - discount;

  const itemsInCart = cart.reduce((acc, curr) => {
    const currentValue = curr.name;
    if (!acc[currentValue]) {
      return { ...acc, [currentValue]: 1 };
    } else {
      return { ...acc, [currentValue]: acc[currentValue] + 1 };
    }
  }, {});

  const values = {
    cart,
    addToCart,
    removeFromCart,
    handleQuantity,
    inCart,
    totalPrice,
    discount,
    discountedPrice,
    itemsInCart,
  };
  return (
    <>
      <CartContext.Provider value={values}> {children} </CartContext.Provider>{" "}
    </>
  );
};

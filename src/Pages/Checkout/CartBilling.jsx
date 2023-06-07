import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import "./CartBilling.css";

const CartBilling = () => {

   const {cart} = useContext(CartContext);

   const priceBeforeDiscount = Math.round(
       cart.reduce((acc, curr) => acc + Number(curr.originalPrice * curr.qty), 0)
     );
   
     const actualPrice = Math.round(
       cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
     );
   
     const discountedPrice = priceBeforeDiscount - actualPrice;
   
     const deliveryCharge = 50;
   
     const grandTotal = Math.round(actualPrice + deliveryCharge);
   
     const totalItems = cart.length;
   
     const itemOrItems = totalItems > 1 ? "items" : "item";

    return(
        <>
        <div className="mainCartPriceCard">
    <div className="cartPriceCard">
      <div>
        <p className="cartPriceCardHeading"> PRICE DETAILS </p>

        <hr />

        <div className="priceDetails">
          <p>
            Price ({totalItems} {itemOrItems})
          </p>
          <p> ₹{actualPrice}</p>
        </div>
        <div className="priceDetails">
          <p>Discount</p>
          <p> ₹{discountedPrice}</p>
        </div>
        <div className="priceDetails">
          <p>Delivery Charges</p>
          <p> ₹{deliveryCharge}</p>
        </div>

        <hr />

        <div className="priceDetails totalAmount">
          <p>TOTAL AMOUNT</p>
          <p> ₹{grandTotal}</p>
        </div>

        <hr />
        <p>You will save ₹{discountedPrice} on this order</p>
        <NavLink to="/checkout">
        <button className="button">
          Place Order
        </button>
        </NavLink>
      </div>
    </div>
    </div>
        </>
    )
}

export default CartBilling;
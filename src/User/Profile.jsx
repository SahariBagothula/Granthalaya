import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";
import { Login } from "../Pages/Login/Login";
import "./Profile.css";
import { InnerFooter } from "../Components/InnerFooter";
import { AddressContext } from "../Contexts/AddressContext";
import { AddressForm } from "../Address/Address";

export const User = () => {
  const { signOut, auth } = useContext(AuthenticationContext);
  const { addedUser } = useContext(AddressContext);
  const [isAddressModal, setIsAddressModal] = useState(false);

  const user = JSON.parse(localStorage.getItem("signUpUserDetails"));

  return (
    <div>
      {!auth.isLoggedIn ? (
        <Login />
      ) : (
        <div className="user_div">
          {" "}
          <img src="../user2.png" alt="profile" className="user_img" />
          <h2>
            Name : {user?.firstName} {user?.lastName}
          </h2>
          <h3> Email : {user?.email} </h3>
          <>
            {" "}
            {addedUser?.map((item) => (
              <>
                <p> {item.fullName} </p>{" "}
              </>
            ))}{" "}
          </>
          <div>
            {" "}
            <button className="user_button" onClick={signOut}>
              Sign Out{" "}
            </button>{" "}
            <button
              onClick={() => setIsAddressModal(true)}
              className="user_button"
            >
              {" "}
              Address
            </button>{" "}
          </div>
        </div>
      )}
      {isAddressModal && (
        <div
          onClick={() => {
            setIsAddressModal(false);
          }}
          className="address_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="address_modal_outer_container"
          >
            <AddressForm />
          </div>
        </div>
      )}
      {auth.isLoggedIn && <InnerFooter />}
    </div>
  );
};

import React, { useContext } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { InnerFooter } from "../../Components/InnerFooter";
import { AuthenticationContext } from "../../Contexts/AuthenticationContext";
import { User } from "../../User/Profile";

import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const { userSignIn, auth, guestSignin, userDetails, setUserDetails } =
    useContext(AuthenticationContext);
  if (auth.isLoggedIn) {
    navigate("/");
  }

  return (
    <div>
      {auth.isLoggedIn ? (
        <div>
          <User />
        </div>
      ) : (
        <div className="sign_in_div">
          <p className="sign_in_heading">Sign in </p>{" "}
          <input
            required
            className="sign_in_input"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            type="email"
            placeholder="Enter email"
          />
          <input
            required
            className="sign_in_input"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            type="password"
            placeholder="Enter password"
          />
          <button className="sign_in_btn" onClick={userSignIn}>
            Sign In
          </button>
          <p className="sign_up_no_AC">
            No account? <NavLink to="/signup">Sign up</NavLink>
          </p>
          <p
            className="guest"
            onClick={() => guestSignin("adarshbalika@gmail.com", "adarshbalika")}
          >
            Sign In as <span className="guest_color"> Guest </span> ?
          </p>
        </div>
      )}

      {!auth.isLoggedIn && <InnerFooter />}
    </div>
  );
};

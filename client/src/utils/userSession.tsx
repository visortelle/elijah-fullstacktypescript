import { setAuthToken } from "./";
import { store } from "../store";
import { loginSuccess, logOutInit } from "../actions/userActions";
import jwt_decode from "jwt-decode";
export default {
  userSession: () => {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      setAuthToken(localStorage.jwtToken);
      // Decode token and get user info and exp
      const token = localStorage.getItem("jwtToken");

      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      store.dispatch(loginSuccess(decoded));
      // store.dispatch(getUser());
      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.iat > currentTime) {
        // Logout user
        store.dispatch(logOutInit());
        // Redirect to login
        window.location.href = "/login";
      }
    }
  }
};
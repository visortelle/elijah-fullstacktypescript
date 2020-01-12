import produce from "immer";
import * as types from "../actionTypes/userActionTypes";
import { sessionData, validation } from "../utils";

export interface userState {
  isAuthenticated: boolean;
  error?: string;
  isLoading: boolean;
  profileData: object;
  message: string;
  usernameError: any;
  passwordError: any;
  emailError:any;
  email:string,
  password: string,
  username: string

}

const initialState: userState = {
  isAuthenticated: false,
  error: "",
  profileData: {},
  isLoading: false,
  message: "",
  usernameError: "",
  passwordError: "",
  emailError:"",
  email: "",
  password: "",
  username: ""
};

const authReducer = (state = initialState, action: any): userState =>
  produce(state, draft => {
    switch (action.type) {
      case types.SIGN_UP_SUCCESS:
        console.log(action);
        draft.isAuthenticated = sessionData.getLoginStatus();
        draft.email = ""
        draft.password = ""
        draft.username = ""
        draft.error = ""
        return;
      
      case types.SIGN_UP_FAILURE:
        console.log(action);
        draft.error = action.error;
        return;
      case types.GET_USER_SUCCESS:
        console.log(action);
        draft.isAuthenticated = sessionData.getLoginStatus();
        return;
      case types.LOG_OUT_SUCCESS:
        console.log(action);
        draft.isAuthenticated = false;
        return;
      case types.LOG_IN_SUCCESS:
        draft.error = "";
        draft.isAuthenticated = sessionData.getLoginStatus();
        draft.isLoading = true;
        return;
      case types.INIT_LOGIN:
        draft.error = ""
        return;
      case types.GET_CURRENT_USER:
        console.log(action);
        return;
      case types.LOG_IN_FAILURE:
        console.log(action.error);
        draft.error = action.error;
        return;
      case types.GET_USER_PROFILE_SUCCESS:
        draft.message = "";
        draft.profileData = action.payload;
        break;
      case types.GET_USER_PROFILE_FAILURE:
        draft.error = action.error;
        break;
      case types.UPDATE_USER_PROFILE_SUCCESS:
        draft.profileData = action.payload.user;
        draft.message = action.payload.message;
        break;
      case types.UPDATE_USER_PROFILE_FAILURE:
        console.log(action.error);
        draft.error = action.error;
        return
      case types.ADD_EMAIL:
        console.log( validation.validateEmail(action.data))
        draft.email = action.data;
        draft.emailError = validation.validateEmail(action.data)
        break;
      case types.ADD_PASSWORD:
        draft.password = action.data
        draft.passwordError = validation.validatePassword(action.data)
        break;
      case types.ADD_USERNAME:
        draft.username = action.data
        draft.usernameError = validation.validateUsername(action.data)
        return
    }
  });

export default authReducer;

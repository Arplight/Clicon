import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signUp_API, signIn_API } from "../../apiStore/apiStore";
import Cookies from "js-cookie";

// constants
interface IAuthInit {
  signUpIsPending: boolean;
  signUpIsError: null | string;
  signInIsPending: boolean;
  signInIsError: null | string;
  isAuthenticated: boolean;
}

const AuthSlice = createSlice({
  name: "auth",
  initialState: <IAuthInit>{
    // Signup states
    signUpIsPending: false,
    signUpIsError: null,
    // Signin states
    signInIsPending: false,
    signInIsError: null,
    // auth state
    isAuthenticated: !!Cookies.get("userData"),
  },
  reducers: {
    logOut: (state) => {
      state.isAuthenticated = false;
      Cookies.remove("userData");
      window.location.reload();
    },
  },

  extraReducers: (builder) => {
    // Signup handlers
    builder.addCase(signUp_API.pending, (state) => {
      state.signUpIsPending = true;
      state.signUpIsError = null;
    });
    builder.addCase(signUp_API.fulfilled, (state, action) => {
      state.signUpIsPending = false;
      state.signUpIsError = null;
    });
    builder.addCase(
      signUp_API.rejected,
      (state, action: PayloadAction<any>) => {
        state.signUpIsError = action.payload;
        state.signUpIsPending = false;
      }
    );
    // Signin handlers
    builder.addCase(signIn_API.pending, (state) => {
      state.signInIsPending = true;
      state.signInIsError = null;
    });
    builder.addCase(
      signIn_API.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.signInIsPending = false;
        state.signInIsError = null;
        state.isAuthenticated = true;
        action.payload.token &&
          Cookies.set("userData", JSON.stringify(action.payload));
      }
    );
    builder.addCase(
      signIn_API.rejected,
      (state, action: PayloadAction<any>) => {
        state.signInIsError = action.payload;
        state.signInIsPending = false;
      }
    );
  },
});

export const { logOut } = AuthSlice.actions;
export default AuthSlice.reducer;

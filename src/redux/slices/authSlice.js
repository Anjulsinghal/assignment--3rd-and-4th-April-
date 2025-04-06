import { createSlice } from '@reduxjs/toolkit';

// This would normally come from an API, but for this assignment
// we'll hardcode it as specified
const whitelistedUsers = [
  {
    email: "vishal@yopmail.com",
    password: "vishal@123"
  },
  {
    email: "johndoe@yopmail.com",
    password: "johndoe@123"
  },
];

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null; 
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout, clearError } = authSlice.actions;

// Selector
export const selectAuth = (state) => state.auth;

// This is a thunk that directly checks credentials
export const login = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  
  try {
    const user = whitelistedUsers.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );
    
    if (user) {
      // We don't want to store the password in state
      const { password, ...userWithoutPassword } = user;
      dispatch(loginSuccess(userWithoutPassword));
      return true;
    } else {
      dispatch(loginFailure('Invalid email or password'));
      return false;
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
    return false;
  }
};

export default authSlice.reducer;
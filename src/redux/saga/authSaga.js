import { takeLatest, put, call } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../slices/authSlice';

// Mock user data for authentication (as specified in the assignment)
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

// Worker saga for login
function* loginSaga(action) {
  try {
    const { email, password } = action.payload;
    
    // Check if user exists in whitelisted users
    const user = whitelistedUsers.find(
      (user) => user.email === email && user.password === password
    );
    
    if (user) {
      // Don't include password in the state
      const { password, ...userInfo } = user;
      yield put(loginSuccess(userInfo));
    } else {
      yield put(loginFailure('Invalid email or password'));
    }
  } catch (error) {
    yield put(loginFailure(error.message || 'Login failed'));
  }
}

// Watcher saga for auth
export default function* authSaga() {
  yield takeLatest('auth/loginRequest', loginSaga);
}
import { all } from 'redux-saga/effects';
import contactSaga from './contactSaga';
import authSaga from './authSaga';
import productSaga from './productSaga';

export default function* rootSaga() {
  yield all([
    contactSaga(),
    authSaga(),
    productSaga(),
    // Add more sagas here as needed
  ]);
}                                                           
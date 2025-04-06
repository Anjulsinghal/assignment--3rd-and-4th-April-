import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../slices/productSlice';
import axios from 'axios';

// Worker saga for fetching products
function* fetchProductsSaga() {
  try {
    // Make an API call to fetch products
    const response = yield call(axios.get, 'https://fakestoreapi.com/products');
    
    // Dispatch success action with the fetched products
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    // Dispatch failure action if there's an error
    yield put(fetchProductsFailure(error.message || 'Failed to fetch products'));
  }
}

// Watcher saga for products
export default function* productSaga() {
  yield takeLatest(fetchProductsStart.type, fetchProductsSaga);
}
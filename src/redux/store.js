import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import authReducer from './slices/authSlice';
import contactReducer from './slices/contactSlice';
import rootSaga from './saga';
import productReducer from './slices/productSlice';

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'contact'], // only auth will be persisted
};

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(sagaMiddleware),
});

// Run saga
sagaMiddleware.run(rootSaga);

// Create persistor
export const persistor = persistStore(store);
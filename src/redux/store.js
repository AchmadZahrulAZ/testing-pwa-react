import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { composeWithDevTools } from '@redux-devtools/extension';
import todoReducer from './async/todos/reducer';
import langReducer from './lang/reducer';

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_SECRET_KEY,
  onError: (error) => {
    console.log('Encryption error:', error);
  },
});

const rootReducer = combineReducers({
  todo: todoReducer,
  lang: langReducer,
});

// configurasi redux persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo'], // state yang dimasukkan ke local storage
  // blacklist: [], // state yang tidak dimasukkan ke local storage
  transforms: [encryptor],
};

// redux thunk
const logMiddleware = (store) => (next) => (action) => {
  console.log("action:", action);
  next(action);
};

// redux persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const store = createStore(
  persistedReducer, 
  composeWithDevTools(applyMiddleware(thunk, logMiddleware))
);

// Persist store
const persistor = persistStore(store);

export { store, persistor };

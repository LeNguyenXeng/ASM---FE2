import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartReducer from "./reducer";

// Define the persist configuration
const persistConfig = {
  key: 'root', // key for the persisted data
  storage,     // storage engine for persisting the data
};

// Create a persisted reducer using the persist configuration and your root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store using the persisted reducer
const store = createStore(persistedReducer);

// Create a persistor to manage the storage
const persistor = persistStore(store);

export { store, persistor };
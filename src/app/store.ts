import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Utilise localStorage
import { persistReducer, persistStore } from "redux-persist";
import { userReducer } from "./features/user";
import { tweetReducer } from "./features/tweet";

// 1️⃣ Configuration de redux-persist
const persistConfig = {
  key: "root", // Nom de la clé dans localStorage
  storage, // Stockage utilisé (localStorage)
  whitelist: ["user"], // ✅ Seul "user" sera persistant (évite de stocker les tweets)
};

// 2️⃣ Combiner les reducers
const rootReducer = combineReducers({
  user: userReducer,
  tweet: tweetReducer,
});

// 3️⃣ Appliquer persistReducer au rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ Création du store Redux
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 🔴 Important pour éviter des erreurs Redux Persist
    }),
});

// 5️⃣ Création du persistor pour gérer la persistance
export const persistor = persistStore(store);

// ✅ Typage correct du RootState et AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

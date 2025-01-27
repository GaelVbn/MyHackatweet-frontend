"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // ✅ Import du PersistGate
import { store, persistor } from "./store"; // 🔄 Import du persistor

interface Props {
  children: ReactNode;
}

const ReduxProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;

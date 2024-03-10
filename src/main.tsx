import React from "react";
import ReactDOM from "react-dom/client";
import BookProvider from "./contexts/BookContext";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>,
);

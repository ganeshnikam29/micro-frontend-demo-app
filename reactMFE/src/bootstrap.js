import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const rootElement = document.getElementById("react-app-container");
  if (rootElement) {
    mount(rootElement);
  }
}

export { mount }
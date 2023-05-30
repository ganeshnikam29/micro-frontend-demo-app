import React from "react";
import { createRoot  } from 'react-dom/client'
import { App } from "./App";

const rootElement =document.getElementById('container-main-app');
const root = createRoot(rootElement);

root.render(<App />);
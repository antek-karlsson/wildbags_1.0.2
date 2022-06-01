import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ColorModeScript initialColorMode="light" />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

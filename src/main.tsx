import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import ApiContext from "./components/Context/ApiContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ChakraProvider>
    <ApiContext>
      <App />
    </ApiContext>
  </ChakraProvider>
  // </React.StrictMode>,
);

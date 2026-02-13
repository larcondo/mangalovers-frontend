import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "@providers/AuthProvider";
import ApolloProviderWithAuth from "@providers/ApolloProvider";
import "./index.css";
import router from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ApolloProviderWithAuth>
        <RouterProvider router={router} />
      </ApolloProviderWithAuth>
    </AuthProvider>
  </StrictMode>,
);

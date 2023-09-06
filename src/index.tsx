import React from "react";
import ReactDOM from "react-dom/client";
import { LandingPageScreen } from "./scrrens/LandingPage_screen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/client-graphql";
import { PokemonProvide } from "./context/pokemasterContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageScreen />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <PokemonProvide>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </PokemonProvide>
  </ApolloProvider>
);

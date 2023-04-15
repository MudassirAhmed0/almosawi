import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoList from "./pages/VideoList";
import VideoDetail from "./pages/VideoDetail";
import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <VideoList />,
  },
  {
    path: "video/:videoId",
    element: <VideoDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {/* <App /> */}
        <RouterProvider router={routes} />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);

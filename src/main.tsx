import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoList from "./pages/VideoList";
import VideoDetail from "./pages/VideoDetail";
import "./index.css";
import Home from "./pages/Home";
import Live from "./pages/Live";
import DVR from "./pages/DVR";
import Audio from "./pages/Audio";
import Player from "./pages/Player";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "live",
    element: <Live />,
  },
  {
    path: "dvr",
    element: <DVR />,
  },
  {
    path: "audio",
    element: <Audio />,
  },
  {
    path: "player",
    element: <Player />,
  },
  {
    path: "video",
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

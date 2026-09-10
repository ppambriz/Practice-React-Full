import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLightght'
// import { TrafficLightEffect } from "./02-useEffect/TrafficLightghtWithEffect";

import "./index.css";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightghtWithHook";
// import { PokemonPage } from "./03-examples/PokemonPage";
import { FocusScreen } from "./04-useRef/FocusScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <TrafficLight /> */}
    {/* {<TrafficLightEffect />} */}
    {/* <TrafficLightWithHook/> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>,
);

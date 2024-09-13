import {Canvas} from "@react-three/fiber";
import React from "react";
import "./style.css"
import {OrbitControls} from "@react-three/drei";
import MacContainer from "./MacContainer.jsx";


const App = () => {
  return <Canvas camera={{fov:20, position: [0, -2, 120] }}>
    <OrbitControls/>
    <MacContainer/>
  </Canvas>
    
  
};

export default App;
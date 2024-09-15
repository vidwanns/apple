import {Canvas} from "@react-three/fiber";
import React from "react";
import "./style.css"
import {Environment, OrbitControls} from "@react-three/drei";
import MacContainer from "./MacContainer.jsx";


const App = () => {
  return <Canvas camera={{fov:20, position: [0, -1, 120] }}>
    <OrbitControls/>
    <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
    ]}/>
    <MacContainer/>
  </Canvas>
    
  
};

export default App;
import {Canvas} from "@react-three/fiber";
import React from "react";
import "./style.css"
import {Environment, OrbitControls, ScrollControls} from "@react-three/drei";
import MacContainer from "./MacContainer.jsx";


const App = () => {
  return (
  <div className= "w-full h-screen">
    <div className="absolute flex flex-col items-center text-white top-56 left-1/2 -translate-x-1/2 font-family:'Helvetica Now Display'">
    <h3 className="masked text-7xl tracking-tighter font-[700]">Macbook pro.</h3>
    <h5>Oh so pro ! </h5>
    <p className="text-center w-3/4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti esse aperiam laudantium laboriosam perferendis perspiciatis illum adipisci temporibus
    </p>
    </div>
  <Canvas camera={{fov:12, position: [0, -10, 220] }}>
    <OrbitControls/>
    <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
    ]}
    />
    <ScrollControls pages={3}>
    <MacContainer/>
    </ScrollControls>
  </Canvas>
  </div>
  );
};

export default App;
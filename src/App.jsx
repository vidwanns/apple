import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, ScrollControls, OrbitControls } from "@react-three/drei";
import MacContainer from "./MacContainer.jsx";

const App = () => {
  return (
    <div className="w-full h-screen font-family:'Helvetica Now Display'">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "iPhone",
          "iPad",
          "services",
          "ios",
          "mac",
          "products",
          "iPhone",
          "iPad",
          "services",
        ].map((e, index) => (
          <a
            key={index}
            href=""
            className="text-white font-[300] text-sm capitalize"
          >
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-56 left-1/2 -translate-x-1/2">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          Macbook pro.
        </h3>
        <h5>Oh so pro!</h5>
        <p className="text-center w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti esse
          aperiam laudantium laboriosam perferendis
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        {/* Disable zoom and rotation in OrbitControls */}
        <OrbitControls enableZoom={false} enableRotate={false} />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        {/* ScrollControls setup */}
        <ScrollControls pages={3} damping={0.9}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};
export default App;

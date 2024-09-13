import { useGLTF } from '@react-three/drei';
import React from 'react'

const MacContainer = () => {
    let model = useGLTF('./mac.glb');
  return <primitive object={model.scene}/>;
};

export default MacContainer;
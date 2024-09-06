import { PerspectiveCamera, View } from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import Iphone from "./Iphone";


const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2
      } ? 'right-[-100%] : ''`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera make makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<div>Loading</div>}>
        <Iphone />
      </Suspense>
    </View>
  );
};

export default ModelView;

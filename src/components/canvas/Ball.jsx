/* eslint-disable react/no-unknown-property */
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./Loader";
import { Suspense } from "react";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6, 25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, classname }) => {
  return (
    <div className={`ball-3D-container ${classname}`}>
      <Canvas
        className="ball-3D"
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;

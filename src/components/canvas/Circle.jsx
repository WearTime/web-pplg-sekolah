/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./Loader";

const CirclePurple = () => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  const computer = useGLTF("./circle/circle-purple.glb");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight intensity={1.4} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        // shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={9}
        position={[-13, -0.5, 14.5]}
        rotation={[-0.01, -0.2, -0.1]}
        // onCreated={(object) => {
        //   object.material.clippingPlanes = [
        //     new Plane(new Vector3(10, 110, -10), 1),
        //   ];
        //   object.material.clipIntersection = true;
        // }}
      />
    </mesh>
  );
};

const CirclePurpleCanvas = () => {
  return (
    <div className="circle-3D-container">
      <Canvas
        className="circle-3D"
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <CirclePurple />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};
export default CirclePurpleCanvas;

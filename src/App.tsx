import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MoonMesh from "./component/moon";
import StarMesh from "./component/star.mesh";

const positions = Array.from({ length: 1000 }, (_, index) => [
  Math.random() * 20 - 10, // Random X position between -10 and 10
  Math.random() * 20 - 10, // Random Y position between -10 and 10
  Math.random() * 20 - 10, // Random Z position between -10 and 10
]);

function App() {
  return (
    <div className="w-full h-screen ">
      <Canvas>
        <color attach="background" args={["black"]} />
        <OrbitControls
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <ambientLight intensity={0.5} />
        <directionalLight color={"white"} position={[20, 10, 10]} />

        <MoonMesh />
        {positions.map((position, index) => {
          return <StarMesh key={index} position={position} />;
        })}
      </Canvas>
    </div>
  );
}

export default App;

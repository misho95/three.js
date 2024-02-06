import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="w-full h-screen ">
      <Canvas>
        <color attach="background" args={["#141622"]} />
        <OrbitControls autoRotate={true} enableZoom={false} enablePan={false} />
        <mesh>
          <ambientLight intensity={0.1} />
          <directionalLight position={[5, 10, 10]} />
          <sphereGeometry args={[1.5, 64, 32]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;

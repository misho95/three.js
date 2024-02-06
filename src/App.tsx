import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";

function App() {
  const loader = new TextureLoader();
  const loadedTexture = loader.load("src/assets/moon.jpg");

  return (
    <div className="w-full h-screen ">
      <Canvas>
        <color attach="background" args={["#141622"]} />
        <OrbitControls autoRotate={true} enableZoom={false} enablePan={false} />
        <mesh>
          <ambientLight intensity={0.1} />
          <directionalLight position={[5, 10, 10]} />
          <sphereGeometry args={[1.5, 64, 32]} />
          <meshStandardMaterial color={"white"} map={loadedTexture} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;

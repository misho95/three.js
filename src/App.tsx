import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlanetMesh from "./component/planet";
import Header from "./component/header";

function App() {
  return (
    <div className="w-full h-screen ">
      <Header />
      <Canvas
        style={{
          background: "url(src/assets/stars.jpg) center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <OrbitControls
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <PlanetMesh />
      </Canvas>
    </div>
  );
}

export default App;

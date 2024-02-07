import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlanetMesh from "./component/planet";
import StarMesh from "./component/star.mesh";
import Header from "./component/header";

const stars = Array.from({ length: 2000 }, (_, index) => ({
  position: [
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
  ],
  size: Math.random() * (0.009 - 0.001) + 0.001,
}));

function App() {
  return (
    <div className="w-full h-screen ">
      <Header />
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
        <PlanetMesh />
        {stars.map((s, index) => {
          return <StarMesh key={index} position={s.position} size={s.size} />;
        })}
      </Canvas>
    </div>
  );
}

export default App;

import { TextureLoader } from "three";

const MoonMesh = () => {
  const loader = new TextureLoader();
  const loadedTexture = loader.load("src/assets/moon.jpg");
  return (
    <>
      <group>
        <mesh>
          <sphereGeometry args={[1.5, 64, 32]} />
          <meshBasicMaterial color={"white"} map={loadedTexture} />
        </mesh>
      </group>
    </>
  );
};

export default MoonMesh;

import { TextureLoader } from "three";

const MoonMesh = () => {
  const loader = new TextureLoader();
  const loadedTexture = loader.load("src/assets/moon.jpg");
  return (
    <>
      <group>
        <mesh>
          <sphereGeometry args={[1.5, 64, 32]} />
          <meshStandardMaterial color={"white"} map={loadedTexture} />
        </mesh>
        <hemisphereLight args={[0xffffbb, 0x080820, 1]} />
      </group>
    </>
  );
};

export default MoonMesh;

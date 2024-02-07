import { TextureLoader } from "three";
import { usePlanet } from "../utils/global.store";

const PlanetMesh = () => {
  const { planet } = usePlanet();
  const loader = new TextureLoader();
  const loadedTextureMoon = loader.load("src/assets/moon.jpg");
  const loadedTextureMars = loader.load("src/assets/mars.jpg");
  const loadedTextureEarth = loader.load("src/assets/earth.jpg");

  return (
    <>
      <group>
        <mesh>
          <sphereGeometry args={[1.5, 64, 32]} />
          <meshBasicMaterial
            color={"white"}
            map={planet === "moon" ? loadedTextureMoon : loadedTextureMars}
          />
        </mesh>
      </group>
    </>
  );
};

export default PlanetMesh;

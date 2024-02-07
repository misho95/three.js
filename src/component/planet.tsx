import { TextureLoader } from "three";
import { useDark, usePlanet } from "../utils/global.store";

const PlanetMesh = () => {
  const { dark } = useDark();

  const { planet } = usePlanet();
  const loader = new TextureLoader();
  const loadedTextureMoon = loader.load("src/assets/moon.jpg");
  const loadedTextureMars = loader.load("src/assets/mars.jpg");
  const loadedTextureEarth = loader.load("src/assets/earth.jpg");
  const loadedTextureEarthNight = loader.load("src/assets/earth_night.jpg");
  const loadedTextureEarthClouds = loader.load("src/assets/earth_clouds.jpg");
  return (
    <>
      <group>
        <mesh>
          <sphereGeometry args={[1.5, 64, 32]} />
          <meshBasicMaterial
            color={"white"}
            map={
              planet === "moon"
                ? loadedTextureMoon
                : planet === "mars"
                ? loadedTextureMars
                : dark
                ? loadedTextureEarthNight
                : loadedTextureEarth
            }
          />
        </mesh>
        {planet === "earth" && (
          <mesh>
            <sphereGeometry args={[1.5 * 1.01, 32, 32]} />
            <meshBasicMaterial
              map={loadedTextureEarthClouds}
              transparent
              opacity={dark ? 0.2 : 0.5}
            />
          </mesh>
        )}
      </group>
    </>
  );
};

export default PlanetMesh;

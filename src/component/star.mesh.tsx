import { useSpring, animated, config } from "@react-spring/three";

type PropsType = {
  position: any;
  size: any;
};

const StarMesh = ({ position, size }: PropsType) => {
  const randomDelay = Math.round(Math.random() * 1000);

  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    loop: true,
    delay: randomDelay,
    config: { ...config.wobbly, duration: 50 },
  });

  return (
    <animated.mesh position={position} scale={scale}>
      <pointLight
        color={0xff0040}
        position={position}
        intensity={400}
        power={400}
        decay={2}
        distance={0.0}
        castShadow={false}
      />
      <sphereGeometry args={[size, 16, 8]} />
      <meshBasicMaterial color={0xffffff} transparent={true} />
    </animated.mesh>
  );
};

export default StarMesh;

type PropsType = {
  position: any;
  size: any;
};

const StarMesh = ({ position, size }: PropsType) => {
  return (
    <group>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color="white" metalness={0.7} roughness={100} />
      </mesh>
      <lightProbe />
    </group>
  );
};

export default StarMesh;

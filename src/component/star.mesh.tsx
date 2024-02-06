type PropsType = {
  position: any;
};

const StarMesh = ({ position }: PropsType) => {
  return (
    <group>
      <mesh position={position}>
        <sphereGeometry args={[0.01, 32, 32]} />
        <meshStandardMaterial color="white" metalness={1} roughness={0} />
      </mesh>
    </group>
  );
};

export default StarMesh;

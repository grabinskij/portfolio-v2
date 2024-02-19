import React from 'react';
import { Sphere } from "@react-three/drei";


const Star = ({ position }) => {
    return (
        <Sphere args={[0.2, 14, 14]} position={position}>
            <meshStandardMaterial color={0xffffff} />
        </Sphere>
    );
};

export default Star;


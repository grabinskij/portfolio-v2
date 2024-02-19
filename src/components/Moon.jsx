import React, { useMemo } from 'react';
import {Float, Sphere, useGLTF} from "@react-three/drei";
import * as THREE from "three";

const Moon = () => {
    const moonTexture = useMemo(() => new THREE.TextureLoader().load('textures/moon.jpg'), []);

    return (
        <Float>
            <mesh>
                <Sphere args={[3, 22, 22]}>
                    <meshStandardMaterial map={moonTexture} />
                </Sphere>
            </mesh>
        </Float>
    );
};

export default Moon;

import {Sphere, useScroll} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";


export const Background = () => {
    const material = useRef();
    const color = useRef({
        color: "#d399e7",
    });
    const data = useScroll();

    const tl = useRef();

    useFrame(() => {
        tl.current?.progress(data.scroll.current);
        material.current.color = new THREE.Color(color.current.color);
    });

    useEffect(() => {
        tl.current = gsap.timeline();
        tl.current.to(color.current, {
            color: "rgb(199,140,140)",
        });
        tl.current.to(color.current, {
            color: "#7297d6",
        });
        tl.current.to(color.current, {
            color: "#88d4ca",
        });
    }, []);

    return (
        <group>
            <Sphere scale={[30, 30, 30]}>
                <meshBasicMaterial
                    ref={material}
                    side={THREE.BackSide}
                    toneMapped={false}
                />
            </Sphere>
        </group>
    );
};


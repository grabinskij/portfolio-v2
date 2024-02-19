import {useScroll} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, {useEffect, useRef, useState, Suspense} from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Background } from "./Background";
import { Office } from "./Office";
import { Projects } from "./Projects";
const LazyStar = React.lazy(() => import('./Star').then(module => ({ default: module.default })));


export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const [section, setSection] = useState(0);


  const cameraPositionX = useMotionValue(1);
  const cameraLookAtX = useMotionValue(1);


  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();
  const characterGroup = useRef();
  const starsRef = useRef();
  const floatingSphereRef = useRef();


  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);


  const stars = Array(40).fill().map(() => ({
    x: (Math.random() - 0.5) * 20,
    y: (Math.random() - 0.5) * 20,
    z: (Math.random() - 0.5) * 20,
  }));


  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);


    if (section === 0) {
      characterContainerAboutRef.current.getWorldPosition(
          characterGroup.current.position
      );

      if (section === 0) {
        starsRef.current.children.forEach((star, index) => {
          star.position.set(
              5 + stars[index].x,
              -5 + stars[index].y,
              -20 + stars[index].z
          );
        });

        floatingSphereRef.current.position.set(30, -4, -15);

      } else {
        starsRef.current.children.forEach((star, index) => {
          star.position.set(0, 0, 0);
        });

        floatingSphereRef.current.position.set(0, 0, 0);
        floatingSphereRef.current.scale.set(0, 0, 0);
      }
    }
  });

  const [Moon, setMoon] = useState(null);

  useEffect(() => {
    const importMoon = async () => {
      const moonModule = await import('./Moon');
      setMoon(() => moonModule.default);
    };
    importMoon();
  }, []);

  return (
    <>
      <Background />
      <motion.group
        ref={characterGroup}
        rotation={[-3.141592653589793, 5.6053981633974482, 3.241592653589793]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: officeScaleRatio,
            scaleY: officeScaleRatio,
            scaleZ: officeScaleRatio,
          },
          1: {
            y: isMobile ? -viewport.height + 0.6 : -viewport.height + 0.2,
            x: isMobile ? -0.3 : -0.9,
            z: 7,
            rotateX: 0,
            rotateY: isMobile ? Math.PI / 2 : 0.9,
            rotateZ: 0,
            scaleX: isMobile ? 0.75 : 1,
            scaleY: isMobile ? 0.75 : 1,
            scaleZ: isMobile ? 0.75 : 1,
          },
          2: {
            x: isMobile ? 1.1 : 3.2,
            y: -viewport.height * 2.4 + 1.5,
            z: 0,
            rotateX: 0,
            rotateY: -Math.PI / 3,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.24,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>

      <ambientLight intensity={1} />

      <motion.group
        position={[
          isMobile ? 0 : 1.5 * officeScaleRatio,
          isMobile ? -viewport.height / 6 : 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height / 6 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[-0.4, 0.05, -0.77]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>

        <motion.group ref={starsRef}
                      animate={{
                        scale: section === 0 ? 1 : 0,
                      }}
                      transition={{duration: 2.5}}

        >
          {LazyStar &&
        stars.map((_, index) => (
            <LazyStar key={index} />
        ))}
        </motion.group>

        <motion.group
            ref={floatingSphereRef}
            animate={{
              scale: section === 0 ? (2,2,2) : 0,
            }}
            transition={{ duration: 2 }}
        >
          <Suspense fallback={null}>
            {Moon && <Moon />}
          </Suspense>
        </motion.group>
      </motion.group>

      <Projects />
    </>
  );
};

import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import React, { useEffect,  useMemo } from "react";

import * as THREE from "three";

export function Office(props) {
  const { section } = props;
  const { nodes, materials } = useGLTF("models/scene.glb");

  const texture = useTexture("textures/lightmap.jpg");

  const textureVSCode = useVideoTexture("textures/code_video.mp4");
  const textureFireplace = useVideoTexture("textures/fire.mp4");

  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  const textureOpacity = useMotionValue(0);
  const glassTextureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0, {
      duration: 0.8,
    });
    animate(glassTextureOpacity, section === 0 ? 0.42 : 0, {
      duration: 0.8,
    });
  }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
    textureGlassMaterial.opacity = glassTextureOpacity.get();
  });

  return (
      <group {...props} dispose={null}>
          <group name="RootNode" scale={0.321}>
              <mesh
                  name="Fireplace"
                  castShadow
                  receiveShadow
                  geometry={nodes.Fireplace.geometry}
                  material={textureMaterial}
                  position={[5.065, 0, -5.011]}
                  rotation={[-Math.PI / 2, 0, -0.813]}
              />
          </group>
          <mesh
              name="desk"
              castShadow
              receiveShadow
              geometry={nodes.desk.geometry}
              material={textureMaterial}
              position={[-1.207, -0.044, -1.158]}
              rotation={[Math.PI, -0.008, Math.PI]}
          >
              <mesh
                  name="desk_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.desk_1.geometry}
                  material={textureMaterial}
                  scale={2.225}
              />
              <mesh
                  name="drawer_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.drawer_1.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="drawer_1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.drawer_1_1.geometry}
                  material={textureMaterial}
              />
          </mesh>
          <group
              name="laptop"
              position={[-0.639, 0.813, -1.243]}
              rotation={[-Math.PI, 0.05, -Math.PI]}
          >
              <mesh
                  name="laptop_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.laptop_2.geometry}
                  material={textureMaterial}
              />
          </group>
          <group name="RootNode005" position={[1.414, 0, 1.267]}>
              <group
                  name="Houseplant_7"
                  position={[-3.121, 0, -2.941]}
                  rotation={[-Math.PI / 2, 0, -0.778]}
              >
                  <mesh
                      name="Houseplant_7_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Houseplant_7_1.geometry}
                      material={textureMaterial}
                  />
                  <mesh
                      name="Houseplant_7_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Houseplant_7_2.geometry}
                      material={textureMaterial}
                  />
                  <mesh
                      name="Houseplant_7_3"
                      castShadow
                      receiveShadow
                      geometry={nodes.Houseplant_7_3.geometry}
                      material={textureMaterial}
                  />
              </group>
          </group>
          <group name="lampSquareTable" position={[1.867, 0.97, -1.496]}>
              <mesh
                  name="lampSquareTable_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.lampSquareTable_2.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="lampSquareTable_2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.lampSquareTable_2_1.geometry}
                  material={textureMaterial}
              />
          </group>
          <group name="cupThea" position={[-0.913, 0.808, -1.34]}>
              <mesh
                  name="cupThea_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.cupThea_1.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="cupThea_1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.cupThea_1_1.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="cupThea_1_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.cupThea_1_2.geometry}
                  material={textureMaterial}
              />
          </group>
          <group name="RootNode012" scale={0.292}>
              <mesh
                  name="Environment_Cabinet_Shelves_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Environment_Cabinet_Shelves_2.geometry}
                  material={textureMaterial}
                  position={[-1.685, 6.16, -6.117]}
              />
          </group>
          <group name="rugRound" position={[0.518, 0.004, -0.326]}>
              <mesh
                  name="rugRound_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.rugRound_2.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="rugRound_2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.rugRound_2_1.geometry}
                  material={textureMaterial}
              />
          </group>
          <group
              name="RootNode006"
              position={[0.449, 0, 0.768]}
              rotation={[Math.PI, -1.16, Math.PI]}
              scale={0.38}
          >
              <group
                  name="Couch_Small1"
                  position={[0.673, 0, -1.991]}
                  rotation={[-Math.PI / 2, 0, -0.233]}
                  scale={100}
              >
                  <mesh
                      name="Couch_Small1_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Couch_Small1_1.geometry}
                      material={textureMaterial}
                  />
                  <mesh
                      name="Couch_Small1_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Couch_Small1_2.geometry}
                      material={textureMaterial}
                  />
              </group>
          </group>
          <mesh
              name="Screen"
              castShadow
              receiveShadow
              geometry={nodes.Screen.geometry}
              position={[-0.639, 0.813, -1.243]}
              rotation={[-Math.PI, 0.05, -Math.PI]}
          >
              <meshBasicMaterial map={textureVSCode} toneMapped={false} />

          </mesh>
          <mesh
              name="FireFace"
              castShadow
              receiveShadow
              geometry={nodes.FireFace.geometry}
              position={[1.656, 0.493, -1.623]}
              rotation={[1.575, 0.004, 0.799]}
              scale={[0.345, 0.346, 0.215]}
          >
              <meshBasicMaterial map={textureFireplace} toneMapped={false} />

          </mesh>
          <group
              name="OfficeChair"
              position={[-0.251, 0, -0.928]}
              rotation={[-Math.PI / 2, 0, 3.083]}
          >
              <mesh
                  name="OfficeChair_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.OfficeChair_1.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="OfficeChair_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.OfficeChair_2.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="OfficeChair_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.OfficeChair_3.geometry}
                  material={textureMaterial}
              />
          </group>
          <group
              name="Houseplant_2"
              position={[-1.035, 0.808, -1.896]}
              rotation={[-Math.PI / 2, 0, 0]}
          >
              <mesh
                  name="Houseplant_2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Houseplant_2_1.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="Houseplant_2_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Houseplant_2_2.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="Houseplant_2_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Houseplant_2_3.geometry}
                  material={textureMaterial}
              />
              <mesh
                  name="Houseplant_2_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Houseplant_2_4.geometry}
                  material={textureMaterial}
              />
          </group>
          <mesh
              name="Mouse"
              castShadow
              receiveShadow
              geometry={nodes.Mouse.geometry}
              material={textureMaterial}
              position={[0.182, 0.81, -1.462]}
          />
          <group
              name="Lantern"
              position={[-0.417, 2.091, -1.728]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={9.786}
          >
              <mesh
                  name="Circle"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle.geometry}
                  material={textureMaterial}
                  position={[0, 0.01, 0]}
              />
              <mesh
                  name="Cube"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube.geometry}
                  material={textureMaterial}
                  position={[0, 0.01, 0.016]}
              />
              <mesh
                  name="Sphere"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere.geometry}
                  material={textureMaterial}
                  position={[0, 0.01, 0]}
              />
          </group>
          <mesh
              name="Plane_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane_1.geometry}
              material={textureMaterial}
          />
          <mesh
              name="Plane_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane_2.geometry}
              material={textureMaterial}
          />
      </group>
  );
}
useGLTF.preload("models/scene.glb");
useTexture.preload("textures/lightmap.jpg");

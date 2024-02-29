import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Landing page Clothing store",
    url: "https://clothing-store-fashion.vercel.app",
    image: "projects/fashion.png",
  },
  {
    title: "Landing page Lawyer service",
    url: "https://lawyer-site-xi.vercel.app",
    image: "projects/law.png",
  },
  {
    title: "Previous portfolio",
    url: "https://react-portfolio-previous.vercel.app",
    image: "projects/portfolio.png",
  },
  {
    title: "Wordpress Landing page",
    url: "https://construction-service.vercel.app",
    image: "projects/houses.png",
  },
  {
    title: "E-Commerce Next.js Admin App",
    url: "https://admin-ecommerce-six-lemon.vercel.app",
    image: "projects/toys-admin.png",
  },
  {
    title: "E-Commerce Next.js Front-End App",
    url: "https://front-ecommerce-sigma.vercel.app",
    image: "projects/toys-shop.png",
  },
  {
    title: "E-Commerce React App",
    url: "https://sneakers-store-x.vercel.app",
    image: "projects/sneakers.png",
  },
  {
    title: "Landing page Educational courses",
    url: "https://dev-school-site.vercel.app",
    image: "projects/course.png",
  },
  {
    title: "To-do list App",
    url: "https://awesome-todo-list-app.vercel.app",
    image: "projects/todo.png",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.8 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.2}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.8, 2.6]} />
        <meshBasicMaterial color="black" transparent />
      </mesh>
      <Image
        scale={[2.5, 1.7, 1.5]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
        position-z={-0.1}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.16}
        position={[-1.2, -0.7, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);


  return (
    <group position-y={-viewport.height * 2.3 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 3,
            y: currentProject === index ? 1 : 0.9,
            z: currentProject === index ? -0.1 : -0.4,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};

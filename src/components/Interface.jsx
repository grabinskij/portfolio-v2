import {ValidationError, useForm} from "@formspree/react";
import {motion} from "framer-motion";
import {useAtom} from "jotai";
import {currentProjectAtom, projects} from "./Projects";


const Section = (props) => {
    const {children, mobileTop} = props;

    return (
        <motion.section
            className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
            initial={{
                opacity: 0,
                y: 70,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6,
                },
            }}
        >
            {children}
        </motion.section>
    );
};

export const Interface = (props) => {
    const {setSection} = props;

    return (
        <div className="flex flex-col flex-end items-center w-screen">
            <AboutSection setSection={setSection}/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </div>
    );
};

const AboutSection = (props) => {
    const {setSection} = props;
    return (
        <Section mobileTop>
            <h1 className="text-2xl md:text-6xl font-extrabold leading-snug mt-2 md:mt-8 lg:mt-0">
                Hello, I'm
                <br/>
                <div className="my-2 md:my-4 bg-white p-2 md:p-4 rounded-xl">
                    <span className="px-1 italic">Bohdan</span>
                    <span className="px-1 italic block">Hrabynskyi</span>
                </div>
            </h1>
            <motion.p
                className="text-md md:text-xl text-gray-800 font-bold mt-1 md:mt-4"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
            >
                I'm an enthusiastic web developer,
                <br/>
                passionate about crafting websites and apps.
            </motion.p>
            <motion.button
                onClick={() => setSection(3)}
                className={`bg-indigo-800 text-white py-2 px-4 md:py-6 md:px-10 
      rounded-lg font-bold text-lg md:text-2xl mt-4 md:mt-16`}
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
            >
                Contact me
            </motion.button>
        </Section>
    );
};

const skills = [
    {
        title: "HTML5",
        bg: "bg-sky-600",
        position: {x: '91', y: '300'}

    },
    {
        title: "CSS3",
        bg: "bg-purple-600",
        position: {x: '239', y: '445'}

    },
    {
        title: "SCSS",
        bg: "bg-fuchsia-600",
        position: {x: '246', y: '295'}
    },
    {
        title: "JavaScript",
        bg: "bg-red-600",
        position: {x: '69', y: '159'}

    },
    {
        title: "React",
        bg: "bg-orange-600",
        position: {x: '180', y: '74'}

    },
    {
        title: "Redux",
        bg: "bg-indigo-600",
        position: {x: '140', y: '372'}
    },
    {
        title: "REST API",
        bg: "bg-pink-600",
        position: {x: '180', y: '150'}


    },
    {
        title: "NextJS",
        bg: "bg-violet-600",
        position: {x: '15', y: '330'}

    },
    {
        title: "MongoDB",
        bg: "bg-lime-600",
        position: {x: '40', y: '456'}

    },
];


const SkillsSection = () => {
    const blockWidth = 55;
    const blockHeight =40;

    const getRandomPosition = () => {
        const randomX = Math.floor(Math.random() * (100 - blockWidth));
        const randomY = Math.floor(Math.random() * (100 - blockHeight));
        return {
            x: `${randomX}vw`,
            y: `${randomY}vh`,
        };
    };

    return (
        <Section>
            <motion.div className="flex h-screen justify-end p-4 w-full relative">
                <motion.div
                    className="p-4 mx-auto"
                    whileInView={"visible"}
                >
                    <motion.h2
                        className="flex p-4 md:p-0 justify-center rounded-xl md:w-96 md:h-20 items-center bg-white md:text-4xl font-extrabold"
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 1,
                        }}
                    >
                        My skills
                    </motion.h2>
                    {skills.map((skill, index) => (
                        <motion.div
                            className={`md:w-24 md:h-24 w-16 h-16 ${skill.bg} flex justify-center items-center rounded-full bg-opacity-60 absolute`}
                            key={index}
                            initial={{
                                opacity: 0,
                                ...getRandomPosition(),
                            }}
                            animate={{
                                opacity: 1,
                                ...getRandomPosition(),
                                transition: {
                                    duration: 1,
                                    delay: 1 + index * 0.2,
                                },
                            }}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.3 + index * 0.2,
                                    },
                                },
                            }}
                        >
                            <motion.h3
                                className="text-xs md:text-md font:medium md:font-black p-4 relative"
                            >
                                {skill.title}
                            </motion.h3>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    );
};

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    return (
        <Section>
            <div className="flex w-full h-full gap-4 md:gap-10 items-center justify-center text-white mt-28 md:mt-72">
                <button
                    className="text-xs md:text-xl hover:text-indigo-800 transition-colors"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-xl md:text-6xl font-bold uppercase">Projects</h2>
                <button
                    className="text-xs md:text-xl hover:text-indigo-800 transition-colors"
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    );
};

const ContactSection = () => {
    const [state, handleSubmit] = useForm("mpzvqzry");
    return (
        <Section>
            <h2 className="md:ml-14 text-3xl md:text-5xl font-black">Contact me</h2>
            <div className="mt-10 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
                {state.succeeded ? (
                    <p className="text-gray-900 text-center">Thanks for your message!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-800 p-3"
                        />
                        <label
                            htmlFor="email"
                            className="font-medium text-gray-900 block mb-1 mt-8"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-800 p-3"
                        />
                        <ValidationError
                            className="mt-1 text-red-500"
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label
                            htmlFor="email"
                            className="font-medium text-gray-900 block mb-1 mt-8"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-800 p-3"
                        />
                        <ValidationError
                            className="mt-1 text-red-500"
                            errors={state.errors}
                        />
                        <button
                            disabled={state.submitting}
                            className="bg-indigo-800 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </Section>
    );
};
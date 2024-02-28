import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import {framerMotionConfig} from "../config";
import {ScrollManager} from "./ScrollManager";
import {Experience} from "./Experience";
import {Interface} from "./Interface";
import {Menu} from "./Menu";



function Home(started) {
    const [section, setSection] = useState(0);
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        setMenuOpened(false);
    }, [section]);
    return (
        <div className="home-container">
        <MotionConfig
            transition={{
                ...framerMotionConfig,
            }}
        >
            <Canvas shadows camera={{ position: [0, 3, 10], fov: 32 }}>
                <ScrollControls pages={4} damping={0.2}>
                    <ScrollManager section={section} onSectionChange={setSection} />
                    <Scroll>
                        <Suspense>
                            {started && (
                                <Experience section={section} menuOpened={menuOpened} />
                            )}
                        </Suspense>
                    </Scroll>
                    <Scroll html>
                        {started && <Interface setSection={setSection} />}
                    </Scroll>
                </ScrollControls>
            </Canvas>
            <Menu
                onSectionChange={setSection}
                menuOpened={menuOpened}
                setMenuOpened={setMenuOpened}
            />
        </MotionConfig>
        <Leva hidden />
        </div>
    );
}

export default Home;

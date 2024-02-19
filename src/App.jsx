import {Route, Routes} from 'react-router-dom';
import {useState} from "react";
import {LoadingScreen} from "./components/LoadingScreen";
import Header from "./components/Header";
import TextFile from "./components/TextFile";
import Home from "./components/Home";
import TextFile2 from "./components/TextFile2";


function App() {
    const [started, setStarted] = useState(false);
    return (
        <>
            <LoadingScreen started={started} setStarted={setStarted}/>
            <Header/>
                <Routes>
                    <Route exact path="/" element={<Home started={started}/>}/>
                    <Route path="/filetest" element={<TextFile/>}/>
                    <Route path="/filetest2" element={<TextFile2/>}/>
                </Routes>
        </>
    );
}

export default App;

import {useState} from "react";
import {LoadingScreen} from "./components/LoadingScreen";
import Header from "./components/Header";
import Home from "./components/Home";



function App() {
    const [started, setStarted] = useState(false);
    return (
        <>
            <LoadingScreen started={started} setStarted={setStarted}/>
            <Header/>
            <Home/>
        </>
    );
}

export default App;

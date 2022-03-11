import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useEffect,useState} from "react";
import App from "./App";
import Scoreboard from "./components/Scoreboard";
import Home from './components/Home'
import { getMainImage } from "./utils/getImages";

const RouteSwitch = () => {
    const [mainImage, setMainImage] = useState("");

    useEffect(()=>{
        const loadMainImage = async () => {
            setMainImage(await getMainImage(1));
          };

          loadMainImage()
    },[])

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home mainImage={mainImage} />} />
            <Route path='/game' element={<App mainImage={mainImage}/>} />
            <Route path='/scoreboard' element={<Scoreboard/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
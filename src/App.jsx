import Home from "./Component/Home"
import { Route, Routes } from "react-router-dom"
import Nav from "./Component/Nav"
import { motion } from "framer-motion";
import { useEffect,useState } from "react";

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(()=>{
    const mouseMove = e => {
       setMousePosition({
        x: e.clientX,
        y: e.clientY
       })
    }

    window.addEventListener("mousemove",mouseMove);
    return ()=>{
      window.removeEventListener("mousemove",mouseMove);
    }
  },[]);

  const variants = {
    default: {
      x: mousePosition.x-16,
      y: mousePosition.y-16

    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      
    }
  }
 
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>

      <div className="relative">
        <motion.div
          variants={variants}
          animate={cursorVariant}
          className={`fixed left-0 top-0 bg-black z-50 w-8 h-8 rounded-full pointer-events-none mix-blend-difference`} ></motion.div>

        <Nav />

        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </>
  )
}

export default App

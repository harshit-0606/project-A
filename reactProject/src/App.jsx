import { useState , useEffect } from "react";

import "./App.css";

function App() {
  const backgroundColor = localStorage.getItem("color") || "white";
  const [color, setColor] = useState(backgroundColor);

  useEffect(()=>{
    localStorage.setItem("color",color)},[color]
  )
  return (
    <>
       {/* Full screen div with dynamic background color */}
     <div className="fixed w-full h-screen" style={{ backgroundColor: color }}>
  <h1 className="text-white text-3xl text-center">Background Color: {color}</h1>
</div>

       
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg shadow-lg">
          <button
            onClick={() => setColor("black")}
            className="outline-none bg-black text-white px-2 py-2 mx-2 my-2 rounded-lg shadow-lg"
          >
            Click Me
          </button>

          <button
            onClick={() => setColor("red")}
            className="outline-none bg-red-500 text-white px-2 py-2 mx-2 my-2 rounded-lg shadow-lg"
          >
            Click Me
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none bg-blue-500 text-white px-2 py-2 mx-2 my-2 rounded-lg shadow-lg"
          >
            Click Me
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none bg-green-500 text-white px-2 py-2 mx-2 my-2 rounded-lg shadow-lg"
          >
            Click Me
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none bg-orange-500 text-white px-2 py-2 mx-2 my-2 rounded-lg shadow-lg"
          >
            Click Me
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none bg-pink-500 text-white px-2 py-2 mx-2 my-2 rounded-lg shadow-lg"
          >
            Click Me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

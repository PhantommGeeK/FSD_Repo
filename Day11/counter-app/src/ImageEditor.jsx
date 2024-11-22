import { useState } from "react";
import img from "./Images/photo-1664566484452-03b6f3817fdc.avif";

const ImageEditor = () => {
    const[width,setWidth] = useState(500);
    const[height,setHeight] = useState(400);
  return (
    <div>
        <img src={img} style={{width: `${width}px`, height:`${height}px`}}/>
        <button
            onClick={()=>{
                setWidth(width+10);
            }}>Increase Width</button>

        <button
            onClick={()=>{
                setHeight(height+10);
            }}>Increase Height</button>
    </div>
  );
};
export default ImageEditor;
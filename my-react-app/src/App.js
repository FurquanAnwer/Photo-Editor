// import './App.css';
import React,{useState} from 'react'
// const img = './fox.jpg';
const App = () => {
  const[brightness,setBrightness] = useState({
    name:"Brightness",
    property:"brightness",
    value:100,
    range:{
      min:0,
      max:200
    },
    unit:'%'
  })
  const[contrast,setContrast] = useState({
    name:"Contrast",
    property:"contrast",
    value:100,
    range:{
      min:0,
      max:200
    },
    unit:'%'
  })
  const[saturation,setSaturation] = useState({
    name:"Saturation",
    property:"saturation",
    value:100,
    range:{
      min:0,
      max:200
    },
    unit:'%'
  })
  const[grayscale,setGrayscale] = useState({
    name:"Grayscale",
    property:"grayscale",
    value:100,
    range:{
      min:0,
      max:200
    },
    unit:'%'
  })
  const[sepia,setSepia] = useState({
    name:"Sepia",
    property:"sepia",
    value:0,
    range:{
      min:0,
      max:100
    },
    unit:'%'
  })
  const[hueRotate,setHueRotate] = useState({
    name:"Hue Rotate",
    property:"hue-rotate",
    value:100,
    range:{
      min:0,
      max:360
    },
    unit:'deg'
  })
  const[blur,setBlur] = useState({
    name:"Blur",
    property:"blur",
    value:0,
    range:{
      min:0,
      max:20
    },
    unit:'px'
  })
  return (
    <div>
      <img src="./fox.jpg" alt="image not found" 
      style={
        {
          filter:
          `${brightness.property}(${brightness.value}${brightness.unit})
          ${blur.property}(${blur.value}${blur.unit})
        }
      }/>
        <input type ="range" max={brightness.range.max} min={brightness.range.min} onChange={(e)=>{setBrightness({...brightness,value:`${e.target.value}`})}} />
        <input type ="range" max={blur.range.max} min={blur.range.min} onChange={(e)=>{setBlur({...blur,value:`${e.target.value}`})}} />
        <input type ="range" max={brightness.range.max} min={brightness.range.min} onChange={(e)=>{setBrightness({...brightness,value:`${e.target.value}`})}} />

    </div>
  );
}

export default App;

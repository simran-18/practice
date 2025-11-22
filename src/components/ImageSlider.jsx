import React, { useEffect } from 'react'

const ImageSlider = () => {
 const [activeIndex , setActiveIndex]=React.useState(0);
 const slides=[
    "Image1","Image2","Image3","Image4","Image5"
 ]
 const handlePrevClick=()=>
 {
   setActiveIndex((prevIndex)=>prevIndex===0?slides.length-1:prevIndex-1)
 }
 const handleNextClick=()=>{
    setActiveIndex((prevIndex)=>(prevIndex+1)%slides.length)
 }
 useEffect(()=>
{
    const interval=setInterval(()=>{
        handleNextClick();
    },3000);
    return ()=>clearInterval(interval);
},[])
  return (
    <div className='flex'>
        <button className='m-4 p-2 bg-blue-500 text-white rounded' onClick={handlePrevClick}>Prev</button>
        {slides.map((slide,index)=>(
            <span key={index} className={`m-2 p-4 border ${index===activeIndex?'block':'hidden'}`}>{slide}</span>
        ))}
        <button className='m-4 p-2 bg-blue-500 text-white rounded' onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default ImageSlider
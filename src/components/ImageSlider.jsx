import React, { useEffect } from 'react'

const ImageSlider = () => {
 const [activeIndex , setActiveIndex]=React.useState(0);
 const slides=[
    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1670590785994-ab5e8a2ccd61?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    <div className='flex justify-center items-center'>
        <div className='m-4 p-2 bg-blue-500 text-white rounded h-fit' onClick={handlePrevClick}>Prev</div>
        {slides?.map((slide,index)=>(
            <img key={index} className={`m-2 p-4  w-48 h-48 ${index===activeIndex?'block':'hidden'}`} src={slide}/>
        ))}
        <div className='m-4 p-2 bg-blue-500 text-white rounded h-fit' onClick={handleNextClick}>Next</div>
    </div>
  )
}

export default ImageSlider

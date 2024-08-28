"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

 function  Generate() {
  const images = ['https://i.ibb.co/8Xs75xY/photo-1723130031846-79fd300e72d9.jpg' ,
    'https://i.ibb.co/r35fS8y/photo-1723279230514-c2d1401f794d.jpg' , 
    "https://i.ibb.co/LgSPD86/photo-1723130028854-1b97ca970bf6.jpg",
    "https://i.ibb.co/NL0vTHM/photo-1719937206589-d13b6b008196.jpg",
    "https://i.ibb.co/s20315X/photo-1723375386110-729a0612ab99.jpg",
    "https://i.ibb.co/fMNGTSN/photo-1723233428893-3c76be12e62c.jpg",
    "https://i.ibb.co/DW8xzFf/photo-1723477450561-791fd67efa56.jpg",
    "https://i.ibb.co/c2kmXj2/photo-1723484922189-cea7f9e0fa9a.jpg",
    "https://i.ibb.co/X3zBZPk/photo-1723444585217-56393cc4946a.jpg",
    "https://i.ibb.co/wBLsKvj/photo-1723242015936-ab12ca2626b3.jpg" 
   ] ; 
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [history , setHistory] = useState([]) ; 
  const [imageUrl , setImageUrl] = useState('') ; 

    
  let email = ""
    if (typeof window !== 'undefined') {
     email =   localStorage?.getItem('email') ;
  }



  async function sendingHisotry() {
    try {
      const response =await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/history/${email}` , {
        prompt:prompt
      })
      setHistory(response.data.history) ;
      console.log(response) ; 
      //console.log("history is "  , history) ; 
      
    } catch (error) {
      console.log("error occured while saving history" , error); 
    }

  }
  
  const generateImage = async () => {
    
    setLoading(true);
    try {
      const randomNumber = Math.floor(Math.random() * 10);
      setImageUrl(
        images[randomNumber]
      );
      await sendingHisotry(); 
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "generated-image.png"; //  specify the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // <a href={imageUrl} download="filename.jpg">
    //    </a>
    //    console.log(" clicked down load btn");
       
  };

  return (
    <div className="text-center h-screen  flex-col">
       {loading ? "Generating..." : ""}
   <div className=" border-2 border-indigo-600  h-4/6 ">
  
     {imageUrl && (
        <div className=" flex  h-full w-full flex-col items-center overflow-hidden">
          <img 
            src={imageUrl}
            alt="Generated"
            className="rounded-lg shadow-lg w-auto h-full overflow-hidden "
          />
         
        </div>
        )}





   </div>
      
      
     
   {imageUrl&&(
     <button
     onClick={downloadImage}
     className="bg-green-500 text-white px-6 py-2 my-3 rounded-lg hover:bg-green-700 transition"
   >
     Download Image
   </button>

   )}


      <div className="bg-white my-1 flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Enter your prompt...."
          className="w-full outline-none bg-white pl-4 text-sm"
        />




        <button
          type="button"
          onClick={generateImage}
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
        >
          Generate
        </button>
      </div>
      <div className="mt-6">
      <Link className="bg-blue-600 hover:bg-blue-700 transition-all text-white  rounded-full  px-5 py-2.5"
       href={`/history/${email}`}>history</Link>

      </div>
      
    </div>
  );
}

export default Generate;

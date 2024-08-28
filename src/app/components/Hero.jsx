"use client"
import React from 'react'

import { useRouter } from "next/navigation";
function Hero() {
// handle create
const router = useRouter();


function handleCreateBtn() {

  const email = localStorage.getItem("email");

  console.log("email hai kya:", email);
  
  if(email){
 router.push('/generate')
  }
  else{
    router.push('/login');
  }

    

}


  return (
    <div>
     <div className=" w-full  py-1">
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/2062480307/photo/ai-data-and-big-data-technology-business-people-calculate-analyze-and-visualize-complex.jpg?s=2048x2048&w=is&k=20&c=YHoBvDh1q062lcatbaKYySV9ghTt8bQv4lL9fCS3fo8=')`,
          }}
        >
          <div className="w-1/2 flex items-center justify-center h-screen  ">
            <div className="  text-white px-16">
              <h1 className="text-6xl  font-bold">Welcome to My App</h1>
              <p className="mt-4 text-lg">Visualize your thoughts !</p>
              <button
                onClick={handleCreateBtn}
                className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <h2 className="text-3xl font-semibold text-blue-gray-900 mb-4">
        build any thing
      </h2>
      <p className="text-blue-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
        exercitationem vitae delectus esse earum veniam voluptatum veritatis
        cupiditate, atque qui deserunt nam itaque dolor consequatur harum
        deleniti, magnam nostrum saepe. Aut libero laboriosam ea sed odio
        dolorem dicta facere! Perspiciatis aliquam, earum rem vitae veritatis
        ullam laborum. Id, officia quasi!
      </p> */}

    </div>
  )
}

export default Hero
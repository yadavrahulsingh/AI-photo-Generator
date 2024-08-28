'use client'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import SingleHistory from '@/app/components/SingleHistory'
import Link from 'next/link';

function History() {
    const [history , setHistory] = useState('') ; 
    let email = ""
    if (typeof window !== 'undefined') {
     email =   localStorage?.getItem('email') ;
  }

    async function gettingHistory() {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/history/${ email}`) ; 
          setHistory(response.data.history) ; 
          
        } catch (error) {
          console.log("error occured while getting history" , error); 
        }
    
      }
      useEffect(()=>{
        gettingHistory()
      }, [])
  return (
    <div className='h-auto w-[1280px] mx-auto mt-2'>
        <div className='flex justify-between items-center'>
          <h3 className="text-bold ">history</h3>
          <Link className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
             href={`/generate`}>Generate Images</Link>

        </div>

        {
         history ? history?.map((item , index) => {
                return (<div className='flex gap-2 flex-col mt-4  ' key={index}>
                       <SingleHistory data = {item}/>
                       <SingleHistory data = {item}/>
                       <SingleHistory data = {item}/>
                     </div>)
            })
        : <p >please show your skills to Generate images and search something</p> }
    </div>
  )
}

export default History
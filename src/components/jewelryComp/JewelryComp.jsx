
'use client'
import { gasoekOne } from "@/app/fonts/fonts"
import { traceGlobals } from "next/dist/trace/shared";

const JewelryComp = () => {
  return (
        <div className='h-screen w-full fixed bg-yellow-300  overflow-hidden'>
          <h2 className={`z-[40px]  text-[8rem] pl-20 ${gasoekOne.className} `}>HOLA TITULO</h2>
        </div>
    
  )
}

export default JewelryComp;
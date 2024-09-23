'use client'
import { class357Regular } from "@/app/fonts/fonts"
import Intersection from "../intersection/Intersection"
import { useState } from "react"

const CardPrueba = ({children, className=""}) => {

  const [isInView, setIsInView] = useState(false)
  return (
    <Intersection rootMargin="-400px"  setIsInView={setIsInView}  >
        <div className={` w-[100%] h-full transition duration-[1200ms] ${className} ${isInView ? "bg-pink-400" : "bg-yellow-400"} `} >
          {children}
        </div>
    </Intersection>
  )
}

export default CardPrueba
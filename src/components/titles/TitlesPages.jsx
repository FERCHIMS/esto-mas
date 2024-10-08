'use client'
import Intersection from "../intersection/Intersection"
import { useState, useEffect } from "react"
import TitleHeader from "../titles/TitleHeader";
import Image from "next/image";
import { chesnaRegular, class357Regular } from "@/app/fonts/fonts";


const TitlesPages = ({textito, textito2}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {

            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    
    return (


        <div className={` w-full fixed z-20 pr-10  overflow-hidden transition-all duration-[1800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1))] ${isScrolled ? "h-[0vh] opacity-0 " : "h-screen opacity-100 "} `}>
            <div className=" w-full items-center gap-10  pt-[15vh] bg-transparent">
                <Intersection className="flex flex-col justify-end flex-wrap items-end" setIsInView={setIsInView} isInView={isInView}>
                    <p className={`w-[45%] ${chesnaRegular.className}  text-black transition-all duration-[1200ms] ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10vw]"} `}>{textito} </p>
                    <h2 className={`text-[10rem] text-black pb-10 ${class357Regular.className} transition-all duration-[1200ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} `}> {textito2} </h2>
                </Intersection>
            </div>
        </div>




    )
}

export default TitlesPages;
'use client'
import Intersection from "../intersection/Intersection"
import { useState, useEffect } from "react"
import TitleHeader from "../titles/TitleHeader";
import Image from "next/image";
import { chesnaExtLight, chesnaLight, chesnaRegular, class357Regular, gasoekOne, tradeGothic } from "@/app/fonts/fonts";


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

    /* const textito = "After making stops in London, Stockholm and Milan, H&M is finally bringing its event series to Paris." */
    return (


        <div className={` w-full fixed z-20 pr-10  overflow-hidden transition-all duration-[1800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1))] ${isScrolled ? "h-[0vh] opacity-0 " : "h-screen opacity-100 "} `}>
            <div className=" w-full items-center gap-10  pt-[15vh] bg-transparent">
                <Intersection className="flex flex-col justify-end flex-wrap items-end" setIsInView={setIsInView} isInView={isInView}>
                    <p className={`w-[30%] ${chesnaRegular.className}  text-black transition-all duration-[1200ms] ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10vw]"} `}>{textito} </p>
                    <h2 className={`text-[10rem] text-black ${class357Regular.className} transition-all duration-[1200ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} `}> {textito2} </h2>
                </Intersection>
            </div>
        </div>




    )
}

export default TitlesPages;
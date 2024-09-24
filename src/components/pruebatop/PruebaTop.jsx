'use client'
import Intersection from "../intersection/Intersection"
import { useState, useEffect } from "react"
import TitleHeader from "../titles/TitleHeader";
import Image from "next/image";
import { tradeGothic } from "@/app/fonts/fonts";


const PruebaTop = () => {
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

    const textito = "Originally born in England, Chris has been taking pictures since his early days as an awkward teenager in the wilds of Canada, discovering he had a real knack for capturing the light. It may be in his blood, as his grandfather established a portrait studio in Taunton, England, in the 1940’s which still exists to this day, Chris is well known for his fashion & beauty photography- both editorial and commercial work- as well as his celebrity portraiture. His photographic style is celebrated for his sensitive use of light and colour. Chris’s shoots have taken him around the world to many countries including Italy, England, France, China, Argentina, Brazil, the Caribbean and Mexico, and he is currently focusing his time between Toronto, New York and Los Angeles."
    return (


        <div className={` w-full fixed z-20   overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.25, 1, 0.5, 1))] ${isScrolled ? "h-[0vh] bg-white" : "h-screen bg-white"} `}>
            <div>
                <TitleHeader />
            </div>
            <div className="flex w-full items-center gap-10  pt-[35vh] justify-around bg-transparent">
                <Intersection className="flex justify-start pl-20" setIsInView={setIsInView} isInView={isInView}>
                    <div className={`flex justify-center pr-20 z-10  w-[300px] h-[400px] transition duration-[1200ms] delay-[900ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} `} >
                        <Image className=" w-full object-cover backdrop-hue-rotate-180 bg-white/30" src="https://iili.io/dr0c0WN.jpg" width={500} height={500} alt="esto" />
                    </div>

                    <div className={`w-[50%] flex justify-end transition-all duration-[1000ms] delay-[1000ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"} `}>
                        <p className={`z-10 w-fit h-fit  text-[1.1rem] tracking-[0.1em] text-black ${tradeGothic.className} `}>{textito} </p>
                    </div>
                </Intersection>
            </div>

            <div className="z-10 top-[70vh] left-[85vw] bottom-0 right-0 absolute">


                {/* <svg className="rotate-90 " style={{backgroundColor: "transparent"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 385 39">
                    <path stroke="#FFFFFF" stroke-linecap="round" stroke-width="3" d="M2 25c94 1 190 2 284-3 31-1 63-4 94-4 2 0 4 0 2 1l-24 5c-11 1-23 3-34 6l-24 7m69-23L288 2" />
                </svg> */}
                <Intersection setIsInView={setIsInView} isInView={isInView}>
                    <svg className="w-1/2" style={{ backgroundColor: "transparent" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 299 271">
                        <path className={` transition-all duration-700 delay-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-[-10vh] opacity-0"}` } fill="#000000" d="m83 20-10 3c-1-4-6-9-18-9-8 0-15 2-15 7 0 2 2 5 12 6l13 2c12 2 19 7 19 16 0 13-12 17-26 17-23 0-29-11-30-15l10-3c2 4 6 9 20 9 9 0 16-3 16-7s-4-6-12-7l-13-2c-12-1-19-7-19-15C30 6 51 6 55 6c23 0 27 10 28 14Zm43 27h10c-2 5-7 15-22 15-13 0-23-6-23-22 0-10 8-20 22-20 15 0 21 8 22 15h-9c-1-3-5-7-12-7-9 0-14 6-14 12 0 8 4 14 13 14 8 0 12-4 13-7Zm18 14V21h10v6c2-3 6-7 14-7h3v10l-6-1c-11 0-11 8-11 11v21h-10Zm55 1c-11 0-23-5-23-21 0-11 7-21 23-21s22 10 22 21c0 16-11 21-22 21Zm0-8c8 0 13-5 13-13 0-10-6-13-13-13s-13 3-13 13c0 8 4 13 13 13Zm32 7V7h9v54h-9Zm22 0V7h9v54h-9Z" />
                        <path className={` transition-all duration-700 delay-500 ${isInView ? "translate-y-0 opacity-100" : "translate-y-[-15vh] opacity-0"}` } stroke="#000000" stroke-width="62" d="m20 121 135 109 123-109" />
                    </svg>
                </Intersection>
            </div>

        </div>




    )
}

export default PruebaTop


/* absolute top-[50vh] left-[80vw] */
{/* <svg style={{backgroundColor: "transparent"}} className="w-[50%]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 102 79">
                    <path stroke="#fff" stroke-width="12" d="m15 35 39 36 34-36" />
                    <path fill="#fff" d="m24 8-4 1c-1-2-2-3-8-3-3 0-6 0-6 2 0 1 1 2 5 3l6 1c5 1 8 3 8 6 0 6-5 8-11 8-10 0-12-5-13-7l4-1c1 1 3 4 9 4 3 0 6-1 6-3s-1-3-5-3l-5-1c-5-1-8-3-8-6 0-7 9-7 10-7 10 0 12 5 12 6Zm18 11h4c-1 2-3 7-9 7-5 0-10-3-10-10 0-4 4-8 10-8s8 3 9 6h-4c-1-1-2-3-5-3-4 0-6 3-6 5 0 4 2 6 6 6 3 0 4-1 5-3Zm8 6V8h3v3c1-1 3-3 6-3h2v4h-3c-5 0-5 3-5 4v9h-3Zm22 1c-5 0-9-3-9-9 0-5 2-9 9-9s9 4 9 9c0 6-4 9-9 9Zm0-4c3 0 5-2 5-5 0-4-2-6-5-6s-5 2-5 6c0 3 2 5 5 5Zm13 3V3h4v22h-4Zm9 0V3h4v22h-4Z" />
                </svg> */}
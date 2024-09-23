'use client'

import { useState, useRef, useEffect } from "react"
import { class357Regular, gasoekOne, nimbus } from "@/app/fonts/fonts"

const TitleHeader = () => {
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        setIsInView(entries.isIntersecting)
      },
      {
        rootMargin: "-50px",
        /* threshold: 1 */
      }
    )
    if (textRef.current) {
      observer.observe(textRef.current)
    }
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])
  return (
    <div ref={textRef} className={` z-20 absolute top-[30px] bg-transparent left-10 px-10  w-fit overflow-hidden transition-all  duration-[1200ms]  ${isInView ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-[-5vh]"} `}>
      <h2 ref={textRef} className={`  ${class357Regular.className} text-white  transition duration-[1200ms] ease-[cubic-bezier(0.33, 1, 0.68, 1)] ${isInView ? "translate-y-0 opacity-100 text-[9rem] bg-transparent" : "translate-y-[10vh] opacity-0 text-[5rem] "} `} > CHRIS NICHOLLS</h2>
    </div>
  )
}

export default TitleHeader;
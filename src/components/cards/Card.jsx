'use client'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'


const Card = ({image}) => {
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting)
            },
            {
                rootMargin: "-200px"
            }
        )
        if(cardRef.current) {
            observer.observe(cardRef.current)
        }
        return() => {
            if(cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    } , [])

  return (
    <div ref={cardRef} className={` transition-opacity duration-[1200ms] ${isInView ? "opacity-100" : "opacity-0"} `}>
        <Image className='w-full h-auto' src={image} width={500} height={500} alt='title'  />
    </div>
  )
}

export default Card
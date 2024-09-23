'use client';

import { useEffect, useRef } from "react";

const Intersection = ({ setIsInView, children, rootMargin="0px", threshold= 0, className=""  }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                
                rootMargin,
                threshold
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, [setIsInView]);

    return (
        <div className={className} ref={itemRef}>
            {children}
        </div>
    );
};

export default Intersection;
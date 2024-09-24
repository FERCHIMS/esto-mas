'use client';

import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

const spring = { damping: 90, stiffness: 900 };

export default function MouseFollow({ targetRef }) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);
  const opacity = useMotionValue(1);

  useEffect(() => {
    const element = targetRef.current;

    if (!element) return;

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      const rect = element.getBoundingClientRect();

      // Calculamos la posición relativa al elemento objetivo
      const xRelative = clientX - rect.left;
      const yRelative = clientY - rect.top;

      // Limitamos la posición del follower dentro del div
      const clampedX = Math.max(0, Math.min(xRelative, rect.width));
      const clampedY = Math.max(0, Math.min(yRelative, rect.height));

      xPoint.set(clampedX);
      yPoint.set(clampedY);

      // Calculamos la opacidad basada en la distancia a los bordes
      const distanceFromEdgeX = Math.min(clampedX, rect.width - clampedX);
      const distanceFromEdgeY = Math.min(clampedY, rect.height - clampedY);
      const minDistance = Math.min(distanceFromEdgeX, distanceFromEdgeY);
      const fadeDistance = 50; // Distancia en píxeles desde el borde donde comienza el desvanecimiento
      const newOpacity = Math.min(minDistance / fadeDistance, 1);

      opacity.set(newOpacity);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [targetRef]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: -50,
        top: -50,
        x,
        y,
        opacity,
        width: "180px",
        height: "180px",

        borderRadius: "50%",
        pointerEvents: "none",
        transform: 'translate(-50%, -50%)',
        transition: "all 100ms ease-out",


      }}
      className={`flex justify-center items-center  backdrop-saturate-100 opacity-[10%] `}
    >
      
      <svg style={{backgroundColor:"transparent"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 424 424"><g filter="url(#a)"><circle cx="212" cy="212" r="91" fill="#F200FF"/></g><g filter="url(#b)"><circle cx="212" cy="212" r="69" fill="#FCC9FF"/></g><defs><filter id="a" width="423.2" height="423.2" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_220_82" stdDeviation="60.3"/></filter><filter id="b" width="379.2" height="379.2" x="22" y="22" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_220_82" stdDeviation="60.3"/></filter></defs></svg>



    </motion.div>
  );
}
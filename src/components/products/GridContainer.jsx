'use client'
import Masonry from 'react-masonry-css';
import './grid.css'
import Intersection from '../intersection/Intersection';
import { useState } from 'react';

const GridContainer = ({children}) => {
    const [isInView, setIsInView] = useState(false);

    const breakpointColumnsObj = {
        default: 3, // 3 columnas por defecto
        1100: 2,    // 2 columnas si el ancho de la ventana es menor a 1100px
        700: 1      // 1 columna si el ancho es menor a 700px
    };
    return (
        <Intersection className='w-[100vw]' isInView={isInView} setIsInView={setIsInView} rootMargin='900px 0px 0px 0px'  >
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`my-masonry-grid px-10 ${isInView ? "opacity-100" : "opacity-0"} `} 
            columnClassName="my-masonry-grid_column"
            
        >
            {children}
        </Masonry>
        </Intersection>
    )
}

export default GridContainer
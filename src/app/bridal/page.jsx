import BridalProds from '@/components/bridalsection/BridalProds'
import TitlesPages from '@/components/titles/TitlesPages'
import React from 'react'

const Bridal = () => {
    return (
        <div className='flex w-full h-full flex-col overflow-hidden '>
            <div>
                <TitlesPages
                textito="El día más especial merece ser inmortalizado de manera única. Nuestras fotografías de bodas capturan la magia y la emoción de cada momento, desde los preparativos hasta el 'sí, quiero'. Revive la historia de amor a través de imágenes que reflejan la belleza y la felicidad de ese día inolvidable."
                textito2="BRIDAL"
                />
            </div>
            <div>
                <BridalProds />
            </div>
        </div>
    )
}

export default Bridal
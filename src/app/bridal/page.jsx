import BridalProds from '@/components/bridalsection/BridalProds'
import TitlesPages from '@/components/titles/TitlesPages'
import React from 'react'

const Bridal = () => {
    return (
        <div className='flex w-full h-full flex-col overflow-hidden '>
            <div>
                <TitlesPages
                textito="esto esto esssss"
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
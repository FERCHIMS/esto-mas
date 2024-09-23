

import JewelryComp from '@/components/jewelryComp/jewelryComp'
import { traceGlobals } from 'next/dist/trace/shared'
import { gasoekOne } from '../fonts/fonts'

const jewelry = () => {
  return (

    <div className='flex w-full flex-col overflow-hidden'>
      

      <div className='sticky mt-[50vh] z-30 h-screen bg-green-400'>
      <h2 className={`text-[8rem] pl-20 ${gasoekOne.className}` } >ESTO 222222222</h2>
      </div>

      <div className='z-50 h-screen bg-pink-400'>
      <h2 className={`text-[8rem] pl-20 ${gasoekOne.className}` } >ESTO 222222222</h2>
      </div>
    </div>

  )
}

export default jewelry
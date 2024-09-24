import JewelProds from "@/components/jewelrysection/JewelProds"

import TitlesPages from "@/components/titles/TitlesPages"



const Jewelry = () => {
  return (

    <div className='flex w-full h-full flex-col overflow-hidden '>
      <div>
        <TitlesPages
        textito="After making stops in London, Stockholm and Milan"
        textito2= "JEWELRY"
        />
      </div>
      <div>
        <JewelProds />
      </div>

    </div>

  )
}

export default Jewelry
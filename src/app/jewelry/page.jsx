import JewelProds from "@/components/jewelrysection/JewelProds"
import TitleJewelry from "@/components/jewelrysection/TitleJewelry"



const Jewelry = () => {
  return (

    <div className='flex w-full h-full flex-col overflow-hidden '>
      <div>
        <TitleJewelry />
      </div>
      <div>
        <JewelProds />
      </div>

    </div>

  )
}

export default Jewelry
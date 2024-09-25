import JewelProds from "@/components/jewelrysection/JewelProds"

import TitlesPages from "@/components/titles/TitlesPages"



const Jewelry = () => {
  return (

    <div className='flex w-full h-full flex-col overflow-hidden '>
      <div>
        <TitlesPages
        textito="Captura la esencia de la elegancia y el brillo con nuestras fotografías de joyería. Cada imagen resalta la belleza y el detalle de las piezas, ofreciendo una visión única que invita a apreciar el arte de la orfebrería. Sumérgete en un mundo donde cada joya cuenta una historia."
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
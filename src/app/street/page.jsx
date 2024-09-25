import TitlesPages from "@/components/titles/TitlesPages"
import StreetProds from "@/components/streetsction/StreetProds"

const Street = () => {
    return (
        <div className='flex w-full h-full flex-col overflow-hidden '>
            <div>
                <TitlesPages
                    textito="Explora la vida urbana a través de un lente que captura momentos auténticos y espontáneos. Nuestras fotografías de street photography revelan la esencia de las calles, la diversidad de las personas y la vibrante energía de la ciudad. Cada imagen es un testimonio de la belleza en lo cotidiano."
                    textito2="STREET"
                />
            </div>
            <div>
                <StreetProds />
            </div>
        </div>
    )
}

export default Street
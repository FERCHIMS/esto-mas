import AdvertProds from "@/components/advertisingsection/AdvertProds"
import TitleAdvertising from "@/components/advertisingsection/TitleAdvertising"
import TitlesPages from "@/components/titles/TitlesPages"


const Advertising = () => {
    return (
        <div>
            <div className='flex w-full h-full flex-col overflow-hidden '>
                <TitlesPages
                textito="Transforma tu mensaje en imágenes poderosas. En nuestra sección de publicidad, cada fotografía está diseñada para captar la atención y comunicar efectivamente la esencia de tu marca. Desde campañas creativas hasta retratos de productos, nuestra visión se alinea con tus objetivos comerciales."
                textito2="ADVERTISING"
                />
                {/* <div>
                    <TitleAdvertising />
                </div> */}
                <div>
                    <AdvertProds />
                </div>

            </div>
        </div>
    )
}

export default Advertising
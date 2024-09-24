import AdvertProds from "@/components/advertisingsection/AdvertProds"
import TitleAdvertising from "@/components/advertisingsection/TitleAdvertising"
import TitlesPages from "@/components/titles/TitlesPages"


const Advertising = () => {
    return (
        <div>
            <div className='flex w-full h-full flex-col overflow-hidden '>
                <TitlesPages
                textito="Esto es un textito para un advertising que estoy poniendo en la seccion de advertising para la cosa que es"
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
import AdvertProds from "@/components/advertisingsection/AdvertProds"
import TitleAdvertising from "@/components/advertisingsection/TitleAdvertising"


const Advertising = () => {
    return (
        <div>
            <div className='flex w-full h-full flex-col overflow-hidden '>
                <div>
                    <TitleAdvertising />
                </div>
                <div>
                    <AdvertProds />
                </div>

            </div>
        </div>
    )
}

export default Advertising
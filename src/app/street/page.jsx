import TitlesPages from "@/components/titles/TitlesPages"
import StreetProds from "@/components/streetsction/StreetProds"

const Street = () => {
    return (
        <div className='flex w-full h-full flex-col overflow-hidden '>
            <div>
                <TitlesPages
                    textito="esto esto esssss"
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
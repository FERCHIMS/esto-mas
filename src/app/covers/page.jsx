import CoverProds from "@/components/coversection/CoverProds"
import TitlesPages from "@/components/titles/TitlesPages"

const Covers = () => {
  return (
    <div className='flex w-full h-full flex-col overflow-hidden '>
      <div>
        <TitlesPages
          textito="esto esto esssss"
          textito2="COVERS"
        />
      </div>
      <div>
        <CoverProds />
      </div>
    </div>
  )
}

export default Covers
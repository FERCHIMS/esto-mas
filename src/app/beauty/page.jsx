
import BeautyProds from '@/components/beautysection/BeautyProds';
import TitlesPages from '@/components/titles/TitlesPages';


const Beauty = () => {
  return (
    <div className='flex w-full h-full flex-col overflow-hidden '>
      <div>
        <TitlesPages
          textito="esto esto esssss"
          textito2="BEAUTY"
        />
      </div>
      <div>
        <BeautyProds />
      </div>
    </div>
  )
}

export default Beauty;
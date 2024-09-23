import Products from "@/components/products/Products";
import PruebaTop from "@/components/pruebatop/PruebaTop";
import TitleHeader from "@/components/titles/TitleHeader";
import Image from "next/image";



export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden ">
      <div>
        <PruebaTop />
      </div>
      
      <div className="flex flex-wrap w-full h-full gap-2 justify-center">
        <Products />
      </div>
    </div>
  )
}

import { getModels } from "../llamados/llamada"
import Card from "../cards/Card"
import GridContainer from "./GridContainer"
/* import Masonry from 'react-masonry-css'; */

const Products = async() => {
    const products = await getModels()
  return (
    <GridContainer>
        {products.map((product, index) => (
            <div className="" key={index}>
                <Card image={product.src} />
            </div>
        ))}
    </GridContainer>
  )
}

export default Products
import Card from "../cards/Card"
import { getBeauty } from "../llamados/llamada"
import GridContainer from "../products/GridContainer"

const BeautyProds = async () => {
    const beauty = await getBeauty()
    return (
        <GridContainer>
            {beauty.map((beauty, index) => (
                <div key={beauty.id || index}>
                    <Card
                        image={beauty.src}
                    />
                </div>


            ))}
        </GridContainer>
    )
}

export default BeautyProds
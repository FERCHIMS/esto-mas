import Card from "../cards/Card"
import { getBridal } from "../llamados/llamada"
import GridContainer from "../products/GridContainer"

const BridalProds = async () => {
    const bridals = await getBridal()
    return (
        <GridContainer>
            {bridals.map((bridal, index) => (
                <div key={bridal.id || index}>
                    <Card
                        image={bridal.src}
                    />
                </div>


            ))}
        </GridContainer>
    )
}

export default BridalProds
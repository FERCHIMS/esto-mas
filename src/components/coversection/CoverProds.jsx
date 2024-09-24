import Card from "../cards/Card"
import { getCover } from "../llamados/llamada"
import GridContainer from "../products/GridContainer"

const CoverProds = async () => {
    const covers = await getCover()
    return (
        <GridContainer>
            {covers.map((cover, index) => (
                <div key={cover.id || index}>
                    <Card
                        image={cover.src}
                    />
                </div>


            ))}
        </GridContainer>
    )
}

export default CoverProds
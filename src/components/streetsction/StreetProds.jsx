import Card from "../cards/Card"
import { getStreet } from "../llamados/llamada"
import GridContainer from "../products/GridContainer"

const StreetProds = async () => {
    const streets = await getStreet()
    return (
        <GridContainer>
            {streets.map((street, index) => (
                <div key={street.id || index}>
                    <Card
                        image={street.src}
                    />
                </div>


            ))}
        </GridContainer>
    )
}

export default StreetProds
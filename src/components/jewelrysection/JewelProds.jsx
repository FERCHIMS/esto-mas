import Card from "../cards/Card"

import { getJewelry } from "../llamados/llamada"
import GridContainer from "../products/GridContainer"

const JewelProds = async () => {
    const joyas = await getJewelry()
    return (
        <GridContainer >
            {joyas.map((joya, index) => (
                <div key={joya.id || index}>
                    <Card 
                    image={joya.src}
                    />
                </div>
            ))}
            
        </GridContainer>
    )
}

export default JewelProds
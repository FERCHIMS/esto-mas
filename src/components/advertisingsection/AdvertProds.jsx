import Card from "../cards/Card"

import { getAdvertising } from "../llamados/llamada"
import GridContainer from "../products/GridContainer"

const AdvertProds = async () => {
    const adverts = await getAdvertising()
    return (
        <GridContainer >
            {adverts.map((advert, index) => (
                <div key={advert.id || index}>
                    <Card 
                    image={advert.src}
                    />
                </div>
            ))}
            
        </GridContainer>
    )
}

export default AdvertProds
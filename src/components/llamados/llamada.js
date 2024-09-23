


export async function getModels() {
    try {
        const res = await fetch ("https://greftom4.github.io/apiEstaticaProds/modelos.json")
        const data = await res.json();
        /* console.log(data); */
        return data
    }
    catch (error) {
        console.log('ESTO ES UN ERROR:', error);
        
    }

} 



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

export async function getJewelry() {
    try {
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/jewelry.json")
        const data = await res.json();
        return data
    }
    catch (error) {
        console.log("esto es un error: ", error);   
    }
}

export async function getAdvertising() {
    try {
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/advertising.json")
        const data = await res.json();
        return data
    }
    catch (error) {
        console.log("ESTO ES UN ERROR: ", error);
        
    }
}

export async function getBeauty () {
    try {

        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/advertising.json")
        const data = await res.json();
        return data
    }catch(error) {
        console.log("esto es un error: ", error);
        
    }
};

export async function getBridal() {
    try {

        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/advertising.json");
        const data = await res.json()
        return data
    }catch (error) {
        console.log("esto es un error: ", error);
    }
};

export async function getCover() {
    try {
        const res = await fetch ("https://greftom4.github.io/apiEstaticaProds/advertising.json");
        const data = res.json();
        return data
    }catch (error) {
        console.log("esto es un error en getCover: ", error);      
    }
};

export async function getStreet() {
    try {
        const res = await fetch ("https://greftom4.github.io/apiEstaticaProds/advertising.json");
        const data = res.json();
        return data
    }catch (error) {
        console.log("esto es un error en getStreet: ", error);      
    }
};
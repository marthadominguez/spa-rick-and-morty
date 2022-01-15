const API = 'https://rickandmortyapi.com/api/character/'

/* estructura de a logica. Si no recibe un ID va a hacer el llamado por defecto que en este caso seria API
para hacer el render del home page.
Pero si mandamos un id como parametro va a generar una nueva URL. */

const getData = async (id) => {
    const apiUrl = id ? `${API}${id}` : API;
    // llamado al fetch 
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data
    } catch (error) {
        console.log("fetch error", error)
    }
};

export default getData;
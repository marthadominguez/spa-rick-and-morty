import getData from "../utils/getData";

const Home = async () => {
    const characters = await getData()
    const view = `
        <div class="characters">
        ${characters.results.map((character)=>`
        <article class="character-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}"/>
                <h2>${character.name}</h2>
            </a>
            </article>`)}
        </div>
    `
    return view
}

export default Home;


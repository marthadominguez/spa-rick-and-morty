import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {

    const id = getHash();
    const character = await getData(id);

    const view = `
        <div class="characters-inner">
        <article class="characters-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
        <article class="characters-card">
            <h3>Episodes: <span class="">${character.episode.length}</span></h3>
            <h3>Status: <span class="">${character.status}</span></h3>
            <h3>Species: <span class="">${character.species}</span></h3>
            <h3>Gender: <span class="">${character.gender}</span></h3>
            <h3>Origin: <span class="">${character.origin.name}</span></h3>
            <h3>Last Location: <span class="">${character.location.name}</span></h3>
        </article>
        </div>
  ` 
    return view;
}

export default Character;
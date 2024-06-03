import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */


export const asyncComponent = (element) => {

    const id1 = '5d86371f25a058e5b1c8a65e';

    findHeroes(id1)
    .then(name => element.innerHTML = name)
    .catch(error => element.innerHTML = error);

}


/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHeroes = async( id ) => {

    const hero = heroes.find( hero => hero.id === id ); 
    if (!hero)
        throw  `Hero with id ${id} not found`;

    return hero.name;

} 
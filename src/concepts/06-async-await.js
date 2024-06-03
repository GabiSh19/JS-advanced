import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */


export const asyncAwaitComponent = (element) => {

    const id1 = '5d86371f97c29d020f1e1f6d';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    findHero(id1, id2)
    .then()
    


}

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
}
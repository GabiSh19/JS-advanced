import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = `Nombre del héroe: ${hero.name}`;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `Nombre del primer heroe: ${hero1.name} <br/> Nombre del segundo heroe: ${hero2.name}`
    }

    const renderError = (error) => {
        element.innerHTML = `
        <h2> Error:</h2>
        <h3> ${error}</h3>
        `
    }
    

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    findHero(id1)
        .then( superHero => renderHero(superHero) ) //En este caso podríamos simplicarlo de la siguiente manera: 
        // .then( renderHero ) > Siempre y cuando los argumentos sean los mismos, en el mismo órden.
        .catch(renderError);

    //Con PROMISE HELL, sería lo siguiente: 
    // findHero(id1)
    // .then((hero1) => {
    //     findHero(id2)
    //     .then(hero2 => renderTwoHeroes(hero1, hero2))
    //     .catch(renderError);
    // })
    // .catch(renderError);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {
    
    return new Promise((resolve, reject) => {

        const hero = heroes.find( hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);

    });

}









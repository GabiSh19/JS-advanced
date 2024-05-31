import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */


export const callbacksComponent = (element) => {

    const id = '5d86371f2343e37870b91ef1s';
    findHero(id, (error, hero) => {
        // element.innerHTML = hero?.name || 'No hero found';

        if (error) {
            element.innerHTML = error;  
            return;
        }

        element.innerHTML = hero.name;
    })

    
}

/**
 * 
 * @param {String} id 
 * @param { (error: String|Null, hero: Object)=> void } callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find( hero => hero.id === id );

    if (!hero) {
        callback( `Hero with ${id} not found`);
        return;
    }

    callback(null, hero); 

}
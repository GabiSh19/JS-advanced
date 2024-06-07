import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */


export const generatorAsyncComponent = (element) => {

    console.log('generatorAsyncComponent');

    
}

async function* getHeroGenerator(){
    heroes
}

const sleep = () =>{

    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve()
        }, 1000)
    })


}
import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */


export const generatorAsyncComponent = async (element) => {

    const heroGenerator = getHeroGenerator();
    const isFinished = false; 

    do {
        
        const { value, done } = await heroGenerator.next() 
        isFinished = done;
        element.innerHTML = value; 

    } while( !isFinished );
    
}

async function* getHeroGenerator(){
    for ( const hero of heroes ) {
        await sleep();
        yield hero.name;
    }
}

const sleep = () =>{

    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve()
        }, 1000)
    })


}
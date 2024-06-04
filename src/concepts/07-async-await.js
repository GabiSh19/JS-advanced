/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncAwait2Component = async(element) => {

    console.time('Start');
    
    // const value1= await slowPromise();
    // const value2= await mediumPromise();
    // const value3= await fastPromise();

    //! Optimiza lo anterior:  Todas las dispara de manera simultánea
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])

    
    element.innerHTML = `

        value1: ${value1}
        value2: ${value1}
        value3: ${value1}
    
    `

    console.timeEnd('Start');

}

const slowPromise = () => new Promise ( resolve => {
    setTimeout( () => {
        resolve('Slow Promise');
    }, 2000  )
});

const mediumPromise = () => new Promise ( resolve => {
    setTimeout( () => {
        resolve('Medium Promise');
    }, 1500  )
});

const fastPromise = () => new Promise ( resolve => {
    setTimeout( () => {
        resolve('Fast Promise');
    }, 1000  )
});
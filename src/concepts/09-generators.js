/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorFunctionsComponent = (element) => {

    console.log('GeneratorFunctionsComponent')

    
}

function* myFirstGeneratorFunction() {

    yield 'Primer valor'
    yield 'Segundo valor'
    yield 'Tercer valor'

    return 'Ya no hay valor'
}
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorFunctionsComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());    
    
    const genId = idGenerator();
    console.log(genId.next());
    
    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerHTML = ` Click: ${value} `;
    }

    button.addEventListener('click', renderButton);

}

//! Esta función generadora me servirá para trabajar con una serie de números, ids en este caso 

function* idGenerator(){
    let currentId = 0;
    while (true) {
        yield currentId++;
    }
}



function* myFirstGeneratorFunction() {

    yield 'Primer valor'
    yield 'Segundo valor'
    yield 'Tercer valor'

    return 'Ya no hay valor'
}
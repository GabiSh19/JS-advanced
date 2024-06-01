import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponent } from './src/concepts/01-environments';
import { callbacksComponent } from './src/concepts/02-callbacks';
import { promiseComponent } from './src/concepts/03-promises';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Javascript Advanced</h1>
    <h1>En esta sección veremos: </h1>
    <ol> 
      <li> Variables de entorno </li>
      <li> Callbacks </li>
      <li> Promesas  </li>
    
    
    </ol>
  
    <div class="card">
    
    </div>
    
  </div>
`
const element = document.querySelector('.card');

// environmentsComponent(element);
// callbacksComponent(element);
promiseComponent(element);
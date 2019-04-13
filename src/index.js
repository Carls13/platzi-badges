// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
//import Badge from './components/Badge';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css';		
import './global.css';

// const element = <h1>Hello, Platzi Badges!</h1>;
// const badge = <Badge 
// firstName='Carlos' 
// lastName='Hernandez'
// avatarUrl="https://avatars2.githubusercontent.com/u/36903544?s=460&v=4"
// twitter="carlosshb13"
// jobTitle="Full-Stack Developer"
//  />;

//const badgeNew = <BadgeNew/>
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App/>, container);

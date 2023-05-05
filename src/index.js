import './style.css';
import printMe from './printMe.js';
const btn = document.createElement('button');
btn.innerHTML = 'Click me and check the console!';
btn.onclick = printMe;

document.body.appendChild(btn);
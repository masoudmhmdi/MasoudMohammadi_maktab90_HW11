import './style.css';
import { App } from './src/App';
const root = document.getElementById('app');
console.log(JSON.parse(localStorage.getItem('db')));
root.appendChild(App());

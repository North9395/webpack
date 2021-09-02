import name from './a';

const text = `Hello ${name}`;

const div = document.createElement('div');
div.innerHTML = text;
document.body.appendChild(div);

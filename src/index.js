import name from './a';

const text = `Hello ${name}`;

console.log('111 text', text);

const div = document.createElement('div');
div.innerHTML = text;
document.body.appendChild(div);

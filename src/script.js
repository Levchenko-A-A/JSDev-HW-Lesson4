import { createAndAppendElement, buttonClick, inputText } from './function.js';

const container = document.querySelector('.container');
const input = document.createElement('input');
Object.assign(input, {
  className: 'text-field',
  type: 'text',
  placeholder: 'Введите текст',
});
const button = document.createElement('button');
Object.assign(button, {
  className: 'button',
  textContent: 'Нажми меня',
  disabled: true,
});

container.append(input);
container.append(button);
createAndAppendElement('p', 'First Paragraph', container);
createAndAppendElement('p', 'Second Paragraph', container);
createAndAppendElement('p', 'Third Paragraph', container);
button.addEventListener('click', buttonClick(input, button, container));
input.addEventListener('input', inputText(button));

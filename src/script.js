import { buttonClick, inputText} from './function.js'

const button = document.querySelector('button');
const input = document.querySelector('.text-field');
button.addEventListener('click', buttonClick(input, button));
input.addEventListener('input', inputText(button));
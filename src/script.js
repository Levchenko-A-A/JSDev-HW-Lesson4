const button = document.querySelector('button');
const input = document.querySelector('.text-field');
button.addEventListener('click', buttonClick);
input.addEventListener('input', inputText);

function buttonClick() {
    const text = getInputText();
    addElementToContainer(text);
    clearInput();
}
function inputText() {
    button.disabled = this.value.trim() === '';
}
export function getInputText() {
    return input.value;
}

function addElementToContainer(text) {
    const newParag = document.createElement('p');
    newParag.textContent = text;
    const container = document.querySelector('.container');
    const paragraph = container.querySelectorAll('p');
    if (paragraph.length < 4) {
        container.append(newParag);
    } else {
        container.querySelector('p').remove();
        container.append(newParag);
    }
}
function clearInput() {
    const input = document.querySelector('.text-field');
    input.value = '';
    button.disabled = true;
}

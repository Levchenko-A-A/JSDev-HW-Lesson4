export function buttonClick(inputElement, buttonElement) {
    const text = getInputText(inputElement);
    addElementToContainer(text);
    clearInput(buttonElement);
}

export function inputText(buttonElement) {
    buttonElement.disabled = value.trim() === '';
}

export function getInputText(inputElement) {
    return inputElement.value;
}

export function clearInput(inputElement, buttonElement) {
    inputElement.value = '';
    buttonElement.disabled = true;
}

export function addElementToContainer(text) {
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

export { buttonClick, inputText, getInputText, clearInput};
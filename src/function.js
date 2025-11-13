export function createAndAppendElement(tag, text, parent) {
  const element = document.createElement(tag);
  element.textContent = text;

  parent.appendChild(element);
}

export function getInputText(inputElement) {
  return inputElement.value;
}

export function clearInput(inputElement, buttonElement) {
  inputElement.value = '';
  buttonElement.disabled = true;
}

export function chekNumberParag(text, parent) {
  const paragraph = parent.querySelectorAll('p');
  if (paragraph.length < 5) {
    createAndAppendElement('p', text, parent);
  } else {
    parent.querySelector('p').remove();
    createAndAppendElement('p', text, parent);
  }
}

export function buttonClick(inputElement, buttonElement, parent) {
  return () => {
    const text = getInputText(inputElement);
    chekNumberParag(text, parent);
    clearInput(inputElement, buttonElement);
  };
}

export function inputText(buttonElement) {
  return (event) => {
    buttonElement.disabled = event.target.value.trim() === '';
  };
}

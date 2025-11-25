/**
 * Creates HTML element, set its text content and appends it to
 * the specified parent element
 * @param {string} tag - Tag name of the element to create
 * @param {string} text - Text content to set for the element
 * @param {HTMLElement} parent -Parent HTML element to which
 */
export function createAndAppendElement(tag, text, parent) {
  const element = document.createElement(tag);
  element.textContent = text;
  parent.appendChild(element);
}

/**
 * Gets the text value from an input element
 * @param {HTMLElement} inputElement - Input elemet from which to get the value
 * @returns {string} - Text value of the input element
 */
export function getInputText(inputElement) {
  return inputElement.value;
}

/**
 * Clears the input element and disables the button element
 * @param {HTMLInputElement} inputElement - Input element to clear
 * @param {HTMLButtonElement} buttonElement - Button element to disable
 */
export function clearInput(inputElement, buttonElement) {
  inputElement.value = '';
  buttonElement.disabled = true;
}

/**
 * Check the nuber of paragraphs and manages their quantity by adding new or
 * replacing old ones
 * @param {string} text - Text content for the paragraph
 * @param {HTMLElement} parent - Parent element containing paragraphs
 */
export function chekNumberParag(text, parent) {
  const paragraph = parent.querySelectorAll('p');
  if (paragraph.length < 5) {
    createAndAppendElement('p', text, parent);
  } else {
    parent.querySelector('p').remove();
    createAndAppendElement('p', text, parent);
  }
}

/**
 * Creates a click handler function that processes input text and maneges paragraphs
 * @param {HTMLInputElement} inputElement - Input element to get text from
 * @param {HTMLButtonElement} buttonElement - Button element to disable after processing
 * @param {HTMLElement} parent - Parent element for paragraph manegement
 * @returns {Function} Click handler function
 */
export function getClickHandler(inputElement, buttonElement, parent) {
  return () => {
    const text = getInputText(inputElement);
    chekNumberParag(text, parent);
    clearInput(inputElement, buttonElement);
  };
}

/**
 * Creates an input handler function that enables/disables button based on input content
 * @param {HTMLBodyElement} buttonElement - Button element to enable/disable
 * @returns Input event gandler function
 */
export function inputText(buttonElement) {
  return (event) => {
    buttonElement.disabled = event.target.value.trim() === '';
  };
}

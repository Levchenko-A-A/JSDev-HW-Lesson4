/**
 * @jest-environment jsdom
 */

import { createAndAppendElement, getInputText, clearInput, chekNumberParag } from "./function";
describe("Тестирование функций", () => {
    describe('Проверка функции createAndAppendElement()', () => {
        test('Создание элемента с правильным ТЭГом', () => {
            const parent = document.createElement('div');
            const tag = 'p';
            createAndAppendElement(tag, 'Test', parent);

            expect(parent.querySelector('p')).not.toBeNull();
            expect(parent.querySelector('p').tagName).toBe('P');
        });
        test('Проверка, правильно ли установлен текст элемента', () => {
            const parent = document.createElement('div');
            const text = 'Test';
            createAndAppendElement('p', text, parent);
            expect(parent.querySelector('p').textContent).toBe(text);
        });
        test('Проверка, добавляет в правильного ли родителя', () => {
            const parent = document.createElement('div');
            createAndAppendElement('div', 'Test', parent);
            expect(parent.children.length).toBe(1);
            expect(parent.firstChild.tagName).toBe('DIV');
        });
    });
    describe("Проверка функции getInputText()", () => {
        test("Должна вернуть значение текстового поля", () => {
            const inputElement = document.createElement('input');
            inputElement.value = 'Test';
            expect(getInputText(inputElement)).toBe('Test');
        });
        test("Должна возвращать пустую строку", () => {
            const inputElement = document.createElement('input');
            inputElement.value = '';
            expect(getInputText(inputElement)).toBe('');
        });
        test("Должна возвращать значение после изменения", () => {
            const inputElement = document.createElement('input');
            inputElement.value = 'Test';
            inputElement.value = 'New Test';
            expect(getInputText(inputElement)).toBe('New Test');
        });
    });
    describe("Проверка функции clearInput()", () => {
        test("Должна очищать input", () => {
            const inputElement = document.createElement('input');
            const buttonElement = document.createElement('button');
            inputElement.value = 'Test';
            buttonElement.disabled = false;
            clearInput(inputElement, buttonElement);
            expect(inputElement.value).toBe('');
        });
        test("Должна отключать button", () => {
            const inputElement = document.createElement('input');
            const buttonElement = document.createElement('button');
            inputElement.value = 'Test';
            buttonElement.disabled = false;
            clearInput(inputElement, buttonElement);
            expect(buttonElement.disabled).toBe(true);
        });
        test("Должна работать с отключенной кнопкой", () => {
            const inputElement = document.createElement('input');
            const buttonElement = document.createElement('button');
            inputElement.value = 'Test';
            buttonElement.disabled = true;
            clearInput(inputElement, buttonElement);
            expect(inputElement.value).toBe('');
            expect(buttonElement.disabled).toBe(true);
        });
        test("Должна работать с уже пустым input", () => {
            const inputElement = document.createElement('input');
            const buttonElement = document.createElement('button');
            inputElement.value = '';
            buttonElement.disabled = false;
            clearInput(inputElement, buttonElement);
            expect(inputElement.value).toBe('');
            expect(buttonElement.disabled).toBe(true);
        });
    });
    describe("Проверка функции chekNumberParag()", () => {
        test('Должна добавлять новый параграф когда меньше 5 параграфов', () => {
            const parent = document.createElement('div');
            const text = 'Новый текст';
            chekNumberParag(text, parent);
            expect(parent.querySelectorAll('p').length).toBe(1);
            expect(parent.querySelector('p').textContent).toBe(text);
        });
        test('Должна добавлять несколько параграфов пока не достигнет 5', () => {
            const parent = document.createElement('div');
            const text = 'Текст параграфа';
            for (let i = 0; i < 5; i++) {
                chekNumberParag(text + i, parent);
            }
            expect(parent.querySelectorAll('p').length).toBe(5);
        });
        test('Должна удалять первый параграф и добавлять новый когда 5 параграфов', () => {
            const parent = document.createElement('div');
            const text = 'Параграф ';
            for (let i = 0; i < 5; i++) {
                createAndAppendElement('p', text + i, parent);
            }
            const initialFirstParagraph = parent.querySelector('p').textContent;
            const initialLastParagraph = parent.lastChild.textContent;
            const newText = 'Новый параграф';
            chekNumberParag(newText, parent);
            const currentFirstParagraph = parent.querySelector('p').textContent;
            const currentLastParagraph = parent.lastChild.textContent;
            expect(parent.querySelectorAll('p').length).toBe(5);
            expect(currentFirstParagraph).not.toBe(initialFirstParagraph);
            expect(currentFirstParagraph).toBe('Параграф 1');
            expect(currentLastParagraph).toBe(newText);
        });
        test('Должна корректно работать при точном количестве 5 параграфов', () => {
            const parent = document.createElement('div');
            for (let i = 1; i <= 5; i++) {
                createAndAppendElement('p', i, parent);
            }
            const initialParagraphs = Array.from(parent.querySelectorAll('p')).map(p => p.textContent);
            const newText = 'Самый новый параграф';
            chekNumberParag(newText, parent);
            const currentParagraphs = Array.from(parent.querySelectorAll('p')).map(p => p.textContent);
            expect(parent.querySelectorAll('p').length).toBe(5);
            expect(currentParagraphs).not.toEqual(initialParagraphs);
            expect(currentParagraphs[4]).toBe(newText);
        });
    });
});

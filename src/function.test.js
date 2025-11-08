import { createAndAppendElement, inputText, getInputText } from "./function";
describe("function getInputText", () => {
    describe("Базовые тесты>", () => {
        it("...", () => {
            const input = { value: '' };
            expect(createAndAppendElement(tag, text, parent)).toEqual('');
        });
    });
    describe("Тесты с разными типами", () => {
        it("...", () => {
            const input = { value: null };
            expect(inputText(buttonElement)).toEqual(null);
        });
    });
    describe("Тесты на предельных значениях", () => {
        it("...", () => {
            const longText = 'a'.repeat(10000);
            const input = { value: longText };
            expect(getInputText(inputElement)).toEqual(longText);
        });
    });
});
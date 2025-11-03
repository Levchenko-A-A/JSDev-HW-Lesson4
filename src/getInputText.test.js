import { getInputText } from "./getInputText";
describe("function getInputText", () => {
    describe("Базовые тесты>", () => {
        it("Возврат пустой строки", () => {
            const input = { value: '' };
            expect(getInputText(input)).toEqual('');
        });
        it("Возвтрат непустой строки", () => {
            const input = { value: 'Hello World' };
            expect(getInputText(input)).toEqual('Hello World');
        });
        it("Возврат строки с пробелами", () => {
            const input = { value: '  Hello  World  ' };
            expect(getInputText(input)).toEqual('  Hello  World  ');
        });
        it("Возврат цифровых значений", () => {
            const input = { value: '12345' };
            expect(getInputText(input)).toEqual('12345');
        });
        it("Возврат спец символов", () => {
            const input = { value: '!@#$%^&*()' };
            expect(getInputText(input)).toEqual('!@#$%^&*()');
        });
    });
    describe("Тесты с разными типами", () => {
        it("Возврат NULL", () => {
            const input = { value: null };
            expect(getInputText(input)).toEqual(null);
        });
        it("Возврат undefined", () => {
            const input = { value: undefined };
            expect(getInputText(input)).toEqual(undefined);
        });
        it("Возврат числа", () => {
            const input = { value: 123 };
            expect(getInputText(input)).toEqual(123);
        });
        it("Возврат логических значений", () => {
            const input = { value: true };
            expect(getInputText(input)).toEqual(true);
        });
    });
    describe("Тесты на предельных значениях", () => {
        it("Возврат очень длинной троки", () => {
            const longText = 'a'.repeat(10000);
            const input = { value: longText };
            expect(getInputText(input)).toEqual(longText);
            expect(getInputText(input).length).toEqual(10000);
        });
        it("Возврат Эмидзи", () => {
            const input = { value: 'Hello 😊 World 🌍'};
            expect(getInputText(input)).toEqual('Hello 😊 World 🌍');
        });
        it("Возврат пробельных символов", () => {
            const input = { value: '\t\n\r\f\v' };
            expect(getInputText(input)).toEqual('\t\n\r\f\v');
        });
        it("Возврат объекта", () => {
            const obj = {key: 'value' };
            const input = obj;
            expect(getInputText(input)).toEqual(obj);
        });
    });
});
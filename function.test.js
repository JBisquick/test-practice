import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./function";

const calc = calculator();

test('capitalize london', () => {
    expect(capitalize('london')).toMatch(/London/);
});

test('reverse string', () => {
    expect(reverseString('hello')).toMatch(/olleh/);
});

test('add', () => {
    expect(calc.add(3, 3)).toBe(6);
});

test('subtract', () => {
    expect(calc.subtract(3, 3)).toBe(0);
});

test('divide', () => {
    expect(calc.divide(2, 2)).toBe(1);
});

test('multiply', () => {
    expect(calc.multiply(2, 2)).toBe(4);
});

test('wrapping', () => {
    expect(caesarCipher('zebra', 3)).toMatch(/cheud/);
});

test('uppercase', () => {
    expect(caesarCipher('Timmy', 6)).toMatch(/Zosse/);
});

test('punctuation', () => {
    expect(caesarCipher('dog is playing.', 1)).toMatch(/eph jt qmbzjoh./);
});

test('array info', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

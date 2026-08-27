import { describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helper';

test('should add positives numbers', () =>{
   
    const result = add(1,1);

    // if (result !== 2){
    //     throw new Error('El resultado es diferente');
    // }

    expect(result).toBe(2);
});

describe('subtract', () => {

    test('should subtract two positive numbers', () => {
        const a = 2;
        const b = 4;
        
        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });

    test('should subtract two negative numbers', () => {
        const a = -2;
        const b = -4;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    })
})


describe('multiply', () => {

    test('should multiply two positive numbers', () => {
        const a = 2;
        const b = 4;
        
        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });

    test('should multiply two negative numbers', () => {
        const a = -2;
        const b = -4;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    })
})
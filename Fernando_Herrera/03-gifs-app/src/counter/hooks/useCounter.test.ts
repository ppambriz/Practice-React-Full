import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";



describe('useCounter', () => {
    test('Should initialize with default value of 10', () => {
        const { result} = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
    })

    test('Should initialize with value 20', () => {
        const { result} = renderHook(() => useCounter(20));

        expect(result.current.counter).toBe(20);
    })

    test('Should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleAdd()
        });    

        expect(result.current.counter).toBe(11);
    })

    test('Should decrement counter when handleSusbtrac is called', () => {
        const { result } = renderHook(() => useCounter());
        console.log({counter: result.current.counter})

        
        act(() => {
            result.current.handleSubtract();
        })

        console.log({counter: result.current.counter})

        expect(result.current.counter).toBe(9);
    });


    test('Should reset initial value', () => {
        const { result } = renderHook(() => useCounter());
        
        act(() => {
            result.current.handleReset();
        });

        expect(result.current.counter).toBe(10);
    });

    test('Should reset initial value when counter is defined in 15', () => {
        const { result } = renderHook(() => useCounter());

        const increment = result.current.counter + 5;
        
        act(() => {
            result.current.handleReset();
        })

        expect(result.current.counter).toBe(10);
    });


})
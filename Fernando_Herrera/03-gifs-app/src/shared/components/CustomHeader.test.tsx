import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import { CustomHeader } from "./CustomHeader";


describe('CustomHeader', () => {

    const title = 'Test title';

    test('should render the title correctly', () => {
        render(<CustomHeader title="Test title" />)

        // screen.debug();
        expect(screen.getByText(title)).toBeDefined();


    });

    test('should render the description when provided', () => {
        render(<CustomHeader title="Test title" description="Test Description" />)

        // screen.debug();
        expect(screen.getByText("Test Description")).toBeDefined();// Busca por texto en Description
        expect(screen.getByRole('paragraph')).toBeDefined(); //que existe una etiqueta "p"
        expect(screen.getByRole('paragraph').innerHTML).toBe('Test Description');

    });

    test('should not render description when not provided', () => {
        const { container } = render(<CustomHeader title= { title } />);

        const divElement = container.querySelector('.content-center');
        const h1 = divElement?.querySelector('h1');

        expect(h1?.innerHTML).toBe(title);

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();


    });
})
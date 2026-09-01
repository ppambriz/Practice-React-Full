import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { GifApp } from './GifApp';

describe('GifsApp', () => {//describe con dos parametros 1. Nombre del componente 2. código

    test('should render component properly', () => {
        //primer test
        const { container } = render(<GifApp />);

        expect(container).toMatchSnapshot();
    })
})
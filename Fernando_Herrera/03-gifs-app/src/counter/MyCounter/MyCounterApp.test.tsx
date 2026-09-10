import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />)

        // screen.debug();

        
    })
})
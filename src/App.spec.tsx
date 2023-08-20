import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import customRender from './tests/utils';
import App from './App';

describe('App', () => {
    it('should be true', () => {
        expect(true).toBe(true)
    })

    it('should be render', () => {

        const { user } = customRender(<App />);
        
        const title = screen.getByText('Vite + React');

        user.click(title);
        expect(screen.getByText('Vite + React')).toBeInTheDocument();
    })


})
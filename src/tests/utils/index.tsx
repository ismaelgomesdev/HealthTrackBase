import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

export default function customRender(jsx: React.ReactElement) {
    return {
        user: userEvent.setup(),
        ...render(jsx)
    };
}
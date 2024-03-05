import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/index';
import ForgotPassword from './ForgotPassword';

describe('ForgotPassword component', () => {
    test('renders "Email Id" as a text', () => {
        render(<Provider store={store}><ForgotPassword/></Provider>);
        const helloWorldElement = screen.getByText('Email Id');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders "Email password reset link" as a text', () => {
        render(<Provider store={store}><ForgotPassword/></Provider>);
        const helloWorldElement = screen.getByText('Email password reset link');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('forgot password API', () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ eamail: 'abc@email.com', requestType: 'PASSWORD_RESET'}],
        });
        render(<Provider store={store}><ForgotPassword/></Provider>);
    });

});


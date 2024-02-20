import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/index';
import AuthForm from './AuthForm';

describe('AuthForm component', () => {
    test('renders "Email Id" as a text', () => {
        render(<Provider store={store}><AuthForm/></Provider>);
        const helloWorldElement = screen.getByText('Email Id');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders "Password" as a text', () => {
        render(<Provider store={store}><AuthForm/></Provider>);
        const helloWorldElement = screen.getByText('Password');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders "Confirm Password" as a text', () => {
        render(<Provider store={store}><AuthForm/></Provider>);
        const helloWorldElement = screen.getByText('Confirm Password');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders "Forgot Password?" as a text', () => {
        render(<Provider store={store}><AuthForm/></Provider>);
        const helloWorldElement = screen.getByText('Forgot Password?');
        expect(helloWorldElement).toBeInTheDocument();
    });
    // test('renders "Don\'t have an account? Sign Up" as a text', () => {
    //     render(<Provider store={store}><AuthForm/></Provider>);
    //     const helloWorldElement = screen.getByText('Don\'t have an account? Sign Up');
    //     expect(helloWorldElement).toBeInTheDocument();
    // });
   
    // test('renders Hello World as a text', () => {
    //     render(<Expense />);
    //     const helloWorldElement = screen.getAllByText('Category');
    //     expect(helloWorldElement).toHaveLength(2);
        
    // });
    // test('renders Hello World as a text', () => {
    //     render(<Expense />);
    //     const helloWorldElement = screen.getAllByText('Desc');
    //     expect(helloWorldElement).toHaveLength(2);
    // });
    // test('renders Hello World as a text', () => {
    //     render(<Expense />);
    //     const helloWorldElement = screen.getAllByText('Money');
    //     expect(helloWorldElement).toHaveLength(2);
    // });
    // test('renders "Actions" as a text for Delete & Edit button', () => {
    //     render(<Expense />);
    //     const helloWorldElement = screen.getByText('Actions');
    //     expect(helloWorldElement).toBeInTheDocument();
    // });
    // test('renders "#" as a data id in Column head', () => {
    //     render(<Expense />);
    //     const helloWorldElement = screen.getByText('#');
    //     expect(helloWorldElement).toBeInTheDocument();
    // });
    

});


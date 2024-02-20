import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from '../../store/index';
import Expense from './Expense';

describe('Expense component', () => {
    test('renders "Welcome to Expense Tracker!!!" as a text', () => {
        render(<Provider store={store}><Expense /></Provider>);
        const helloWorldElement = screen.getByText('Welcome to Expense Tracker!!!');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders "Add Expense" as a text', () => {
        render(<Provider store={store}><Expense /></Provider>);
        const helloWorldElement = screen.getByText('Add Expense');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders "Your Expenses" as a text', () => {
        render(<Provider store={store}><Expense /></Provider>);
        const helloWorldElement = screen.getByText('Your Expenses');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders Hello World as a text', () => {
        render(<Provider store={store}><Expense /></Provider>);
        const helloWorldElement = screen.getAllByText('Category');
        expect(helloWorldElement).toHaveLength(2);
        
    });
    test('renders Hello World as a text', () => {
        render(<Provider store={store}><Expense /></Provider>);
        const helloWorldElement = screen.getAllByText('Desc');
        expect(helloWorldElement).toHaveLength(2);
    });
    test('renders Hello World as a text', () => {
        render(<Provider store={store}><Expense /></Provider>);
        const helloWorldElement = screen.getAllByText('Money');
        expect(helloWorldElement).toHaveLength(2);
    });
    test('renders "Actions" as a text for Delete & Edit button', () => {
        render(<Provider store={store}><Expense /></Provider>);
        const helloWorldElement = screen.getByText('Actions');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders "#" as a data id in Column head', () => {
        render(<Provider store={store}><Expense /></Provider>);
        const helloWorldElement = screen.getByText('#');
        expect(helloWorldElement).toBeInTheDocument();
    });
    // test('renders "Download CSV" as a text', () => {
    //     render(<Expense />);
    //     const helloWorldElement = screen.getAllByText('Download CSV');
    //     expect(helloWorldElement).toBeInTheDocument();
    // });
    // test('renders Hello World as a text', () => {
    //     render(<Expense />);
    //     const helloWorldElement = screen.getByText('Edit');
    //     expect(helloWorldElement).toBeInTheDocument();
    // });    

    // test('renders "good to see you" uf the button was not clicked', () => {
    //     render(<Expense />);
    //     const para = screen.getByText('good to see you', { exact: false});
    //     expect(para).toBeInTheDocument();
    // });
    // test('renders "changed" if the button wss not clicked', ()=>{
    //     render(<Expense />);
        
    //     const buttonElement = screen.getByRole('button');
    //     // userEvent.click(buttonElement)

    //     const outputElem = buttonElement.getByText('Delete');
    //     expect(outputElem).toBeInTheDocument();
    // });

    // test('renders "changed" if the button wss not clicked', ()=>{
    //     render(<Expense />);
        
    //     const buttonElement = screen.getByRole('button');
    //     userEvent.click(buttonElement)

    //     const outputElem = screen.getByText('Changed!');
    //     expect(outputElem).toBeInTheDocument();
    // });

});


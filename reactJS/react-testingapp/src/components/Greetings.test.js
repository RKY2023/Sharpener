import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from "./Greetings";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting/>);
    
        // Act 
        //.. nothing
        
        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    
    });

    test('renders "good to see you" uf the button was not clicked', () => {
        render(<Greeting/>);
        const para = screen.getByText('good to see you', { exact: false});
        expect(para).toBeInTheDocument();
    });

    test('renders "changed" if the button wss not clicked', ()=>{
        render(<Greeting/>);
        
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const outputElem = screen.getByText('Changed!');
        expect(outputElem).toBeInTheDocument();
    });

});


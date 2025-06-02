import { fireEvent, render, screen } from "@testing-library/react";
import Addinput from "../AddInput";

const mockedSetToDo = jest.fn();

describe(('Addinput component testing'), () => {
    test('renders input element', () => {
        render(<Addinput todos={[]} setTodos={mockedSetToDo}/>);
        expect(
            screen.getByPlaceholderText('Add a new task here...')
        ).toBeInTheDocument();
    });

    test('should be able to type into input', () => {
        render(<Addinput todos={[]} setTodos={mockedSetToDo}/>);
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        fireEvent.change(inputElement, { target: { value: 'buy water' }});

        expect(inputElement.value).toBe('buy water');;
    })

    test('should be able to type into input', () => {
        render(<Addinput todos={[]} setTodos={mockedSetToDo}/>);
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        const buttonElement = screen.getByRole('button', { name: 'Add' });
        fireEvent.change(inputElement, { target: { value: 'buy water' }});
        fireEvent.click(buttonElement);

        expect(inputElement.value).toBe('');;
    })
})
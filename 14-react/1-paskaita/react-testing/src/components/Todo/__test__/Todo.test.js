import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (task) => {
    const inputElement = screen.getByPlaceholderText('Add a new task here...');
    const buttonElement = screen.getByRole('button', { name: 'Add' });

    task.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task }});
        fireEvent.click(buttonElement);
    })
}

describe('todo components tests', () => {
    test('renders same text passed into tittle prop', () => {
        render(<MockTodo />);
        addTask(['buy milk'])

        const divElement = screen.getByText('buy milk');
        expect(divElement).toBeInTheDocument();
    })

    // test('render multiple items', () => {
    //     render(<MockTodo />);
    //     addTask(['a' , 'b', 'c']);
    //     const divElements = screen.getAllByTestId('task-container');

    //     expect(divElements.length).toBe(3);
    // })
})
import { useDispatch } from "react-redux";

const Todo = ({todo}) => {

    const dispatch = useDispatch();

    const onTodoClick = (id) => {
        dispatch(toogleTodo(id))
    }

    return (
        <>
            {todo && (
                <span onClick={() => onTodoClick(todo.name)}>
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        disabled/>
                    {todo.name}
                </span>
            )}
        </>
    )
};

export default Todo;
import { useSelector } from 'react-redux';
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './features/todo/todoSlice';
import Button from '@mui/material/Button';


export default function Todo(){
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    return(
    <>
        <h1 className=' font-bold text-3xl underline text-center my-6'>Todo App</h1>
       
        <AddForm />
<<<<<<< HEAD
        <div className='flex justify-center items-center flex-col mb-4 border-solid border-2 border-gray-300 w-1/2 mx-auto rounded-lg p-4'>
=======
        <div className='todo flex justify-center items-center flex-col mb-4 border-solid border-2 border-gray-300 w-1/2 mx-auto rounded-lg p-4'>
>>>>>>> 68cd2e5 (Add some responsiveness)
            <h2 className='text-center font-bold text-xl underline mb-4'>Todo List</h2>
            <ol className='list-decimal space-y-2'>
                {todos.map((todo) => (
                    <li key={todo.id} className='font-bold'>
                        {todo.task} &nbsp; &nbsp; <Button onClick={() => dispatch(deleteTodo(todo.id))} variant="text" type="submit" className='bg-red-500 hover:bg-red-700 text-white font-bold rounded'>Complete</Button>
                    </li>
                ))}
            </ol>
        </div>
       
    </>
    )
}
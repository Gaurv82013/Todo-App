import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todo/todoSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddForm(){
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        setTask(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
        setTask(""); 
    }



    return(
        <>
<<<<<<< HEAD
        <div className='flex justify-center items-center flex-col mb-4 border-solid border-2 border-gray-300 w-1/2 mx-auto rounded-lg p-4'>
=======
        <div className='todo flex justify-center items-center flex-col mb-4 border-solid border-2 border-gray-300 w-1/2 mx-auto rounded-lg p-4'>
>>>>>>> 68cd2e5 (Add some responsiveness)
            <h2 className=' font-bold text-xl underline'>Add Todo</h2><br />
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Add Task" variant="outlined" value={task} onChange={handleChange} required/> <br /><br />
                <Button variant="contained" type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded'>Add Todo</Button>
            </form>
        </div>
        </>
    )
}
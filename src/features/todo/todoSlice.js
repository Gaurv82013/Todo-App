import { createSlice,nanoid } from '@reduxjs/toolkit';

const initialState={
    todos:[{id:"abc", task:"sample task", isDone:false}],
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const newTodo={
                id: nanoid(),  // generate unique id
                task: action.payload,  // task text from action payload
                isDone: false,
            };
            state.todos.push(newTodo);  // Redux Toolkit allows direct state mutation
        },
        deleteTodo:(state, action)=>{
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload);  // remove todo by id
        },
        marksAsDone:(state, action)=>{
            state.todos= state.todos.map((todo)=>{                  // mark todo as done by id
                if(todo.id === action.payload){
                    todo.isDone = true;
                }
                return todo;
            });
        }
    }

})

export const {addTodo, deleteTodo, marksAsDone} = todoSlice.actions;           // export actions

export default todoSlice.reducer;                     // export reducer
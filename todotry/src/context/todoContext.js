
import { createContext } from 'react'
const todoContext = createContext({
    todos:[
        {
        id:1,
        todo:"Todo msg",
        completed:false
    }],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

   



})
export default todoContext
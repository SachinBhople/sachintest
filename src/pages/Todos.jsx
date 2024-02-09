import React from 'react'
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from '../redux/todoApi'

const Todos = () => {
    const { data, isLoading } = useGetTodosQuery()
    const [addTodo] = useAddTodoMutation()
    const [deleteTodo] = useDeleteTodoMutation()
    const [updateTodo] = useUpdateTodoMutation()

    const handleClick = e => {
        addTodo({ task: "learn RTk Query", priority: "high" })
    }

    // const handleEdit = e => {
    //     updateTodo({ task: "new task", priority: "low" })
    // }
    return <>
        <button onClick={handleClick}>Add todo</button>
        {
            data && data.map(item => <div>
                {item.task}
                {item.priority}
                <button onClick={e => updateTodo({ ...item, task: "NEW TASK" })} >edit</button>
                <button onClick={e => deleteTodo(item.id)}>delete</button>
            </div>)
        }
    </>

}

export default Todos
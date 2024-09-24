'use client'

import React, {useState} from "react";
import { useRouter } from "next/navigation";
import Input from '@/app/create-todo/_components/Input'
import styles from '@/app/create-todo/page.module.css'


export default function CreateTodoForm() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useState('')

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleTodoChange(e) {
        setTodo(e.target.value)
    }

    async function postTodos(e) {
        e.preventDefault()
        if (!title) {
            alert('there is no title')
        } else if(!todo) {
            alert('there is no todo')
        }
    
        try {
            const res = await fetch('http://localhost:3000/api/todo', {
                method: 'POST',
                body: JSON.stringify({title, todo})
            })
            if (res.ok) {
                setTitle('')
                setTodo('')
                alert('todo created')
                router.push('/')
                router.refresh()
            }
        } catch(err) {
            alert('recheck values entered')
        }
        
    }

    return(
        <form className={styles.createTodoForm} onSubmit={postTodos}>
            <h1>Create Todo</h1>
            <h2>title:</h2>
            <Input type='title' onChange={handleTitleChange} value={title} />
            <h2>todo:</h2>
            <Input type='todo' onChange={handleTodoChange} value={todo} />
            <button className={styles.button} type="submit">click me</button>
        </form>
    )
}
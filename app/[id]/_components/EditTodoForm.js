'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/create-todo/_components/Input";
import styles from '@/app/[id]/page.module.css'

export default function EditTodoForm(props) {
    const router = useRouter()
    const [title, setTitle] = useState(`${props.title}`)
    const [todo, setTodo] = useState(`${props.todo}`)

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleTodoChange(e) {
        setTodo(e.target.value)
    }

    async function handleUpdate(e) {
        e.preventDefault()
        if (!title) {
            alert('there is no title')
        } else if(!todo) {
            alert('there is no todo')
        }
    
        try {
            const res = await fetch(`http://localhost:3000/api/todo/${props.id}`, {
                method: 'PUT',
                body: JSON.stringify({title, todo})
            })

            if (!res.ok) {
                throw new Error('error updating todo')
            }
            alert('todo updated')
            router.push('/')
            router.refresh()
        } catch(err) {
            alert('recheck values entered')
        }
    }

    return (
        <form className={styles.editTodoForm} onSubmit={handleUpdate}>
            <h1>Edit Todo</h1>
            <Input
                className={styles.createInput} 
                type='title' 
                value={title} 
                onChange={handleTitleChange} 
            />
            <Input 
                className={styles.textarea} 
                type='todo' 
                value={todo} 
                onChange={handleTodoChange} 
            />
            <button className={styles.button} type='submit'>click me</button>
        </form>
    )
}
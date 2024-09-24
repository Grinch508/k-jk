'use client'
import { useRouter } from 'next/navigation'
import styles from '@/app/page.module.css'

export default function DeleteButton(props) {
    const router = useRouter()
    async function removeTodo() {
        const confirmed = confirm('Are you sure?')
        
        if (confirmed) {
            await fetch(`http://localhost:3000/api/todo?id=${props.id}`, {
                method: "DELETE"
            })
            alert("todo deleted")
            router.refresh()
        }
    }
    return (
        <button className={styles.button} onClick={removeTodo}>delete</button>
    )
}
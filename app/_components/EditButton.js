'use client'
import { useRouter } from 'next/navigation'
import styles from '@/app/page.module.css'

export default function EditButton(props) {
    const router = useRouter()
    async function handleClick(e) {
        e.preventDefault()
        router.push(`http://localhost:3000/${props.id}`)
    }

    return <button className={styles.button} onClick={handleClick}>edit</button>
}
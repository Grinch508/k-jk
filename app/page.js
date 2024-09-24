import Link from "next/link";
import styles from "./page.module.css";
import DeleteButton from "@/app/_components/DeleteButton"
import EditButton from "@/app/_components/EditButton";
async function getTodos() {
  const active = true

  try {
    const res = await fetch('http://localhost:3000/api/todo', {cache: 'no-store'})

    if (!res.ok) {
      throw new Error('Failed to fetch todos')
    }

    return res.json()
  } catch(err) {
    console.log(err)
    throw new Error('error loading todos')
  }
}

export default async function Home() {
  const {todos = []} = await getTodos()
  return (
    <section>
      {todos.map(t => (
        <form className={styles.todoForm} key={t._id}>
          <h1>{t.title}</h1>
          <p>{t.todo}</p>
          <EditButton id={t._id} />
          <DeleteButton id={t._id} />
        </form>
      ))}
    </section>
  );
}

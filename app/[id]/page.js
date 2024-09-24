import EditTodoForm from "./_components/EditTodoForm";

async function getTodoById(id) {
    
    try {
        const res = await fetch(`http://localhost:3000/api/todo/${id}`, {cache: 'no-store'})

        if (!res.ok) {
            throw new Error('failed to get todo')
        }

        return res.json()
    } catch(err) {
        console.log(err)
    }
}

export default async function EditTodo({params}) {
    const { id } = params
    const {data} = await getTodoById(id)
    const {title, todo} = data
    return (
        <EditTodoForm id={id} title={title} todo={todo} />
    )
}
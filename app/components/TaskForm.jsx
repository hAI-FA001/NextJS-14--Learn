import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

const createTask = async (formData) => {
  'use server'
  const content = formData.get('content')
  console.log('From Server Action: ', content)

  await prisma.task.create({ data: { content } })

  revalidatePath('/tasks')
}

const TaskForm = async () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          name="content"
          placeholder="Type here"
          className="input input-bordered join-item w-full"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Create
        </button>
      </div>
    </form>
  )
}
export default TaskForm

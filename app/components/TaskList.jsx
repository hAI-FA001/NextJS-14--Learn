import prisma from '@/utils/db'
import Link from 'next/link'
import DeleteForm from './DeleteForm'

const deleteTask = async (id) => {
  await prisma.task.delete({ where: { id } })
}

const TaskList = async () => {
  const tasks = await prisma.task.findMany()

  return (
    <div>
      {tasks.length === 0 ? (
        <h1 className="mt-8 font-medium text-lg">No Tasks</h1>
      ) : (
        <ul className="mt-8">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="flex px-6 py-4 mb-4 justify-between items-center border border-base-300 rounded-lg shadow-lg"
            >
              <h2
                className={`text-lg capitalize font-bold ${
                  t.completed ? 'line-through' : null
                }`}
              >
                {t.content}
              </h2>

              <div className="flex gap-6 items-center">
                <Link href={`/tasks/${t.id}`} className="btn btn-accent btn-xs">
                  edit
                </Link>

                <DeleteForm id={t.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default TaskList

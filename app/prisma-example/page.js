import prisma from '@/utils/db'

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'Wake Up',
    },
  })

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return allTasks
}

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers()

  return (
    <div>
      <h1 className="text-7xl">Prisma Example</h1>
      {tasks.map((t) => (
        <h2 key={t.id} className="text-xl py-2">
          {t.content}
        </h2>
      ))}
    </div>
  )
}

export default PrismaExamplePage

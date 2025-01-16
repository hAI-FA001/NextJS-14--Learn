'use server'

import { revalidatePath } from 'next/cache'
import prisma from './db'

export const getAllTasks = async () =>
  prisma.task.findMany({ orderBy: { createdAt: 'desc' } })

export const createTask = async (formData) => {
  const content = formData.get('content')
  console.log('From Server Action: ', content)

  await prisma.task.create({ data: { content } })

  revalidatePath('/tasks')
}

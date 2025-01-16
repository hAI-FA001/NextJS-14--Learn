'use server'

import { revalidatePath } from 'next/cache'
import prisma from './db'
import { redirect } from 'next/navigation'

export const getAllTasks = async () =>
  await prisma.task.findMany({ orderBy: { createdAt: 'desc' } })

export const createTask = async (formData) => {
  const content = formData.get('content')
  console.log('From Server Action: ', content)

  await prisma.task.create({ data: { content } })

  revalidatePath('/tasks')
}

export const createTaskCustom = async (formData) => {
  const addDelay = async () =>
    await new Promise((resolve) => setTimeout(resolve, 1000))
  await addDelay()

  const content = formData.get('content')
  console.log('From Server Action: ', content)

  await prisma.task.create({ data: { content } })

  revalidatePath('/tasks')
}

export const deleteTask = async (formData) => {
  const id = formData.get('id')
  await prisma.task.delete({ where: { id } })
  revalidatePath('/tasks')
}

export const getTaskWithID = async (id) =>
  await prisma.task.findUnique({ where: { id } })

export const updateTask = async (formData) => {
  const id = formData.get('id')
  const content = formData.get('content')
  const completed = formData.get('completed')

  await prisma.task.update({
    where: { id },
    data: { content, completed: completed === 'on' },
  })

  redirect('/tasks')
}

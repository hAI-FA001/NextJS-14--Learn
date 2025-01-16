'use server'

import { revalidatePath } from 'next/cache'
import prisma from './db'
import { z, ZodError } from 'zod'
import { redirect } from 'next/navigation'

const addDelay = async () =>
  await new Promise((resolve) => setTimeout(resolve, 500))

export const getAllTasks = async () =>
  await prisma.task.findMany({ orderBy: { createdAt: 'desc' } })

export const createTask = async (formData) => {
  const content = formData.get('content')
  console.log('From Server Action: ', content)

  await prisma.task.create({ data: { content } })

  revalidatePath('/tasks')
}

export const createTaskCustom = async (prevState, formData) => {
  await addDelay()

  const Task = z.object({
    content: z.string().min(5),
  })

  const content = formData.get('content')
  console.log('From Server Action: ', content)

  try {
    Task.parse({ content })
    await prisma.task.create({ data: { content } })
    revalidatePath('/tasks')

    return { message: 'success' }
  } catch (error) {
    // console.log(error)
    if (error instanceof ZodError) {
      return { message: error.issues[0].message }
    }
    return { message: 'error' }
  }
}

export const deleteTask = async (formData) => {
  await addDelay()
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

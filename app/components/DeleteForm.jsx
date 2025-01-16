'use client'

import { deleteTask } from '@/utils/actions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  // console.log('PENDING: ', pending)

  return (
    <button type="submit" className="btn btn-error btn-xs" disabled={pending}>
      {pending ? 'working...' : 'delete'}
    </button>
  )
}

const initialState = { message: null }

const DeleteForm = ({ id }) => {
  const [state, formAction] = useActionState(deleteTask, initialState)

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  )
}
export default DeleteForm

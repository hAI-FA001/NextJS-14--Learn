'use client'

import { deleteTask } from '@/utils/actions'
import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

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

  useEffect(() => {
    if (state.message) {
      if (state.message === 'success') {
        toast.success('Deleted Task')
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  )
}
export default DeleteForm

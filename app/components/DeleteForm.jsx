'use client'

import { deleteTask } from '@/utils/actions'
import { useFormStatus } from 'react-dom'

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  console.log('PENDING: ', pending)

  return (
    <button type="submit" className="btn btn-error btn-xs" disabled={pending}>
      {pending ? 'working...' : 'delete'}
    </button>
  )
}

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  )
}
export default DeleteForm

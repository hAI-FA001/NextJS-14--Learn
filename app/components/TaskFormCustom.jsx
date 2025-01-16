'use client'

import { createTaskCustom } from '@/utils/actions'
import { useFormStatus } from 'react-dom'

const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? 'Working...' : 'Create'}
    </button>
  )
}

const TaskFormCustom = async () => {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input
          type="text"
          name="content"
          placeholder="Type here"
          className="input input-bordered join-item w-full"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  )
}
export default TaskFormCustom

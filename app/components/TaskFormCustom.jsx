'use client'

import { createTaskCustom } from '@/utils/actions'
import { useActionState } from 'react'
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

const initialState = { message: null }

const TaskFormCustom = () => {
  // useFormState renamed to useActionState
  const [state, formAction] = useActionState(createTaskCustom, initialState)

  return (
    <form action={formAction}>
      {state.message && <p className="mb-2 capitalize">{state.message}</p>}
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

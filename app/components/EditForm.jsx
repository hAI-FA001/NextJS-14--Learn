'use client'

import { updateTask } from '@/utils/actions'
import { useFormStatus } from 'react-dom'

const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block btn-sm"
      disabled={pending}
    >
      {pending ? 'Working...' : 'Update'}
    </button>
  )
}

const EditForm = ({ task }) => {
  return (
    <form
      action={updateTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={task.id} />

      <div className="form-control">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            className="checkbox checkbox-primary checkbox-sm"
            type="checkbox"
            name="completed"
            id="completed"
            defaultChecked={task.completed}
          />
        </label>
      </div>
      <input
        className="input input-bordered w-full my-4"
        placeholder="Type here"
        type="text"
        name="content"
        defaultValue={task.content}
        required
      />

      <SubmitBtn />
    </form>
  )
}
export default EditForm

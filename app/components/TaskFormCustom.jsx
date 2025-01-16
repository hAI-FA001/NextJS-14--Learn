import { createTaskCustom } from '@/utils/actions'

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
        <button type="submit" className="btn btn-primary join-item">
          Create
        </button>
      </div>
    </form>
  )
}
export default TaskFormCustom

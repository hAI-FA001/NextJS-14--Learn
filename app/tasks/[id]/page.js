import EditForm from '@/app/components/EditForm'
import { getTaskWithID } from '@/utils/actions'

const SingleTaskPage = async ({ params }) => {
  const id = (await params).id
  const task = await getTaskWithID(id)

  return <EditForm task={task} />
}
export default SingleTaskPage

import { startCase } from 'lodash'
import EditForm from '../EditForm'

const Show = (props) => {
  const { mailingList } = props

  return (
    <div>
      <h2>{mailingList.name}</h2>
    </div>
  )
}

export default Show

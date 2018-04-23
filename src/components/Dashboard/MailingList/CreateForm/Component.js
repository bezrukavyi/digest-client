import { startCase } from 'lodash'
import Field from 'components/Field'

const EditForm = (props) => {
  const { handleSubmit, errors } = props

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="mt-50">
        <Field.Input name='name' type='text' {...props} />
        <Field.Input name='description' type='text' {...props} />
        <Field.Input name='slug' type='text' {...props} />
      </div>

      <button className="btn btn btn-blue-gradient" type="submit">
        Create
      </button>
    </form>
  )
}

export default EditForm

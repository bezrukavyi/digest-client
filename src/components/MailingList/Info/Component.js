import { map } from 'lodash'
import PostLink from '~/components/PostLink'

const MailingList = (props) => (
  <div>
    <h1>Hello, { props.user.email }</h1>
    <ul>
      {
        map(props.mailingLists, (item, key) => (
          <li key={key} >
            <PostLink id={item.id} title={item.name} />
          </li>
        ))
      }
    </ul>
  </div>
)

export default MailingList

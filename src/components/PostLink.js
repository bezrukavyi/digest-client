import Link from 'next/link'
import Path from '~/constants/Path'

const PostLink = (props) => (
  <Link as={Path.Dashboard.MailingList.as(props.id)} href={Path.Dashboard.MailingList.href(props.id)}>
    <a>{props.title}</a>
  </Link>
)

export default PostLink

import Link from 'next/link'
import Path from 'constants/Path'

const MailingListLink = (props) => (
  <Link href={Path.MailingList.Archive.href(props.slug)} as={Path.MailingList.Archive.as(props.slug)} >
    <a>{props.title}</a>
  </Link>
)

export default MailingListLink

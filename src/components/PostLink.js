import Link from 'next/link'

const PostLink = (props) => (
  <Link as={`/mailing_lists/${props.id}`} href={`/mailing_list?id=${props.id}`}>
    <a>{props.title}</a>
  </Link>
)

export default PostLink

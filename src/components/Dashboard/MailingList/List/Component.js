import { startCase } from 'lodash'
import Link from 'next/link'
import Path from 'constants/Path'
import { sortBy, map } from 'lodash'

const DashboardPath = Path.Dashboard

const List = (props) => {
  const { mailingLists } = props

  return (
    <ul>
      {
        map(sortBy(mailingLists, mailingList => -mailingList.createdAt), (mailingList, key) => (
          <li key={key}>
            <Link href={DashboardPath.MailingList.href(mailingList.slug)} as={DashboardPath.MailingList.as(mailingList.slug)} >
              <a>{mailingList.name}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default List

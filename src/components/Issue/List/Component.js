import { sortBy, map, startCase } from 'lodash'
import timeFormat from 'utils/timeFormat'
import Link from 'next/link'
import Path from 'constants/Path'
import classnames from 'classnames'

const IssuePath = Path.MailingList.Issue

const Item = ({ currentIssue, currentMailingList, issue}) =>
  <Link href={IssuePath.href(currentMailingList.slug, issue.slug)} as={IssuePath.as(currentMailingList.slug, issue.slug)}>
    <a className={classnames('issues-card', { 'active': currentIssue && currentIssue.slug == issue.slug } )}>
      <div className="issues-card__header">
        <div className="issues-card__release">#{issue.releaseNumber}</div>
        <div className="issues-card__date">{timeFormat.default(issue.releaseAt)}</div>
      </div>
      <div className="issues-card__name">{startCase(issue.name)}</div>
    </a>
  </Link>

const List = (props) => {
  const { currentIssue, currentMailingList, issues } = props

  return (
    <ul className="issues-card__container">
      {
        map(sortBy(issues, issue => -issue.releaseAt), (issue, key) => (
          <li key={key} className="issues-card__wrap">
            <Item
              currentIssue={currentIssue}
              currentMailingList={currentMailingList}
              issue={issue}
            />
          </li>
        ))
      }
    </ul>
  )
}    

export default List

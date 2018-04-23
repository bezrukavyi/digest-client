import { startCase } from 'lodash'
import Link from 'next/link'
import Path from 'constants/Path'

const ArchivePath = Path.MailingList.Archive
const RootPath = Path.MailingList.Root
const IssuePath = Path.MailingList.Issue

const Header = (props) => {
  const { mailingList, lastIssue } = props

  return (
    <div className="row mt-35">
      <div className="col-md-auto mb-35 mr-auto mailing-list-title">
        <Link href={RootPath.href(mailingList.slug)} as={RootPath.as(mailingList.slug)}>
          <a>{startCase(mailingList.name)}</a>
        </Link>
      </div>
      <div className="col-md-auto mb-35">
        <div className="row align-items-center">
          <div className="col">
            <Link href={ArchivePath.href(mailingList.slug)} as={ArchivePath.as(mailingList.slug)}>
              <a className="header-link">Archive</a>
            </Link>
          </div>

          {lastIssue &&
            <div className="col">
            <Link href={IssuePath.href(mailingList.slug, lastIssue.slug)} as={IssuePath.as(mailingList.slug, lastIssue.slug)}>
                <a className="header-link active">Latest</a>
              </Link>
            </div>
          }

          <div className="col"><a className="header-link" href="/hellstrmlundin/issues.rss">RSS</a></div>
          <div className="col">
            <Link href={RootPath.href(mailingList.slug)} as={RootPath.as(mailingList.slug)}>
              <a className="btn btn-blue-gradient">Subscribe</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

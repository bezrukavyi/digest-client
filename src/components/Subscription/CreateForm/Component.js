import Field from 'components/Field'
import Path from 'constants/Path'
import { startCase } from 'lodash'
import Link from 'next/link'

const ArchivePath = Path.MailingList.Archive
const RootPath = Path.MailingList.Root
const IssuePath = Path.MailingList.Issue

const CreateForm = (props) => {
  const { mailingList, lastIssue } = props
  const { handleSubmit, errors } = props

  return (
    <div className="container">
      <h1 className="mt-65 center mb-35 title">
        <Link href={RootPath.href(mailingList.slug)} as={RootPath.as(mailingList.slug)}>
          <a>{startCase(mailingList.name)}</a>
        </Link>
      </h1>
      <h2 className="mb-35 center subtitle">
        {mailingList.description}
      </h2>
      <div className="mb-25">
        <div className="flex-wrap">
          <form onSubmit={props.handleSubmit}>
            <div className="mr-20 grow-1">
              <Field.Input className={'subscription_email'} name='email' type='email' {...props} />
            </div>

            <button className="btn btn btn-blue-gradient" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
        {lastIssue &&
          <div className="description font-16 mt-20 mb-25 center">
            Check out our latest
            &nbsp;
            <Link href={IssuePath.href(mailingList.slug, lastIssue.slug)} as={IssuePath.as(mailingList.slug, lastIssue.slug)}>
              <a>Issue #{lastIssue.releaseNumber}</a>
            </Link>
            &nbsp;
            for a sample of what we're about
          </div>
        }
     
      <div className="bottom font-16 center">
        <Link href={ArchivePath.href(mailingList.slug)} as={ArchivePath.as(mailingList.slug)}>
          <a>Archive</a>
        </Link>
      </div>
    </div>

  )
}
export default CreateForm

import { startCase } from 'lodash'
import Link from 'next/link'
import Path from 'constants/Path'

const DashboardPath = Path.Dashboard

const Header = (props) => {
  return (
    <div className="row mt-35">
      <div className="col-md-auto mb-35 mr-auto mailing-list-title">
        <Link href={DashboardPath.Root.href} as={DashboardPath.Root.as}>
          <a>Dashboard</a>
        </Link>
      </div>
    </div>
  )
}

export default Header

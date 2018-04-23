import Base from '../Base'
import Dashboard from 'components/Dashboard'

const Layout = (props) =>
  <Base>
    <Dashboard.Header />
    { props.children }
  </Base>

export default Layout

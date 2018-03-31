import Base from '../Base'
import MailingList from 'components/MailingList'

const Layout = (props) =>
  <Base>
    <MailingList.Header />
    { props.children }
  </Base>

export default Layout

const Dashboard = require('./Dashboard')
const MailingList = require('./MailingList')

const PREFIX = '/'

const Root = {
  page: PREFIX + 'index',
  href: PREFIX,
  as: PREFIX,
}

const NotFound = {
  page: PREFIX + '404',
  href: PREFIX + '404',
  as: PREFIX + '404',
}

const NotAllowed = Dashboard.SignIn

const Error500 = {
  page: PREFIX + '500',
  href: PREFIX + '500',
  as: PREFIX + '500',
}

module.exports = {
  Dashboard,
  MailingList,
  Root,
  NotFound,
  Error500,
  NotAllowed,
}

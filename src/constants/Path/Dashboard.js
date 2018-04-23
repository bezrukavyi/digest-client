const PREFIX = '/dashboard/'

const Root = {
  page: `/dashboard`,
  href: '/dashboard',
  as: '/dashboard',
}

const MailingList = {
  page: PREFIX + `mailing_list`,
  href: (id) => PREFIX + `mailing_list?mailingListId=${id}`,
  as: (id) => PREFIX + id,
}

const IssueNew = {
  page: PREFIX + `issue_new`,
  href: (mailingListId) => PREFIX + `issue_new?mailingListId=${mailingListId}`,
  as: (mailingListId) => PREFIX + `${mailingListId}/issues/new`
}

const SignIn = {
  page: PREFIX + `sign_in`,
  href: PREFIX + 'sign_in',
  as: PREFIX + 'sign_in'
}

const SignUp = {
  page: PREFIX + `sign_up`,
  href: PREFIX + 'sign_up',
  as: PREFIX + 'sign_up'
}

const ForgotPassword = {
  page: PREFIX + `forgot_password`,
  href: PREFIX + 'forgot_password',
  as: PREFIX + 'forgot_password'
}

module.exports = {
  Root,
  MailingList,
  SignIn,
  SignUp,
  ForgotPassword,
  IssueNew,
}


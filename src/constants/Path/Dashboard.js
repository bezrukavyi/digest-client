const PREFIX = '/dashboard'

const Root = {
  href: (id) => PREFIX,
  as: (id) => PREFIX
}

const MailingList = {
  href: (id) => PREFIX + `/mailing_list?id=${id}`,
  as: (id) => PREFIX + `/mailing_lists/${id}`,
}

const SignIn = {
  href: PREFIX + '/sign_in',
  as: PREFIX + '/sign_in'
}

const SignUp = {
  href: PREFIX + '/sign_up',
  as: PREFIX + '/sign_up'
}

const ForgotPassword = {
  href: PREFIX + '/forgot_password',
  as: PREFIX + '/forgot_password'
}

export default {
  Root,
  MailingList,
  SignIn,
  SignUp,
  ForgotPassword,
}


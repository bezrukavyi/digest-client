const PREFIX = '/'

const Archive = {
  page: PREFIX + `mailing_list/archive`,
  href: (id) => PREFIX + `mailing_list/archive?mailingListId=${id}`,
  as: (id) => PREFIX + `${id}/archive`,
}

const Issue = {
  page: PREFIX + `mailing_list/issue`,
  href: (mailingList, id) => PREFIX + `mailing_list/issue?mailingListId=${mailingList}&issueId=${id}`,
  as: (mailingList, id) => PREFIX + `${mailingList}/issues/${id}`,
}

const Root = {
  page: PREFIX + 'mailing_list',
  href: (id) => PREFIX + `mailing_list?mailingListId=${id}`,
  as: (id) => PREFIX + id,
}

module.exports = {
  Archive,
  Issue,
  Root,
}

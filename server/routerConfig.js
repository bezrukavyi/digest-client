const path = require('path')
const Path = require(path.join(__dirname, '../src/constants/Path'))

StaticResources = [
  Path.Root,
  Path.NotFound,
  Path.NotAllowed,
  Path.Error500,
  Path.Dashboard.Root,
  Path.Dashboard.SignIn,
  Path.Dashboard.SignUp,
  Path.Dashboard.ForgotPassword,
]

DynamicResources = {
  'Dashboard.MailingList': {
    resourcePath: Path.Dashboard.MailingList,
    params: [':mailingListId'],
  },
  'Dashboard.IssueNew': {
    resourcePath: Path.Dashboard.IssueNew,
    params: [':mailingListId'],
  },
  'MailingList.Archive': {
    resourcePath: Path.MailingList.Archive,
    params: [':mailingListId'],
  },
  'MailingList.Issue': {
    resourcePath: Path.MailingList.Issue,
    params: [':mailingListId', ':issueId'],
  },
  'MailingList.Root': {
    resourcePath: Path.MailingList.Root,
    params: [':mailingListId'],
  },
}

const routerConfig = ({ server, app }) => {
  const handle = app.getRequestHandler()

  StaticResources.forEach((resourcePath) => {
    server.get(resourcePath.as, (req, res) => {
      app.render(req, res, resourcePath.page, { ...req.params })
    })
  })

  Object.keys(DynamicResources).forEach((name) => {
    const resourceParams = DynamicResources[name].params
    const resourcePath = DynamicResources[name].resourcePath

    server.get(resourcePath.as(...resourceParams), (req, res) => {
      app.render(req, res, resourcePath.page, { ...req.params })
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3002, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3002')
  })
}

module.exports = routerConfig

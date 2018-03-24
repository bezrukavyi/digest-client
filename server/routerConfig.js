const Path = {
  Dashboard: {
    MailingList: {
      server: '/dashboard/mailing_lists/:id',
      actual: '/dashboard/mailing_list',
    }
  },
  Any: '*',
}

const routerConfig = ({ server, app }) => {
  const handle = app.getRequestHandler()

  server.get(Path.Dashboard.MailingList.server, (req, res) => {
    const queryParams = { id: req.params.id }
    app.render(req, res, Path.Dashboard.MailingList.actual, queryParams)
  })

  server.get(Path.Any, (req, res) => {
    return handle(req, res)
  })

  server.listen(3002, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3002')
  })
}

module.exports = routerConfig

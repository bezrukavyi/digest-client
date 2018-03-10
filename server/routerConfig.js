const routerConfig = ({ server, app }) => {
  const handle = app.getRequestHandler()

  server.get('/mailing_lists/:id', (req, res) => {
    const actualPage = '/mailing_list'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
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

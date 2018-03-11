const analytic = next => async (context) => {
  const { asPath } = context
  console.log('Analytic', asPath)
  return next(context)
}

export default analytic

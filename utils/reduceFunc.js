const run = (list, index = 0) => {
  if (!list[index + 1]) return list[index]()
  return list[index](run(list, index + 1))
}

export default run

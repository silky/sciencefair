const cloneDeep = require('lodash/cloneDeep')

module.exports = (data, state, send, done) => {
  const update = cloneDeep(state.datasources)
  Object.assign(update, { list: data })

  send('datasources_update', update, done)
}

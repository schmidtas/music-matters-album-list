const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    components: 'src/components',
    images: 'src/images',
    styles: 'src/styles',
    utils: 'src/utils',
  })(config)

  return config
}

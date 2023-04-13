require('babel-register')({
presets: [ 'env' ]
})
// підключаємо серверну частину
module.exports = require('./serverIndivsdualTask.js')
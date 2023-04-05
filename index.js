require('babel-register')({
presets: [ 'env' ]
})
// підключаємо серверну частину
module.exports = require('./server3.js')
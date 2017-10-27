/* eslint-disable */
'use strict'
require('eventsource-polyfill')
// noInfo -->  {true} don't print HRM info to console
var hotClient = require('webpack-hot-middleware/client?noInfo=false&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})

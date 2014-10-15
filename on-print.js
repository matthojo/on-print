module.exports = OnPrint

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')

//
// OnPrint
// Provides the ability to run functions before and after a print request.
// Adapted from: http://tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/
//
// IE 5+, Firefox 6+, Chrome 9+, and Safari 5.1+ (not Opera)
//

/*
 * Construct a Print functions
 */
function OnPrint() {
  EventEmitter.call(this)
}

inherits(OnPrint, EventEmitter)

/*
* Listen for 'before' and 'after' events
*/
OnPrint.prototype.on = function (event, fn) {
  switch (event) {
    case 'before':
    case 'after':
      EventEmitter.prototype.on.apply(this, arguments)
      break
    default:
       throw new Error('Incorrect event type. It must be "before" or "after"')
  }
  return this
}

/*
* Start watching for print events
*/
OnPrint.prototype.start = function(cb) {
  var emitter = this

  // Initiate listeners
  if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print')
    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
        emitter.emit('before')
      } else {
        emitter.emit('after')
      }
    })
  }

  window.onbeforeprint = function () { emitter.emit('before') }
  window.onafterprint = function () { emitter.emit('after') }

  if(cb) cb()
}

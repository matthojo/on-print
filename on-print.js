module.exports = OnPrint

  //
  // OnPrint
  // Provides the ability to run functions before and after a print request.
  // Adapted from: http://tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/
  //
  // IE 5+, Firefox 6+, Chrome 9+, and Safari 5.1+ (not Opera)
  //

  // Cache window object
  var w = window

  /*
   * Construct a Print functions
   */
  function OnPrint() {
    this.before = []
    this.after = []
  }

  /*
  * Add a function to run before print.
  */
  OnPrint.prototype.addBefore = function (func) {
    if(func instanceof Array) {
      this.before = this.before.concat(func)
    } else {
      this.before.push(func)
    }

    return this
  }

  /*
  * Add a function to run after print.
  */
  OnPrint.prototype.addAfter = function (func) {

    if(func instanceof Array) {
      this.after = this.after.concat(func)
    } else {
      this.after.push(func)
    }

    return this
  }

  /*
  * Initialise before functions.
  */
  OnPrint.prototype.initBeforeFunctions = function () {
    for (var i = 0; i < this.before.length; i++) {
      this.before[i]()
    }

    return this
  }

  /*
  * Initialise after functions.
  */
  OnPrint.prototype.initAfterFunctions = function () {
    for (var i = 0; i < this.after.length; i++) {
      this.after[i]()
    }

    return this
  }

  // Make `onPrint` public
  w.onPrint = new OnPrint()

  // Initiate listeners
  if (w.matchMedia) {
    var mediaQueryList = w.matchMedia('print')
    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
        w.onPrint.initBeforeFunctions()
      } else {
        w.onPrint.initAfterFunctions()
      }
    })
  }

  w.onbeforeprint = w.onPrint.initBeforeFunctions
  w.onafterprint = w.onPrint.initAfterFunctions

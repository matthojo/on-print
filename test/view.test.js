var OnPrint = require('../')
  , assert = require('assert')
  , EventEmitter = require('events').EventEmitter

describe('view', function () {

  describe('new OnPrint()', function () {

    it('should create a new view', function () {
      var printListener = new OnPrint()
      assert(printListener instanceof OnPrint)
    })

    it('should inherit from node EventEmitter', function () {
      var printListener = new OnPrint()
      assert(printListener instanceof EventEmitter)
    })

  })

  describe('.on(\'before\')', function () {

    it('should run callback function when the given object emits the \'before\' event', function (done) {
      var printListener = new OnPrint()
      printListener.on('before', function () { done() })
      printListener.emit('before')
    })

  })

  describe('.on(\'after\')', function () {

    it('should run callback function when the given object emits the \'after\' event', function (done) {
      var printListener = new OnPrint()
      printListener.on('after', function () { done() })
      printListener.emit('after')
    })

  })

  describe('.start()', function () {

    it('should run callback function on .start()', function (done) {
      var printListener = new OnPrint()
      printListener.start(function () { done() })
    })

  })
})

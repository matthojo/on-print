/* globals QUnit */

(function() {

  QUnit.test('Make onPrint available', function( assert ) {
    assert.ok(window.onPrint, 'onPrint is available')
  })

  QUnit.testDone(function() {
    window.onPrint.before = []
    window.onPrint.after = []
  })

  QUnit.test('addBefore is adding a function', function( assert ) {
    window.onPrint.addBefore(function(){
      // Blank function
    })
    assert.equal(window.onPrint.before.length, 1, 'We expect function array to have a single function.')
  })

  QUnit.test('addBefore is handling mulitple functions', function( assert ) {
    window.onPrint.addBefore([function(){
      // Blank function 1
    }, function(){
      // Blank function 2
    }])
    assert.equal(window.onPrint.before.length, 2, 'We expect function array to have 2 functions.')
  })

  QUnit.test('addAfter is adding a function', function( assert ) {
    window.onPrint.addAfter(function(){
      // Blank function
    })
    assert.equal(window.onPrint.after.length, 1, 'We expect function array to have a single function.')
  })

  QUnit.test('addAfter is handling mulitple functions', function( assert ) {
    window.onPrint.addAfter([function(){
      // Blank function 1
    }, function(){
      // Blank function 2
    }])
    assert.equal(window.onPrint.after.length, 2, 'We expect function array to have 2 functions.')
  })

  QUnit.test('addBefore functions are running', function( assert ) {
    window.onPrint.addBefore(function(){
      window.testBeforeHasRun = true
    })
    window.onPrint.initBeforeFunctions()

    assert.ok(window.testBeforeHasRun, '`window.testBeforeHasRun` has been set')
  })

  QUnit.test('addAfter functions are running', function( assert ) {
    window.onPrint.addAfter(function(){
      window.testAfterHasRun = true
    })
    window.onPrint.initAfterFunctions()

    assert.ok(window.testAfterHasRun, '`window.testAfterHasRun` has been set')
  })

}())

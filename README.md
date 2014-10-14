# OnPrint

Provides the ablity to run functions before and after a print request.


## Usage

**Add a function to run before print**

```
window.onPrint.addBefore(function() {
  // Function code
})
```

**Add a function to run after print**

```
window.onPrint.addAfter(function() {
  // Function code
})
```

## Browser Support
IE 5+, Firefox 6+, Chrome 9+, and Safari 5.1+ (not Opera)

### License

BSD

### Authors / Contributors

Matthew Harrison-Jones

Adapted from: <http://tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/>

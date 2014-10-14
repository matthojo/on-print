# OnPrint

Provides the ablity to run functions before and after a print request.


## Usage


**Initiate OnPrint**

```
var OnPrint = require('on-print')
  , printListener = new OnPrint()
```

**Add a function to run before print**

```
printListener.on('before', fn)
```

**Add a function to run after print**

```
printListener.on('after', fn)
```

**Start watching for print events**

```
printListener.start()
```

## Browser Support
IE 5+, Firefox 6+, Chrome 9+, and Safari 5.1+ (not Opera)

### License

BSD

### Authors / Contributors

Matthew Harrison-Jones, Ben Gourley

Adapted from: <http://tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/>

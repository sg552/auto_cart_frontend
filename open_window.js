      var gui = require('nw.gui')
      /*
      var win = gui.Window.get()
      win.on('minimize', function(){
        console.log('is minimized')
      })
      win.minimize()
      win.removeAllListeners('minimize')
      */

      url = 'http://outlet.lenovo.com/SEUILibrary/controller/e/outlet_us/LenovoPortal/en_US/catalog.workflow:keyword-search?acc=true&category-id=7FCAD587E909113E3FB719E59569CDAC&&results-mode=1&page-size=500';
      var new_win = gui.Window.get(
        window.open(url)
      )

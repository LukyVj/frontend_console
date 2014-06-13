/*
Debuging file, using Bulllog by @_kevinatari
https://github.com/bullgit/Bulllog/

VIVA LA BULLGIT
*/

$(document).ready(function(){
   var Bulllog = function bullog(opts) {
      this.styleBuffer = [];
      for(key in opts) {
        this.styleBuffer.push(key + ':' + opts[key] + ';');
      };
      var tmpStyle = this.styleBuffer.toString();
      this.style = tmpStyle.replace(/\,/g, '');
    }

    Bulllog.prototype.msg = function(msg) {
      var msg = "%c" + msg;
      return console.log(msg, this.style);
    }

    var log = new Bulllog({
      'font-size': '1em',
      color: '#1393d5',
      background: '#FFF',
      padding: '0.3em',
      paddingBottom: '0',
      'font-style':'italic',
    });

    var limit = new Bulllog({
      'font-family':'helvetica',
      'font-size': '1.3em',
      color: '#663399',
      background: '#FFF',
      padding: '0',
    });

    var fnName = new Bulllog({
      'font-size': '1em',
      color: '#F12757',
      background: '#FFF',
      padding: '0.3em',
    });



  function debug(){

    // Time functions
    var beforeload = (new Date()).getTime();


      function stamp(){
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds;
        var now = d.toLocaleTimeString();

        var afterload = (new Date()).getTime();
        var seconds = ( afterload - beforeload ) / 1000;
        var gen = seconds;

       fnName.msg("Fontend Console V0.0.1");
       log.msg("======================");
       log.msg('|| DEBUGING LOGS :  ||');
       log.msg('||----------------  ||');
       log.msg('|| generated in :   ||');
       log.msg('|| > '+gen+'ms        ||');
       log.msg('||----------------  ||');
       log.msg('|| generated at :   ||');
       log.msg('|| > '+now+'       ||');
       log.msg('======================');
    }

    function activity(){
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds;
        var now = d.toLocaleTimeString();

        var afterload = (new Date()).getTime();
        var seconds = ( afterload - beforeload ) / 1000;
        var gen = seconds;
       log.msg('======================');
       log.msg('|| Still active at :||');
       log.msg('|| > '+now+'       ||');
       log.msg('======================');
    }

    // Event functions
    function eventList(){
      i = 0;
    $("*").on("click mousedown mouseup focus blur keydown change",function(e){
      $this = $(this)
      i++;
     limit.msg('[ '+ i +' ]--------------------------------[ '+ i +' ]');

    fnName.msg( 'Target : ');
    log.msg('> '+e.target);
    limit.msg('----------------');

    fnName.msg('Page X :');
    log.msg('> '+e.pageX+'px');
    limit.msg('----------------');

    fnName.msg('Page Y :');
    log.msg('> '+e.pageY+'px');
    limit.msg('----------------');

    fnName.msg('Wich :');
    log.msg('> '+e.which);
    limit.msg('----------------');

    fnName.msg('ID :');
    log.msg('> '+$this.attr('id'));
    limit.msg('----------------');

    fnName.msg('Class :');
    log.msg('> '+$this.attr('class'));
    limit.msg('----------------');

    fnName.msg('Length :');
    log.msg('> '+$this.length);
     });
    }
    function logger(){
      stamp();
      eventList();

      setInterval(function(){
        activity();
      }, 60000);
    }

    // Launch logs !
    logger();
  }

  function debugBox(){
  $('html').attr('data-debug','true');
  var boxDebug = '<div id="debugWindow"><p>Remove CSS animations & transitions : <span class="css-choice"><span class="fa fa-check" style="color:lime"></span><span class="fa fa-times" style="color:red"></span></span><br>Remove JS Debugger :<span class="js-choice"><span class="fa fa-check" style="color:lime"></span><span class="fa fa-times" style="color:red"></span></span></p></div>';
  $('html[data-debug*="true"] body').append(boxDebug);
  var addCSSDebug = $('#debugWindow').find('span.css-choice span.fa-check');
  var rmCSSDebug = $('#debugWindow').find('span.css-choice span.fa-times');

  var addJSDebug = $('#debugWindow').find('span.js-choice span.fa-check');
  var rmJSDebug = $('#debugWindow').find('span.js-choice span.fa-times');

  addCSSDebug.fadeOut(0);
    addCSSDebug.on('click', function(){
      $(this).fadeOut(0);
      $('html').attr('data-debug','true');
      log.msg('debug added');
      rmCSSDebug.fadeIn('fast');
    });
    rmCSSDebug.on('click', function(){
      $(this).fadeOut(0);
      $('html').attr('data-debug','false');
     log.msg('debug removed');
      addCSSDebug.fadeIn('fast');
    });

    addJSDebug.fadeOut(0);
    addJSDebug.on('click', function(){
      $(this).fadeOut(0);
      $('html').attr('src','#');
     log.msg('debug added');
      rmJSDebug.fadeIn('fast');
    });
    rmJSDebug.on('click', function(){
      $(this).fadeOut(0);
      $('#debugger').attr('src','#');
     log.msg('debug removed');
      addJSDebug.fadeIn('fast');
    });
}

function deploy(){
  // Debug functions
  debugBox();
  debug();
}



deploy();
// Expose jQuery to the global object
return (window.jQuery = window.$ = jQuery);

});

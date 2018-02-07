//IIFE immediately invoked function expression
(function(){
  var app = {
    init: function(){
      console.log("app initialised");
      routes.init();
    }
  }
  //Handle routes & states
  var routes = {
    init: function(){
      //what's in the hash?
      window.addEventListener('hashchange', function(){
         var route = window.location.hash.substring(1);
         sections.toggle(route);
       });
    }
  }
  //Render / toggle sections
  var sections = {
    toggle: function(route){
      var oldSelect = document.getElementsByClassName("active");
      for (var i=0; i < oldSelect.length; i++) {
        oldSelect[i].classList.remove("active");
      }
      var select = document.getElementById(route);
      select.classList.add("active");
    }
  }
  app.init();
})()

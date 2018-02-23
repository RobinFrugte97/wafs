import routes from 'static/modules/routes.js';

//IIFE immediately invoked function expression
(function(){
  'use strict';
  var app = {
    init: function(){
      console.log("app initialised");
      routes.init();
    }
  }
  app.init();
})()

//IIFE immediately invoked function expression
(function(){
  'use strict';
  var app = {
    init: function(){
      console.log("app initialised");
      routes.init();
    }
  }

  var events = {
    filter: function() {
      var submit = document.getElementById("submit");
      submit.addEventListener("click", function(){
          var userInput = document.getElementById("filterInput").value;
          window.location.replace("#filter/" + userInput);
      })

    }
  }
  //Handle routes & states
  var routes = {
    init: function(){
      this.handleEvents();
    },
    handleEvents: function(data){
      routie({
        "characters/:id": function(id){
          var sections = document.querySelectorAll("section");
          sections.forEach(function(section){
            section.classList.toggle('active');
          });
          api.character(id);
        },
        'filter/:input': function(input){
          console.log(input);
          api.filter(input);
        },
        '*': function() {
          var sections = document.querySelectorAll("section");
          sections.forEach(function(section){
            section.classList.toggle('active');
          });
          api.characters();
        }
      });
    }
  }
  //Render / toggle sections
  var template = {
    render: function(data, type){
      if (type == 'list') {
        var renderData = data.map(function(d, i){
          return {
            character: d.name,
            id: d.id,
            thumbnail: d.thumbnail.path + '/standard_xlarge.jpg'
          }
        });
        var directives = {
          link: {
            href: function() {
              return `#characters/${this.id}`;
            }
          },
          thumbnail: {
            src: function(){
              return this.thumbnail;
            }
          }
        }
        Transparency.render(document.getElementById("characters"), renderData, directives);
        events.filter();
      } else if (type == 'detail') {
        var renderData = data.map(function(d, i){
          return {
            character: d.name,
            heroImage: d.thumbnail.path + '/portrait_uncanny.jpg'
          }
        });
        var directives = {
          heroImage: {
            src: function(){
              return this.heroImage;
            }
          }
        }
        Transparency.render(document.getElementById("characterPage"), renderData, directives);
      }
    }
  }

  var feature = {
    init: function(data, input){
      this.filter(data, input);
    },
    filter: function(data, input) {
      var filterCharacter = data.filter(function(data){
        return data.name == input;
      });
      console.log(filterCharacter);
      var type = "list";
      template.render(filterCharacter, type);
    }
  }

  var api = {
    retrieve (url, type, userInput) {
        var request = new XMLHttpRequest();
        request.open('GET', `${url}` , true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            if (type !== 'filter') {
              var data = JSON.parse(request.responseText);
              var compressedData = data.data.results;
              console.log(type);
              template.render(compressedData, type);
            } else {
              var data = JSON.parse(request.responseText);
              var compressedData = data.data.results;
              console.log('api' + userInput);
              feature.init(compressedData, userInput);
            }

          } else {
            console.log(request.status);
          }
        };
        request.onerror = function() {
          console.log('error');
        };
        request.send();
    },
    characters () {
      this.retrieve('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05&limit=100', 'list')
    },
    character (id) {
      this.retrieve(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05`, 'detail')
    },
    filter (userInput) {
      this.retrieve('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05&limit=100', 'filter', userInput)
    }
  }
  app.init();
})()

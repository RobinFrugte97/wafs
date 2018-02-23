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
      var filterInput = document.getElementById("filterInput");
      var filteredCharacters = []
      filterInput.onkeyup = function(e){
        var value = e.currentTarget.value;
        console.log(value);
        filteredCharacters = [];

        api.test.forEach(function(data){
          var name = data.name.indexOf(value);
          if (name > -1) {
            filteredCharacters.push(data);
            var type = "list";
            template.render(filteredCharacters, type);
          }
        });
      }
      // var submit = document.getElementById("submit");
      // submit.addEventListener("click", function(){
      //     var userInput = document.getElementById("filterInput").value;
      //     window.location.replace("#filter/" + userInput);
      // })

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
          api.character(id);
          var sections = document.querySelectorAll("section");
          sections.forEach(function(section){
            section.classList.toggle('active');
          });

        },
        'filter/:input': function(input){
          console.log(input);
          api.filter(input);
        },
        '*': function() {
          api.characters();
          var sections = document.querySelectorAll("section");
          sections.forEach(function(section){
            section.classList.toggle('active');
          });


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
            heroImage: d.thumbnail.path + '/portrait_uncanny.jpg',
            comics: d.comics.items
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

  var helper = {
    loader: {
      show: function(){
        console.log("show");
        var loader = document.getElementById("wrapper");
        loader.classList.remove("hidden");
        loader.classList.add("flex");
      },
      hide: function(){
        console.log("hide");
        var loader = document.getElementById("wrapper");
        loader.classList.remove("flex");
        loader.classList.add("hidden");
      }
    }
  }

  var api = {
    test: [],
    retrieve: function (url, type, userInput) {
      helper.loader.show();
        var request = new XMLHttpRequest();
        request.open('GET', `${url}` , true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
              var data = JSON.parse(request.responseText);
              var compressedData = data.data.results;
              console.log(type);
              template.render(compressedData, type);
              helper.loader.hide();
              api.test = compressedData;
          } else {
            var errorMessage = document.getElementById("errorMessage");
            errorMessage.classList.remove('hidden');
            errorMessage.classList.add('show');
            setTimeOut(function(){
              errorMessage.classList.remove('show');
              errorMessage.classList.add('hidden')
            }, 3000)
          }
        };
        request.onerror = function() {
          console.log('error');
        };
        request.send();
    },
    characters: function () {
      this.retrieve('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05&limit=100', 'list')
    },
    character: function (id) {
      this.retrieve(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05`, 'detail')
    },
    filter: function () {
      this.filterRetrieve('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05&limit=100')
    },
    filterRetrieve: function (url) {
      helper.loader.show();
        var request = new XMLHttpRequest();
        request.open('GET', `${url}` , true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
              var data = JSON.parse(request.responseText);
              var compressedData = data.data.results;
              helper.loader.hide();
          } else {
            console.log(request.status);
          }
        };
        request.onerror = function() {
          console.log('error');
        };
        request.send();
    }
  }
  app.init();
})()

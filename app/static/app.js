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
      this.handleEvents();
    },
    handleEvents: function(){
      routie({
        "characters/:id": function(id){
          var sections = document.querySelectorAll("section");
          sections.forEach(function(section){
            section.classList.toggle('active');
          });
          api.character(id);
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
    render: function(compressedData, type){
      if (type == 'list') {
        var renderData = compressedData.map(function(d, i){
          return {
            character: d.name,
            id: d.id
          }
        });
        var directives = {
          link: {
            href: function() {
              return `#characters/${this.id}`;
            }
          }
        }
        Transparency.render(document.getElementById("characters"), renderData, directives);
      } else if (type == 'detail') {
        var renderData = compressedData.map(function(d, i){
          return {
            character: d.name,
            thumbnail: d.thumbnail.path + '/landscape_incredible.jpg'
          }
        });
        var directives = {
          thumbnail: {
            src: function(){
              return this.thumbnail;
            }
          }
        }
        Transparency.render(document.getElementById("characterPage"), renderData, directives);
      }
    }
  }

  var collection = {
    allStories: function(data){

    },
    filter: function(data, keyword) {
      data.filter(function(item){
        return item.title.contains(keyword);
      })
    }
  }

  var api = {
    retrieve (url, type) {
        var request = new XMLHttpRequest();
        request.open('GET', `${url}` , true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
           // Success!
            var data = JSON.parse(request.responseText);
            var compressedData = data.data.results;
            console.log(type);
            template.render(compressedData, type);
          } else {
            console.log(request.status);
         // We reached our target server, but it returned an error
          }
        };
        request.onerror = function() {
          console.log('error');
         // There was a connection error of some sort
        };
        request.send();
    },
    characters () {
      this.retrieve('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05&limit=1', 'list')
    },
    character (id) {
      this.retrieve(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05`, 'detail')
    }
  }
  app.init();
})()


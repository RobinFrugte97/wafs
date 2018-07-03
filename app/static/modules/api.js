import routes from 'static/modules/routes.js';
import template from 'static/modules/template.js';
import events from 'static/modules/events.js';
import helper from 'static/modules/helper.js';

var api = {
  data: [],
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
            api.data = compressedData;
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

export default api;

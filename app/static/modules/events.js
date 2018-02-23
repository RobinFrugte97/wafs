import api from 'static/modules/api.js';

var events = {
  filter: function() {
    var filterInput = document.getElementById("filterInput");
    var filteredCharacters = []
    filterInput.onkeyup = function(e){
      var value = e.currentTarget.value;
      console.log(value);

      api.data.forEach(function(data){
        var name = data.name.indexOf(value);
        if (name > -1) {
          filteredCharacters.push(data);
          var type = "list";
          template.render(filteredCharacters, type);
        }
      });
    }
  }
}

export default events;

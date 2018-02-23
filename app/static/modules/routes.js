import api from 'static/modules/api.js';

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

export default routes;

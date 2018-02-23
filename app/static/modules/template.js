import events from 'static/modules/events.js';
import api from 'static/modules/api.js';

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

export default template;

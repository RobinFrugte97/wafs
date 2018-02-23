

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

export default helper;

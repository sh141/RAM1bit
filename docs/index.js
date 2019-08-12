
var app = new Vue({
  el: "#root",
  data: {
    message: "Hello Vue!",
    items: null
  }
});


var obj = document.getElementById("md-content");
obj.onload = function() {
  var loadtext = obj;
  console.log(loadtext);
};


document.getElementById("content").innerHTML = marked(obj.contentDocument);

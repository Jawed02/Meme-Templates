var url = " https://api.imgflip.com/get_memes";

fetch(url)
.then(function(response){
return response.json();
})
.then (function(data){
  var length = data.data.memes.length;
  
  for(var i=0;i<length;i++){
var img = document.createElement("img");
    img.src = data.data.memes[i].url;
    img.id = "image";

var p = document.createElement("p");
    p.innerText =  data.data.memes[i].name;
    p.id = "p";
 
var a = document.createElement("a");
  a.href = data.data.memes[i].url;
  a.innerText = "Click Here To Download";
  a.target = "_blank";
  a.id= "a";

var br = document.createElement("br");
   
    
document.body.appendChild(img);
document.body.appendChild(p);
document.body.appendChild(a);
document.body.appendChild(br);
  }

  
})

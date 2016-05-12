// Your JS goes here
var body  = document.querySelector('body'),
    head  = document.querySelector('head'),
    style = document.createElement('style');


var css = "body {padding:0;margin:0}" +
          "div { width:11.1%; padding-bottom:11.1%;float:left;}" +
          "div:nth-child(even){ background-color:black}";

style.type = 'text/css';

style.appendChild(document.createTextNode(css));
head.appendChild(style);


generateTiles();


function generateTiles(){
  for (var i = 0; i < 81; i++){
    var div = document.createElement('div');
    body.appendChild(div);
  }
}


//Generate a shitload of divs.


//Establish div size based on readme.

//Iterate over until the page is filled? 8x8

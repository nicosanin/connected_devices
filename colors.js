/*
This code is based on the age example by Tom Igoe "Age checker":

Also looked at the HTML reference from W3 shcools https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_get.

Age checker
Context: node.js
Expects two parameters from the HTTP request:
name (a text string)
age (an integer)
Prints a personalized greeting based on the name and age.
*/


var express = require('express');	// include the express library
var server = express();			// create a server using express

/* Part of the Example code From Tom Igoe:

function checkAge(request, response) {
  var name = request.params.name;
  var randomColor = request.params.randomColor;
  var responseString = "";
  if (typeof randomColor === 'undefined') {
    responseString = "<html><body style='background-color:red'>Your randomcolor " + name + "</body></html>\n";
}
*/
  /*
  if (typeof age === 'undefined') {
    responseString = "<p>Please tell me your age.</p>\n"
  } else {
    if (age < 21) {
      responseString = "<p>" + name + ", You're not old enough to drink.</p>\n";
    } else {
      responseString =  "<p> Hi " +  name + ". You're old enough to have a drink, ";
      responseString += "but do so responsibly.</p>\n";
    }
  }
  */
//}

// A function to pick a color in terms of words, or strings...

function checkColor(request,response) {
  var color = request.params.color;
  var responseString = "";
  if (color == "red") {responseString = "<p> hi, " +  "" + " You picked " + "" +  " red\n";}
else if (color == "blue") {respondeString = "<p> hi," + ""+ "I love blue, but please pick red\n";}

  else {responseString = "<p> Noooo!," + "please pick red!";};

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(responseString);
  response.end();

}

// A function to change the background color. When entering change in the browser it will turn red, and if you enter something else it will turn white.

function changeBackground(request,response) {
  var imageBackground = request.params.imageBackground;
  var responseImage = "";
  if (imageBackground == "change") {responseImage = "<html><body style='background-color:red'>";}
  else {responseImage = "<html><body style='background-color:white'>you are as boring as white!!!";}

 response.writeHead(200, {"Content-Type": "text/html"});
 response.write(responseImage);
 response.end();
}

// A function to load an image on the browser when you enter the word image on the browser.

function loadImage1(request, response) {
  var loadImagen = request.params.loadImagen;
  var requestImagen = "";
  //var = "pic_trulli.jpg";
  if (loadImagen == "image") {requestImagen = "<h2>HTML Image</h2> <img src="pic_trulli.jpg" alt="Go to NicolasSanin!" width="500" height="333" border="0">";}

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(requestImagen);
  response.end();

}

server.listen(8080);
// define what to do when the client requests something:
console.log('Server is listening on port 8080');
server.get('/check/color/:color', checkColor);
server.get('/check/imageBackground/:imageBackground', changeBackground);

server.get('/check/loadImagen/loadImagen:', loadImage1);


//server.get('/check/change/:change', changeBackground);

// ***** http://localhost:8080/check/color/blue to enter color value for checkColor function... why it doesnt show the text????

//example code:  server.get('/check/name/:name', checkAge);
//server.get('/rrrr/name/:name/age/:age', checkAge); // rrrr reminder check can be anything...


  // example code:  write back to the client:
  /*
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(responseString);
  response.end();
  */


/* failed atempt :(
function changeBackground(request,response) {
  var imageBackground = request.params.imageBackground;
  var respondString = "";
  if (changeBackground == "change") {responseString = "<h2>HTML Image</h2>
  <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333">"
 }
 response.writeHead(200, {"Content-Type": "text/html"});
 response.write(responseString);
 response.end();
}
*/


/* example line from w schools to upload an html image.
<h2>HTML Image</h2>
<img src="pic_trulli.jpg" alt="Trulli" width="500" height="333">
*/

// ***********  you put your input like this in the browser: (for the age input example) http://localhost:8080/check/name/daniel/age/12   daniel, You're not old //enough to drink. **********

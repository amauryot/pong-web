// App
var app = document.querySelector('canvas');
var app_x = 0;
var app_y = 0;
var app_width = 600;
var app_height = 400;
var brush = app.getContext('2d');

/* Main */

drawBoard();

/* Functions */

function drawBoard() {
  brush.fillStyle = 'black';
  brush.fillRect(app_x, app_y, app_width, app_height);
}
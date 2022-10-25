// App
var app = document.querySelector('canvas');
var app_x = 0;
var app_y = 0;
var app_width = 600;
var app_height = 400;
var brush = app.getContext('2d');

// Board
var board = {
  x: app_x,
  y: app_y,
  width: app_width,
  height: app_height,
  color: 'black',
};

// Ball
var ball = {
  x: (1 / 2) * board.width,
  y: (1 / 2) * board.height,
  radius: 10,
  color: 'white',
}

// Paddle
var paddle = {
  width: 10,
  height: 100,
  color: 'white',
}

// Paddle 1
var paddle1 = {
  x: ball.radius,
  y: (1 / 2) * (board.height - paddle.height),
}

// Paddle 2
var paddle2 = {
  x: board.width - paddle.width - ball.radius,
  y: paddle1.y,
}

/* Main */

runApp();

/* Functions */

function drawBoard() {
  brush.fillStyle = board.color;
  brush.fillRect(board.x, board.y, board.width, board.height);
}

function drawBall() {
  brush.fillStyle = ball.color;
  brush.beginPath();
  brush.arc(ball.x, ball.y, ball.radius, 0, (2 * Math.PI));
  brush.fill();
}

function drawPaddles() {
  brush.fillStyle = paddle.color;
  brush.fillRect(paddle1.x, paddle1.y, paddle.width, paddle.height);
  brush.fillRect(paddle2.x, paddle2.y, paddle.width, paddle.height);
}

function runApp() {
  drawBoard();
  drawBall();
  drawPaddles();
}
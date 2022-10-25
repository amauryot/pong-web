// App variables
var app = document.querySelector('canvas');
var app_x = 0;
var app_y = 0;
var app_width = 600;
var app_height = 400;
var brush = app.getContext('2d');
var time = 1 / 30; // mili seconds

// Board variables
var board = {
  x: app_x,
  y: app_y,
  width: app_width,
  height: app_height,
  color: 'black',
  line_x: (app.width - 5) / 2,
  line_y: 0,
  line_width: 5,
  line_height: app.height / 19, 
};

// Ball variables
var ball = {
  x: board.width / 2,
  y: board.height / 2,
  radius: 10,
  color: 'white',
  xVelocity: 1,
  yVelocity: 1,
}

// Paddle variables
var paddle = {
  width: 15,
  height: 100,
  color: 'white',
}

// Paddle 1 variables
var paddle1 = {
  x: ball.radius,
  y: (board.height - paddle.height) / 2,
}

// Paddle 2 variables
var paddle2 = {
  x: board.width - paddle.width - ball.radius,
  y: paddle1.y,
}

// Key code
var arrow = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
}

/* Main */

setInterval(runApp, time);

document.onkeydown = movePaddle2;

/* Functions */

function drawBoard() {
  brush.fillStyle = board.color;
  brush.fillRect(board.x, board.y, board.width, board.height);
  
  brush.fillStyle = 'white';
  for (i = 0; i < 10; i++) {
    brush.fillRect(board.line_x, (i * 2 * board.line_height), board.line_width, board.line_height);
  }
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

function drawObjects() {
  drawBoard();
  drawBall();
  drawPaddles();
}

function moveBall() {
  ball.x += ball.xVelocity;
  ball.y += ball.yVelocity;
}

function movePaddle1() {
  paddle1.y = ball.y - (paddle.height / 2);

  if (paddle1TopEdge() < boardTopEdge()) {
    paddle1.y = boardTopEdge();
  } 
  
  if (paddle1BottomEdge() > boardBottomEdge()) {
    paddle1.y = boardBottomEdge() - paddle.height;
  }
}

function movePaddle2(event) {
  var speed = 2 * ball.radius;
  
  if (event.keyCode == arrow.up) {
    paddle2.y -= speed;
  }

  if (event.keyCode == arrow.down) {
    paddle2.y += speed;
  }

  if (paddle2TopEdge() < boardTopEdge()) {
    paddle2.y = boardTopEdge();
  } 
  
  if (paddle2BottomEdge() > boardBottomEdge()) {
    paddle2.y = boardBottomEdge() - paddle.height;
  }
}

function ballHitHorizontal() {
  return ballHitBoardLeft() || ballHitBoardRight()
    || ballHitPaddle1Right() || ballHitPaddle2Left();
}

function ballHitVertical() {
  return ballHitBoardTop() || ballHitBoardBottom()
    || ballHitPaddle1Top() || ballHitPaddle1Bottom()
    || ballHitPaddle2Top() || ballHitPaddle2Bottom();
}

function checkBallCollisions() {
  if (ballHitHorizontal()) {
    ball.xVelocity *= -1;
  }

  if (ballHitVertical()) {
    ball.yVelocity *= -1;
  }
}

function runApp() {
  drawObjects();
  moveBall();
  movePaddle1();
  checkBallCollisions();
}
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
};

// Ball variables
var ball = {
  x: (1 / 2) * board.width,
  y: (1 / 2) * board.height,
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
  y: (1 / 2) * (board.height - paddle.height),
}

// Paddle 2 variables
var paddle2 = {
  x: board.width - paddle.width - ball.radius,
  y: paddle1.y,
}

/* Main */

setInterval(runApp, time);

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
  var limit = 10;
  var top = boardTopEdge() + limit;
  var bottom = boardBottomEdge() - limit;
  
  paddle1.y = ball.y - (1 / 2) *  paddle.height;

  if (paddle1TopEdge() < top) {
    paddle1.y = top;
  } 
  
  if (paddle1BottomEdge() > bottom) {
    paddle1.y = bottom - paddle.height;
  }
}

function movePaddle2() {
  // TODO
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
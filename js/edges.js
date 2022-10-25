/* Board edges */

function boardLeftEdge() {
  return board.x;
}

function boardRightEdge() {
  return board.width;
}

function boardTopEdge() {
  return board.y;
}

function boardBottomEdge() {
  return board.height;
}

/* Ball edges */

function ballLeftEdge() {
  return ball.x - ball.radius;
}

function ballRightEdge() {
  return ball.x + ball.radius;
}

function ballTopEdge() {
  return ball.y - ball.radius;
}

function ballBottomEdge() {
  return ball.y + ball.radius;
}

/* Paddle 1 edges */

function paddle1LeftEdge() {
  return paddle1.x;
}

function paddle1RightEdge() {
  return paddle1.x + paddle.width;
}

function paddle1TopEdge() {
  return paddle1.y;
}

function paddle1BottomEdge() {
  return paddle1.y + paddle.height;
}

/* Paddle 2 edges */

function paddle2LeftEdge() {
  return paddle2.x;
}

function paddle2RightEdge() {
  return paddle2.x + paddle.width;
}

function paddle2TopEdge() {
  return paddle2.y;
}

function paddle2BottomEdge() {
  return paddle2.y + paddle.height;
}
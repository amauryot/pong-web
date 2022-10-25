/* Board */

function boardEdgeLeft() {
  return board.x;
}

function boardEdgeRight() {
  return board.width;
}

function boardEdgeTop() {
  return board.y;
}

function boardEdgeBottom() {
  return board.height;
}

/* Ball */

function ballEdgeLeft() {
  return ball.x - ball.radius;
}

function ballEdgeRight() {
  return ball.x + ball.radius;
}

function ballEdgeTop() {
  return ball.y - ball.radius;
}

function ballEdgeBottom() {
  return ball.y + ball.radius;
}

/* Paddle 1 */

function paddle1EdgeLeft() {
  return paddle1.x;
}

function paddle1EdgeRight() {
  return paddle1.x + paddle.width;
}

function paddle1EdgeTop() {
  return paddle1.y;
}

function paddle1EdgeBottom() {
  return paddle1.y + paddle.height;
}

/* Paddle 2 */

function paddle2EdgeLeft() {
  return paddle2.x;
}

function paddle2EdgeRight() {
  return paddle2.x + paddle.width;
}

function paddle2EdgeTop() {
  return paddle2.y;
}

function paddle2EdgeBottom() {
  return paddle2.y + paddle.height;
}
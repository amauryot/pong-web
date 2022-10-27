// Paddle variables.
var paddle_width = 15;
var paddle_height = 100;
var paddle_color = 'white';

// Paddle 1 variables.
var paddle_1_x = ball_radius;
var paddle_1_y = (board_height - paddle_height) / 2;

// Paddle 2 variables.
var paddle_2_x = board_width - paddle_width - ball_radius;
var paddle_2_y = paddle_1_y;

// Return the paddle 1 left edge.
function paddle_1_left() {
  return paddle_1_x;
}

// Return the paddle 1 right edge.
function paddle_1_right() {
  return paddle_1_x + paddle_width;
}

// Return the paddle 1 top edge.
function paddle_1_top() {
  return paddle_1_y;
}

// Return the paddle 1 bottom edge.
function paddle_1_bottom() {
  return paddle_1_y + paddle_height;
}

// Return the paddle 2 left edge.
function paddle_2_left() {
  return paddle_2_x;
}

// Return the paddle 2 right edge.
function paddle_2_right() {
  return paddle_2_x + paddle_width;
}

// Return the paddle 2 top edge.
function paddle_2_top() {
  return paddle_2_y;
}

// Return the paddle 2 bottom edge.
function paddle_2_bottom() {
  return paddle_2_y + paddle_height;
}

// Move the paddle 1 automatically.
function paddle_1_move() {
  paddle_1_y = ball_y - (paddle_height / 2);

  if (paddle_1_top() < board_top()) {
    paddle_1_y = board_top();
  } else if (paddle_1_bottom() > board_bottom()) {
    paddle_1_y = board_bottom() - paddle_height;
  }
}

// Move the paddle 2 using the arrow keys.
function paddle_2_move(event) {
  var speed = 2 * ball_radius;

  if (event.keyCode == arrow_up) {
    paddle_2_y -= speed;
  } else if (event.keyCode == arrow_down) {
    paddle_2_y += speed;
  }

  if (paddle_2_top() < board_top()) {
    paddle_2_y = board_top();
  } else if (paddle_2_bottom() > board_bottom()) {
    paddle_2_y = board_bottom() - paddle_height;
  }
}
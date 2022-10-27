// Ball variables.
var ball_x = board_width / 2;
var ball_y = board_height / 2;
var ball_radius = 10;
var ball_color = 'white';
var ball_velocity_x = 1;
var ball_velocity_y = 1;

// Return the ball left edge.
function ball_left() {
  return ball_x - ball_radius;
}

// Return the ball right edge.
function ball_right() {
  return ball_x + ball_radius;
}

// Return the ball top edge.
function ball_top() {
  return ball_y - ball_radius;
}

// Return the ball bottom edge.
function ball_bottom() {
  return ball_y + ball_radius;
}

// Move the ball.
function ball_move() {
  ball_x += ball_velocity_x;
  ball_y += ball_velocity_y;
}
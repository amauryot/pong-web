// 
var time = 1 / 30; // miliseconds

// Key codes
var arrow_left = 37;
var arrow_up = 38;
var arrow_right = 39;
var arrow_down = 40;

// Run the app every 'time' miliseconds.
setInterval(run_app, time);

// Move the paddle 2 whenever the arrow key is pressed.
document.onkeydown = paddle_2_move;

// Draw the board.
function draw_board() {
  brush.fillStyle = board_color;
  brush.fillRect(board_x, board_y, board_width, board_height);

  brush.fillStyle = 'white';

  for (i = 0; i < 10; i++) {
    brush.fillRect(board_line_x, (i * 2 * board_line_height), board_line_width, board_line_height);
  }
}

// Draw the ball.
function draw_ball() {
  brush.fillStyle = ball_color;
  brush.beginPath();
  brush.arc(ball_x, ball_y, ball_radius, 0, (2 * Math.PI));
  brush.fill();
}

// Draw the paddles.
function draw_paddles() {
  brush.fillStyle = paddle_color;
  brush.fillRect(paddle_1_x, paddle_1_y, paddle_width, paddle_height);
  brush.fillRect(paddle_2_x, paddle_2_y, paddle_width, paddle_height);
}

// Draw all the objects.
function draw_objects() {
  draw_board();
  draw_ball();
  draw_paddles();
}

// Check if the ball hit some object.
function ball_collisions() {
  if (ball_hit_horizontal()) {
    ball_velocity_x *= -1;
  } else if (ball_hit_vertical()) {
    ball_velocity_y *= -1;
  }
}

// Start the app.
function run_app() {
  draw_objects();
  ball_move();
  paddle_1_move();
  ball_collisions();
}
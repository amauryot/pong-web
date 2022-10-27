// Check if the ball hit the board left .
function ball_hit_board_left() {
  return (ball_left() < board_left());
}

// Check if the ball hit the board right .
function ball_hit_board_right() {
  return (ball_right() > board_right());
}

// Check if the ball hit the board top .
function ball_hit_board_top() {
  return (ball_top() < board_top());
}

// Check if the ball hit the board bottom .
function ball_hit_board_bottom() {
  return (ball_bottom() > board_bottom());
}

// Check if the ball hit the paddle 1 right .
function ball_hit_paddle_1_right() {
  return (ball_left() < paddle_1_right()) && (ball_top() < paddle_1_bottom()) && (ball_bottom() > paddle_1_top());
}

// Check if the ball hit the paddle 1 top .
function ball_hit_paddle_1_top() {
  return (ball_bottom() > paddle_1_top()) && (ball_top() < paddle_1_top())
    && (ball_right() > paddle_1_left()) && (ball_left() < paddle_1_right());
}

// Check if the ball hit the paddle 1 bottom .
function ball_hit_paddle_1_bottom() {
  return (ball_top() < paddle_1_bottom()) && (ball_bottom() > paddle_1_bottom())
    && (ball_right() > paddle_1_left()) && (ball_left() < paddle_1_right());
}

// Check if the ball hit the paddle 2 left edge.
function ball_hit_paddle_2_left() {
  return (ball_right() > paddle_2_left()) && (ball_top() < paddle_2_bottom()) && (ball_bottom() > paddle_2_top());
}

// Check if the ball hit the paddle 2 top edge.
function ball_hit_paddle_2_top() {
  return (ball_bottom() > paddle_2_top()) && (ball_top() < paddle_2_top())
    && (ball_right() > paddle_2_left()) && (ball_left() < paddle_2_right());
}

// Check if the ball hit the paddle 2 bottom edge.
function ball_hit_paddle_2_bottom() {
  return (ball_top() < paddle_2_bottom()) && (ball_bottom() > paddle_2_bottom())
    && (ball_right() > paddle_2_left()) && (ball_left() < paddle_2_right());
}

// Check if the ball hit the objects in the horizontal axis.
function ball_hit_horizontal() {
  return ball_hit_board_left() || ball_hit_board_right() || ball_hit_paddle_1_right() || ball_hit_paddle_2_left();
}

// Check if the ball hit the objects in the vertical axis.
function ball_hit_vertical() {
  return ball_hit_board_top() || ball_hit_board_bottom() || ball_hit_paddle_1_top()
    || ball_hit_paddle_1_bottom() || ball_hit_paddle_2_top() || ball_hit_paddle_2_bottom();
}
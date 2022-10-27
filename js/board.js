// Board variables.
var board_x = canvas_x;
var board_y = canvas_y;
var board_width = canvas.width;
var board_height = canvas.height;
var board_color = 'black';
var board_line_width = 5;
var board_line_height = canvas.height / 19;
var board_line_x = (canvas.width - board_line_width) / 2;
var board_line_y = canvas_y;

// Return the board left edge.
function board_left() {
  return board_x;
}

// Return the board right edge.
function board_right() {
  return board_width;
}

// Return the board top edge.
function board_top() {
  return board_y;
}

// Return the board bottom edge.
function board_bottom() {
  return board_height;
}
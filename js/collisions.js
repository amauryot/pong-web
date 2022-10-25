/* Ball hit board */

function ballHitBoardLeft() {
  return (ballLeftEdge() < boardLeftEdge());
}

function ballHitBoardRight() {
  return (ballRightEdge() > boardRightEdge());
}

function ballHitBoardTop() {
  return (ballTopEdge() < boardTopEdge());
}

function ballHitBoardBottom() {
  return (ballBottomEdge() > boardBottomEdge());
}

/* Ball hit paddle 1 */

function ballHitPaddle1Right() {
  return (ballLeftEdge() < paddle1RightEdge())
    && (ballTopEdge() < paddle1BottomEdge())
    && (ballBottomEdge() > paddle1TopEdge());
}

function ballHitPaddle1Top() {
  return (ballBottomEdge() > paddle1TopEdge())
    && (ballTopEdge() < paddle1TopEdge())
    && (ballRightEdge() > paddle1LeftEdge())
    && (ballLeftEdge() < paddle1RightEdge());
}

function ballHitPaddle1Bottom() {
  return (ballTopEdge() < paddle1BottomEdge())
    && (ballBottomEdge() > paddle1BottomEdge())
    && (ballRightEdge() > paddle1LeftEdge())
    && (ballLeftEdge() < paddle1RightEdge());
}

/* Ball hit paddle 2 */

function ballHitPaddle2Left() {
  return (ballRightEdge() > paddle2LeftEdge())
    && (ballTopEdge() < paddle2BottomEdge())
    && (ballBottomEdge() > paddle2TopEdge());
}

function ballHitPaddle2Top() {
  return (ballBottomEdge() > paddle2TopEdge())
    && (ballTopEdge() < paddle2TopEdge())
    && (ballRightEdge() > paddle2LeftEdge())
    && (ballLeftEdge() < paddle2RightEdge());
}

function ballHitPaddle2Bottom() {
  return (ballTopEdge() < paddle2BottomEdge())
    && (ballBottomEdge() > paddle2BottomEdge())
    && (ballRightEdge() > paddle2LeftEdge())
    && (ballLeftEdge() < paddle2RightEdge());
}
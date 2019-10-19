var playerL = 100;
var playerR = 100;

var ball = {
  x: 300,
  y: 200,
  xspeed: 1.5,
  yspeed: 1.5,
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  // Render the screen
  line(width / 2, 0, width / 2, height); // center line  
  rect(0, playerL, 15, 100); // left player
  rect(width - 15, playerR, 15, 100); // right player
  ellipse(ball.x, ball.y, 20); // puck

  // Handle user input
  
  if (keyIsDown(UP_ARROW)) {
    playerR -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    playerR += 10;
  }

  // Check if 'A' or 'W' is pressed
  if (keyIsDown(65) || keyIsDown(87)) {
    playerL -= 10;
  }

  // Check if 'Z' or 'S' is pressed
  if (keyIsDown(90) || keyIsDown(83)) {
    playerL += 10;
  }

  // Game logic
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
  
  if (ball.y < 0) {
    ball.y = 0;
    ball.yspeed *= -1;
  }
  
  if (ball.y > height) {
    ball.y = height;
    ball.yspeed *= -1;
  }
  
  if (ball.x > width) {
    textSize(20);
    text('Player Left Wins!!!!', 200, 200);
    noLoop();
  }
  
  
  
  // See if ball is hitting right player
  if (ball.x > width - 15 && ball.y >= playerR && ball.y <= playerR + 100) {
    ball.xspeed *= -1;
  }
  
  if (ball.x < 0) {
    textSize(20);
    text('Player Right Wins!!!!', 200, 200);
    noLoop();
  }
  
  if (ball.x < 15 && ball.y >= playerL && ball.y <= playerL + 100) {
    ball.xspeed *= -1;
  }
}



var x = 50;
var x2 = 60;
var y2 = 60;
var y = 50;
var diameter = 50;
var speed = 3;
var speedY = 5;
var speed2 = 10;
var speedY2 = 15;
var squareX = 100;
var squareY = 100;

function setup()
{
  createCanvas(600, 600);
}

function draw()
{
  background(40);
  noStroke();
  fill(100, 250, 15);
  circle(x, y, diameter);
  fill(200,100,30);
    circle(x2, y2, diameter);
    rect(560,300,10,90);
fill (200,111,33);
text('Exit' , 555, 290);


  if(x >= width-diameter/2 || x <= diameter/2)
  {
    speed *= -1;
  
  }
  else if(y >= height-diameter/2 || y <= diameter/2)
  {
    speedY *=-1;

  }


    if(x2 >= width-diameter/2 || x2 <= diameter/2)
    {
      speed2 *= -1;

    }
    else if(y2 >= height-diameter/2 || y2 <= diameter/2)
    {
      speedY2 *=-1;

    }

  x+= speed;
  y+= speedY;
  x2+= speed2;
  y2+= speedY2;
  fill(204, 103, 15);
  square(squareX, squareY, 30);
  if(keyIsDown(LEFT_ARROW))
  {
    squareX-=10;
  }
  else if(keyIsDown(RIGHT_ARROW))
  {
    squareX+=10;
  }
  else if(keyIsDown(UP_ARROW))
  {
    squareY-=10;
  }
  else if(keyIsDown(DOWN_ARROW))
  {
    squareY+=10;
  }

}

function keyPressed()
    {
      if (key == 'd')
      {
        x += 10;
      }
      else if (key == 'a')
      {
        x -= 10;
      }
    }

    function mouseClicked()
    {
      mousex = mouseX;
      mousey = mouseY;

    }

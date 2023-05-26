function preload()
{
    img = loadImage("MtUmunhum3.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill(255, 255, 255);
    text("Mountain", 45, 75);
    noFill();
    stroke(255, 255, 255);
    rect(30, 60, 450, 350);
}
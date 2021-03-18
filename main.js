canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=120;
rover_height=70;
background_image="mars.jpg";
rover_image="https://i.postimg.cc/YqdnnNX1/car1.png";

rover_x=10;
rover_y=10;

car_width=120;
car_height=70;
background_image="mars.jpg";
car_image="https://i.postimg.cc/YqdnnNX1/car1.png";

car_x=10;
car_y=90;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = car_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadcar(){
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}


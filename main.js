screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";



function preload(){
    loadImage();
    apple = "apple.png";


}
recognition.onresult = function (event){
var content = event.results[0][0].transcript;
to_number = Number(content);
if(Number.isInteger(to_number)){
draw_apple ="set";
}
else {
    document.getElementById("status").innerHTML = "The speech has not recognized a number ";
}
}
function setup(){
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    createCanvas(screen_width, screen_height-150);
    canvas.position(75,75);

}
function draw(){
    if(draw_apple == "set"){
        for(var i = 1; i <=to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 300);
      image(apple, x, y, 50, 50);
      document.getElementById("status").innerHTML = "The speech has not recognized a number ";
        }
    }
}

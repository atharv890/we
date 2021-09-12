var last_position_of_x;
var last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="black";
width="2";
var width=screen.width;
var newwidth=screen.width-70;
var newheight=screen.height-300;
if(width<992) {
document.getElementById("myCanvas").width=newwidth;
document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_mousedown);
    
    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
    }
    canvas.addEventListener("touchmove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
    function submit(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }
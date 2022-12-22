canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
color ="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function  my_mousedown(e){
    color=document.getElementById("Color").value;
    console.log(Color);
    mouse_x=e.clientX - canvas.OffsetLeft;
    mouse_y=e.clientY - canvas.OffsetTop;
    console.log("X =" + mouse_x +", Y =" + mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
     ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}
function Cleararea(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
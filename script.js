const canvas=document.querySelector('#canvasElement');
const context=canvas.getContext("2d");
let x=300;
let y=300;
let side=100;
context.fillStyle="blue";
context.fillRect(x,y,side,side);
let pathCovered=[];
position=x+","+y
pathCovered.push(position);

canvas.addEventListener( "click",()=>{
    console.log(context.fillStyle)
    if(context.fillStyle ==="#0000ff"){
        console.log(context.fillStyle)
        context.fillStyle="red";
        context.fillRect(x,y,side,side);
    }else{
        context.fillStyle="blue";
        context.fillRect(x,y,side,side);
    }
})

document.addEventListener('keydown',(event) =>{
    if(event.key == "ArrowRight" && x<800){
        createPath();
        x+=side;
        createNewBlock();
    }else if(event.key=== "ArrowLeft" && x>0){
        createPath();
        x-=side;
        createNewBlock();
    }else if(event.key ==="ArrowUp" && y>0){
        createPath();
        y-=side;
        createNewBlock();
    }else if(event.key === "ArrowDown" && y<600){
        createPath();
        y+=side;
        createNewBlock();
    }
    
    checkCoverage();
})

function createNewBlock(){
    context.fillStyle="blue";
    context.fillRect(x,y,side,side);
 }

 function createPath(){
    context.fillStyle="green";
    context.fillRect(x,y,side,side);
 }

 function checkCoverage(){
    position=x+","+y;
    if(!pathCovered.includes(position)){
        pathCovered.push(position);
    }
    totalPossiblePositions=(canvas.width * canvas.height)/(side*side);
    if(pathCovered.length == totalPossiblePositions){
        console.log("Covered all the canvas!!!");
    }
 }

    

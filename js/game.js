const canvas = document.getElementById("snakeBoard");
const ctx = canvas.getContext('2d');
let snake = [{x:200,y:0}, {x:180,y:0}, {x:160,y:0}, {x:140,y:0}, {x:120,y:0}];
let dx = 0;
let dy = 0;
function makeSnake(){
    for(let i =0; i < snake.length; i++){
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y,20, 20);
    }
}

function moveSnake(){
    const head = {x:snake[0].x,y:snake[0].y};
    snake.pop();
}
makeSnake();
moveSnake();

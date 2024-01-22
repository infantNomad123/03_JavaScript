const btn= document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const container = document.querySelector(".container");
let sum = 0;
btn.addEventListener("click", function(){
    const input = document.createElement("input");
    const button = document.createElement("button");

    input.classList.add("input1");
    input.type = "number";
    //input.setAttribute("type","number");

    button.classList.add("btn");
    button.innerHTML = "&times;";

    container.append(input);
    container.append(button);

    button.addEventListener("click", function(){
        
        input.remove();
        button.remove();
        sum = 0;
     
    });
});


btn2.addEventListener("click", function(){
    const nodes = document.querySelectorAll(".input1");
    for(let i = 0; i< nodes.length; i++){
        sum += Number(nodes[i].value);
    }
    alert(`합은 ${sum} 입니다`);
    sum = 0;
});

//1. 로딩, 이벤트, 방생등 시점에 따라서 선택되는 요소가 달라진다
//2. X버튼 처럼 새롭개 만들어지는 요소(동적 추가 요소) 이밴트를 추가하는 방법
        /* - 만들어지는 시점에 이벤트 추가 코드 작성 */
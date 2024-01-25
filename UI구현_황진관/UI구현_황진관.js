const records = document.querySelector(".records");
const create = document.querySelector("#add");
const reset = document.querySelector("#reset");
const number = document.querySelectorAll(".number");
const  numDisplay = document.querySelector(".numDisplay");

numDisplay.textContent = "";


//번호 디스플래창에서 값을 호출하여 기록부에 추가하는 버튼 구현
create.addEventListener("click", () => {
    if(numDisplay.textContent == "") return;

    const lists = document.createElement("div");

    lists.classList.add("lists");
    lists.textContent += numDisplay.textContent;
    records.append(lists);

    const btn = document.createElement("button");
    btn.classList.add("btn1")
    btn.textContent = "☆";

    const btn2 = document.createElement("button");
    btn2.classList.add("btn2")
    btn2.innerHTML = "&times";

    records.append(lists);
    lists.append(btn);
    lists.append(btn2);


    btn.addEventListener("click", e => {
        // document.querySelectorAll(".lists").toggle("active");
      
        e.target.classList.toggle("active");
        

        if( e.target.classList.contains("active")){
            e.target.textContent= "★";
        }
        else{
            btn.classList.add("btn1");
            btn.textContent = "☆";
        }

        e.target.parentElement.classList.toggle("active1");

    });

    btn2.addEventListener("click", () => {
        lists.remove();
    });
});


//--------------------------------------------------------------

/* 
    번호 다이얼 버튼을 누르면 번호 디스플래이 창에 
    값을 출력 하는 기능
*/
for(let i =0; i<number.length; i++){
    number[i].addEventListener("click", () => {
        
        if(numDisplay.textContent.length == 10) return;
        numDisplay.textContent += number[i].textContent;
    
    });
}


//--------------------------------------------------------------
//번호 디스플레이 창에 입력된 값을 초기화 하는 버튼
reset.addEventListener("click", () => {
    
    numDisplay.textContent = ""
});




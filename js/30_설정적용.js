const container = document.querySelector(".container");

const lengths = document.querySelector("#lengths");
const heights = document.querySelector("#heights");

const textSize = document.querySelector("#textSize");
const textColor = document.querySelector("#textColor");
const bcolor = document.querySelector("#bcolor");




const input1 = document.querySelector("#input1");



const btn = document.querySelector("#btn");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
    /* 특정 시점에 요소/값을 얻어와야 되는데
        전역, 지역 변수 어떤걸로 선언할지 모르겠으면
        일단 다 지역 변수로 선언해라!! 
    */

    //너비에 작성된 값 #box의 너비로 대입
    box.style.width = lengths.value + "px";

    //높이에 작성된 값 #box의 너비로 대입
    box.style.height = heights.value + "px";

    //글자크기에 작성된 값 #box의 글자크기로 대입
    box.style.fontSize = textSize.value + "px";

    //글자색에 작성된 값 #box의 글자색으로 대입
    box.style.color = textColor.value;

    //배경색에 작성된 값 #box의 배경색으로 대입
    box.style.backgroundColor = bcolor.value;


    box.textContent = input1.value;

    // if(row != null){
    //     // 가로정렬에 작성된 값 #box의 가로정렬로 대입
    //     box.style.justifyContent = row.value;
    //   }
    box.style.justifyContent = document.querySelector('input[name="position1"]:checked').value;
    
    // 세로정렬 radio 버튼이 체크되어 있을 경우
//   if(col != null){
//     // 세로정렬에 작성된 값 #box의 세로정렬로 대입
//     box.style.alignItems = col.value;
//   }
    box.style.alignItems = document.querySelector('input[name="position2"]:checked').value;
    
    //체크된 요소만 얻어오기(체크된게 없으면 null)
    //굵기 radio 버튼이 체크되어 있을 경우
    // if(fontWeight != null){
            //box.style.fontWeight = fw.value;
    // }
    box.style.fontWeight = document.querySelector('input[name="weight"]:checked').value;
});


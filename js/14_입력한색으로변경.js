    // 요소를 한 번에 여러개 얻어오면 배열 형태로 저장된다!
    // -> 얻어온 요소를 사용하려면 배열의 index별 요소를 하나씩 꺼내서
    //    사용해야 한다!!

    // ex) boxList.style.color = "red";  // 배열의 글자색을 red 변경 (X)
    // boxList[0].style.color = "blue"; // 0번 인덱스 요소 글자색 blue (O)

    const input = document.querySelectorAll(".input");
   

    const box = document.querySelectorAll(".box");

    const btn = document.querySelector("#btn");
    

    btn.addEventListener ("click", function(){
        for(let val = 0; val < input.length; val++){
            box[val].style.backgroundColor = input[val].value;
        }});
   


        
    


function check1(){
    // for([1]초기식 ; [2]조건식 ; [4]증감식){
    //     [3]조건식 true인 경우 반복 수행할 코드;
    // }

    let result = ""; //빈 문자열
    for(let num=1 ; num <= 5  ;num++){

        result += num; // 복합 대입 연산자
    }
    console.log("result : ",result);
}
function check2(){
    //1 부터 10 까지 출력하기

    for(let num=1 ; num <= 10  ;num++){
        console.log("num : ",num);
    }
}
function check3(){
    //1 부터 20 까지 출력하기

    for(let num=1 ; num <= 20  ;num++){
        console.log("num : ",num);
    }
}
function check4(){
    //5 부터 15 까지 출력하기

    for(let num=5 ; num <= 15  ;num++){
        console.log("num : ",num);
    }
}
function check5(){
    //1 부터 30 까지 출력하기

    for(let num=1 ; num <= 30  ; num += 2){
        console.log("num : ",num);
    }
}
function check6(){
    //1 부터 30 까지 출력하기
    let sum = 0; //합계를 저장하기 위한 변수 
                 // 0을 대입한  이유 : 0은 더해도 아무런 영향이 없기 때문에
    for(let num=1 ; num <= 10  ; num ++){
        sum += num;
    }
    console.log("num : ",sum );
    
}

/* 입력 받은 범위 모든 정수의 합 구하기  */

/* input 에 작성된 값을 얻어와 저장 */
function sumFn(){
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

   

    // 결과를 출력하기 위한 요소(span#result1) 인 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;
    for(let num =start ; num <= end; num++){
        sum += num;
    }
    result1.innerText = sum;
}

// 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기
function executeFn2(){
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);

    //증가값 
    const val =  Number(document.getElementById("inputNumber2-3").value);

    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2");
    ul.innerHTML = "";// 이전 ul에 작성된 내용을 모두 삭제
    /* start 부터 end 까지 val씩 증가 */
    for(let num = start ; num <= end; num+=val){
        // ul 요소 내부에 li 요소를 누적
        ul.innerHTML += `<li>${num}</li>`;
    }
}

// 요소.innerText = "문자열";
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 그대로 보여줌)

//요소.innerHTML = "<h2>문자열</h2>"
// -> 요소의 내용으로 문자열을 대입 
//  (HTML 태그를 해석해서 화면에 출력    )

/* 구구단 2단 출력하기 */

function check7(){
    for(let num = 1 ; num <= 10; num++){
        console.log(`2 x ${num} = ${2 * num}`);
    }
}

function executeFn3(){
    const numInput = Number(document.getElementById("input3").value);
    const ul = document.getElementById("result3");
    ul.innerHTML = "";

    if(numInput < 2 || numInput > 9){
        alert("2~9 사이만 입력해주세요");
        return; // 함수를 종료하고 호출한 곳으로 돌아감
                // (지금은 함수 종료 정도로만 인식)
    }

    for(let num = 1 ; num <= 10; num++){
        ul.innerHTML +=`<li>${numInput} x ${num} = ${numInput * num}</li>`;
    }
    
}

function executeFn4(){
    //배수
    const input = Number(document.getElementById("input4").value);
    
    //모양
    const output = document.getElementById("output4").value;

    //출력할 div
    const result = document.getElementById("result4");

    //출력할 문자열을 저장할 변수
    let str = "";

    for(let x = 1 ; x <= 50; x++){
        if(x % input == 0){ //x가 input의 배수인 경우
            // str에 x 대신 output 을 대입
            str += output + " ";
        }else{
            str += x + " "; 
        }

        // 10의 배수 마다 str에 <br> 태그 추가
        if(x % 10 == 0){
            str += "<br>";
        }
    }

    result.innerHTML = str;
}

/* 다음 모양 출력하기 
    12345
    12345
    12345
    12345
*/

function check8(){
    //4바퀴 반복하는 for 문
    for(let y = 1; y <= 4; y++){
        //"12345" 출력하는 구문
        let str = "";
        for(let x = 1 ; x <= 5; x++){
            str += x;
        }
        console.log(str); //12345
        console.log(" ");
    }
}
function check9(){
    for(let y = 1; y <= 5; y++){
        let str = "";
        for(let x = 1 ; x <= y; x++){
            str += x;   
        }
        console.log(str); //12345
  
    }    
}

/* 감소하는 for문 */
function check10(){
    // 5 4 3 2 1  로 감소하면서 출력

    for(let num = 5;  num >= -5; num-=2){
        console.log(num);
    }
}
/* function check11(){
    for(let y = 5; y >= 1; y--){
        let str = "";
        for(let x = 1 ; x <= y; x++){
            str += x;   
        }
        console.log(str);
  
    }    
} */
function check11(){
    for(let row = 5; row >= 1; row--){
        let str = " ";
        for(let col = 1; col <= row; col++){
            str += col;
        }
        console.log(str);
    }
}
function check12(){
    for(let y = 1; y <= 3; y++){
        let str1 = "";
        for(let x = 1 ; x <= y; x++){
            str1 += x;   
        }
        console.log(str1); //12345
    }   

    for(let row = 4; row >= 1; row--){
        let str2 = "";
        for(let col = 1; col <= row; col++){
            str2+= col;
        }
        console.log(str2);
    }

}

//if, for문 내에 코드가 한줄만 있다면 {} 생략 가능
function check12(){
    for(let y = 1; y <= 3; y++){
        let str1 = "";
        for(let x = 1 ; x <= y; x++){
            str1 += x;   
        }
        console.log(str1); //12345
    }   

    // 아랫쪽 삼각형
    for(let row = 4; row >= 1; row--){
        let str2 = "";
        for(let col = 1; col <= row; col++){
            str2+= col;
        }
        console.log(str2);
    }

    console.log("---------------");

    //2중 for 문 한번만 사용하기

    for(let row = 1; row <= 7; row++){
        let end = 0;
        if(row <= 4) end = row;
        else         end = 7 - row + 1;
        let str = "";
        for(let col =1 ; col<=end; col++){
            str+=col;
        }
        console.log(str);
    }

}

/* 카운트를 이용해 출력하기
    1 2 3 4
    5 6 7 8
    9 10 11 12 
*/

function check13(){
    let count = 1; // 카운트 (세기) 위한 변수 선언

    for(let row = 1; row <= 3; row++){

        let str = "";
        for(let col = 1; col <= 4; col++){
            str += count + " ";
            count++;
        }
        console.log(str);
    }
}

function check14(){
    //입력한 배수
    const input = Number(document.getElementById("input14").value);

    // 결과 출력할 span
    const result = document.getElementById("result14");

    //세기 위한 변수 선언 (아직 세어보지 않았음으로 0개 부터 시작)
    let count = 0;

    for(let num = 1; num <= 100 ; num++){ //1 ~ 100 반복
        
        //num이 input의 배수가 맞는 경우
        if( num % input == 0 ){
            count ++; // count 1 증가
        }
    }
    result.innerText = `${input}의 배수 : ${count} 개`;
    
    //3의 배수 : 33개 
}


/*count 이용하여 출력
    1
    12 
    123
    1234
    123
    12
    1 
    */
function check15(){

    let count = 0;

    for(let row = 1 ; row <= 7; row++){
        if(row <= 4) count++; // 4 행 이하일 경우 count 1 증가
        else         count--; // 4 행 초과일 경우 count 1 감소

        let str = "";
        for(let col=1; col<=count; col++){
            str += col;
        }
        console.log(str);
    }
}

function check16(){
    let val; //변수를 선언만 하기

    //취소를 누르기 전까지 반복
    // == 취소를 누르면 반복하지 않겠다

    while(val !== null){

        /* 동일 비교 연산자 */
        // !== -> 값, 자료형이 모두 같은 경우 true
        // === -> 값, 자료형이 모두 같은 경우 true
        val = prompt("입력 후 확인");
        //확인 -> 입력한 값
        // 취소 -> null

        console.log(val);
    } 
}

function check17(){

    //메뉴
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000;

    //주문 개수 카운트
    let gCount = 0; //김밥
    let rCount = 0; //라면
    let dCount = 0; //돈까스

    //prompt로 입력할 값을 저장할 변수
    let input; // undefined

    while(input !== null){
        input =prompt("메뉴 번호 입력하세요");

        switch(input){
            case '1' : gCount++; break;
            case '2' : rCount++; break;
            case '3' : dCount++; break;
            case null : alert("주문 완료!"); break;

            default : alert("메뉴에 작성된 번호만 입력해주세요"); break;
        }
    }

    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);

    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);
    alert(`총 가격 : ${sum} 원`)
}

/* while을 for문 처럼 사용하기 */
function check18(){
    // 1부터 10까지 출력
    let num = 1;
    while( num <= 10 ){
        console.log(num)
        num++;
    }
    console.log("-------------------");

    /* 10부터 1까지 1씩 감소 (while) */
    let x = 10;
    while( x > 0){
        console.log(x);
        x--;
    }
}


//변수 선언

// document(문서) : HTML문서 (파일) 내에서
// GET : 얻다
// Element : HTML 요소
// ById : 아이디가 일치하는 

// -> HTML 문서 내에서 ()내 아이디가 일치하는 요소를 얻어오겠다
const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");



/* 두 수를 더해서 화면에 출력하는 함수(기능) */
function plusFn(){

    /* input요소.value : input 요소에 작성된 값 얻어오기 */
   
    const value1 = number1.value;
    const value2 = number2.value;
    console.log(value1, value2);

    console.log("두 수의 합 :", value1 + value2);
    // -> input 요소에 작성된 값은 무조건 문자열(string) 형태라서
    // 더했을 때 이어쓰기  되는 문제가 발생한다!!!


    // [해결방법]
    // 문자열(string)을 숫자 (number)로 변경하는  코드를 수행
    // -> 데이터 파싱(data parsing) : 데이터의 종류를 바꿈 

    /* 숫자만 작성된 문자열("123")을 진짜 숫자 (123)로 바꾸는 방법!! 
        -> Number("123") --> 123
    */

    console.log("두 수의 합 :", Number(value1) + Number(value2));

    /*  두 수의 합을 
        아이디가 "calcResult" 인 요소의 내부 글자 
        (innerText, HTML 요소 내용)으로 대입하기 
    */
    result.innerText = Number(value1) + Number(value2);

}//plusFn 끝

/* 빼기 함수 */
function minusFn(){
    
    // String 으로 얻어온 값을 바로 number로 변환하여 변수에 대입
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("value1 :", value1, typeof value1);
    console.log("value2 :", value2, typeof value2);

    result.innerText = value1 - value2;
}

/* 곱하기 함수 */
function multFn(){
    
    // String 으로 얻어온 값을 바로 number로 변환하여 변수에 대입
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("value1 :", value1, typeof value1);
    console.log("value2 :", value2, typeof value2);

    result.innerText = value1 * value2;
}

/* 나누기 함수 */
function divFn(){
    
    // String 으로 얻어온 값을 바로 number로 변환하여 변수에 대입
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("value1 :", value1, typeof value1);
    console.log("value2 :", value2, typeof value2);

    result.innerText = value1 / value2;
}

/* 나머지 연산 함수 */
function modFn(){
    /* 나머지 연산(%)은 나누기 계산 시
        몫이 정수인 부분까지만 계산하고 남은 나머지 값을 출력한다
    */
        const value1 = Number(number1.value);
        const value2 = Number(number2.value);
    
        console.log("value1 :", value1, typeof value1);
        console.log("value2 :", value2, typeof value2);
    
        result.innerText = value1 % value2;
}


//-------------------------------------------------------------

function add3nums(){
    const num1  = document.getElementById("num1");
    const num2  = document.getElementById("num2");
    const num3  = document.getElementById("num3");

    const total = document.getElementById("total");

    const numval1 = Number(num1.value);
    const numval2 = Number(num2.value);
    const numval3 = Number(num3.value);
    total.innerText = Number(numval1) + Number(numval2) + Number(numval3);
}

//---------------------------------------------------------------

/* 증가/감소 연산자(++, --) */

// 증가, 감소할 수를 저장할 변수 선언
let count = 0;  // (주의) const 로 선언하면 값을 증가/감소 시킬수 없다!
//문서 내에서 ID가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2= document.getElementById("result2");


/*  1증가 함수 */
function increase(){
    count++; // 또는 ++count; -> COUNT 값이 1 증가
    result2.innerText = count;

}

/*  1감소 함수 */
function decrease(){
    count--; // 또는 --count; -> COUNT 값이 1 감소
    result2.innerText = count;
   
}

/* 전의, 후위 여난 확인하기 */
function check1(){

    //함수 밖, 안은 구분되는 공간으로 생각하면 된다!
    //밖에 작성한 변수 count, 안에 작성한 count는 서로 변수 (동명이인)
    let count = 100;

    //컴퓨터한테 연산은 +-*/ 뿐만 아니라
    //코드를 하나하나 실행하는 것들이 연산이다!!

    // -> 다른 연산보다 먼저 수행
    // -> count 값이 먼저 증가, 감소된 후 console에 출력이 된다

    console.log("++count:", ++count);
    console.log("++count:", ++count);
    console.log("++count:", ++count);
    console.log("-----------------");
    console.log("++count:", --count);
    console.log("++count:", --count);
    console.log("++count:", --count);

    // 후위 연산(count++, count--) 확인
    // -> 다른 연산이 다 끝나고 마지막에 수행


    count = 50;

    console.log("----------------");
    console.log("count++", count++); //50 출력후 51로 증가
    console.log("후위 연산후 count: ", count);

    console.log("count--", count--); //51 출력후 50로 증가
    console.log("후위 연산후 count: ", count);

    console.log("----------------");

    let a = 10;
    let b = 5;
    let c = ++a * b--;
    
    //최종적으로 a, b ,c 에 저장된 값은 얼마?
    //a == 11
    //b == 4
    //c == 55

    console.log(a,b,c)

}
 
 

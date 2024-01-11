/*.js 파일 내부를 <script>태그 내부라고 생각하면됨 */

function externalFn(){
    alert("외부 파일에 작성됨 externalFn() 함수 호출됨 ");
}

// ---------------------------------------------

/* JS 맛보기 */
// 버튼 클릭시 body 태그의 글자색, 배경색을 변경
const body = document.querySelector("body");

/* 실행되면 다크모드로 바꾸는 함수 (기능) */
function darkMode(){
    body.style.color = "white"; //글자색 흰색으로 변경
    body.style.backgroundColor = "black"; /* 배경색 검정으로 변경 */
}

/* 실해되면 라이트모드로 바꾸는 함수 (기능) */
function lightMode(){
    body.style.color = "black"; //글자색 흰색으로 변경
    body.style.backgroundColor = "white"; /* 배경색 검정으로 변경 */
}


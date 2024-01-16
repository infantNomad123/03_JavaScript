/* prompt 사용 연습 */

function test(){
    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null){
        alert("취소");
        
    }else{ //확인
        
        //입력한 비밀 번호가 '1234' 가 맞는지 확인

        if(password == '1234'){
            alert("비밀번호가 일치");
        }else {
            alert("비밀번호가 일치하지 않습니다");
        }
    }
}

let balance = 10000;
const balanceAmnt = document.getElementById("balance");
const depositAmnt = document.getElementById("amount1");
balanceAmnt.innerText = `잔액: ${balance} 원`;




function deposit(){
    const checkDep = Number(depositAmnt.value);

    balance+= checkDep;
    balanceAmnt.innerText = `잔액: ${balance} 원`;
    
}
function withdrawal(){
    const checkDep = Number(depositAmnt.value);
    

    const pw = prompt("비밀번호를 입력해주세요");
    if(pw != "1234"){
        alert("비밀번호가 일치하지 않습니다");
        return;
    }else{
        if(checkDep > balance){
            alert("출금 금액이 잔액보다 클 수 없습니다");
        }
        else{
            balance-= checkDep;
            balanceAmnt.innerText = `잔액: ${balance} 원`;
            alert(`${checkDep}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);

        }
        
    }
}

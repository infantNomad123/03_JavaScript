const numDisplay = document.getElementById("np1");
const numDisplay2 = document.getElementById("np2");
let count = 0;

function numBtn(button){

    switch(button){
        case '1' :
            count++;
            if(count > 10){
                alert(" your time exceeded...piss ");
            }else{ 
                numDisplay.innerText +='1';
            }
            break;
        
        case '2' :
            count++;
            if(count > 10){
                alert(" your time exceeded...piss ");
            }else{ 
                numDisplay.innerText +='2';
            }
            break;

        case '3' :
            count++;
            if(count > 10){
                alert(" your time exceeded...piss ");
            }else{ 
                numDisplay.innerText +='3';
            }
            break;

        case '4' :
                count++;
                if(count > 10){
                    alert(" your time exceeded...piss ");
                }else{ 
                    numDisplay.innerText +='4';
                }
                break;
        case '5' :
            count++;
            if(count > 10){
                alert(" your time exceeded...piss ");
            }else{ 
                numDisplay.innerText +='5';
            }
            break;
        case '6' :
            count++;
            if(count > 10){
                alert(" your time exceeded...piss ");
            }else{ 
                numDisplay.innerText +='6';
            }
            break;
        case '7' :
            count++;
            if(count > 10){
                alert(" your time exceeded...piss ");
            }else{ 
                numDisplay.innerText +='7';
            }
            break;
        case '8' :
            count++;
            if(count > 10){
                alert(" your time exceeded...piss ");
            }else{ 
                numDisplay.innerText +='8';
            }
            break;
        case '9' :
            count++;
            if(count > 10){
                alert(" your time exceeded...piss ");
            }else{ 
                numDisplay.innerText +='6';
            }
            break;
        case '10' :
            count++;
            if(count > 10){
                alert(" your time exceeded...piss ");
            }else{ 
                numDisplay.innerText +='6';
            }
            break;
    }
}

function numOp(op){
    const n1 = Number(numDisplay.innerText);
    const n2 = Number(numDisplay2.innerText);
    switch(op){
        case '+': numDisplay.innerText = n1+n2;break;
        case '-':
        case '*':
        case '/':
        case '%':
    }
}
function equalFunc(opr){
    numOp(opr);
    numDisplay2.innerText = numDisplay.innerText;
    
    numDisplay.innerText = " ";
    numDisplay2.style.fontSize =  "25px";
    numDisplay2.style.marginBottom = "20px";
}
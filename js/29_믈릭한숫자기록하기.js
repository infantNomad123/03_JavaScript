const container = document.querySelector(".container");
const numbers = document.querySelectorAll(".numbers");
const nums = document.querySelector("#nums");
const resetBtn = document.querySelector("#reset");
// nums.textContent = "";

for(let i =0; i< numbers.length; i++){
    const count = numbers.length;
    numbers[i].addEventListener("click", e =>{
        console.log(e.target.textContent);

        if(nums.textContent.length == 10) {
            alert("10글자 까지만 입력가능");
            return;
        }
        
        nums.textContent += e.target.textContent;

        
    });    
}

/* 초기화 버튼 */
resetBtn.addEventListener("click", () => {
    nums.textContent = "";
});



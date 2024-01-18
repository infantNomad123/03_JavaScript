function changeColors(){
    const input = document.querySelectorAll(".input");
   

    const box = document.querySelectorAll(".box");

    const btn = document.querySelector("#btn");
  

    btn.addEventListener ("click", function(){
        for(let val = 0; val < input.length; val++){
            box[val].style.backgroundColor = input[val].value;
        }});
    
}
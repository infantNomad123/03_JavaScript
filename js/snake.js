const btn= document.querySelector("#btn1");
const container = document.querySelector(".container");

btn.addEventListener("click", function(){
    const input = document.createElement("input");
    const button = document.createElement("button");
    const br = document.createElement("br");
    input.type = "number";
    button.classList.add("button");
    button.innerText = "x";
    
    container.append(br);
    container.append(br);
    container.append(input);
    container.append(button);

    button.addEventListener("click", function(){
        container.children = " ";
        input.remove();
        button.remove();
        document.createElement("br").remove()
    })
});
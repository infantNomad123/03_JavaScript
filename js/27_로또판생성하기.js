const lottery= document.querySelector(".lottery");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    for(let i = 0; i < 9; i++){
        const sections = document.createElement("div");
        sections.classList.add("section");
        lottery.append(sections);
        for(let t = 1; t <= 5; t++){
            const tiles = document.createElement("div");
            tiles.classList.add("tile");
            sections.append(tiles);
        } 
    }

    
    for(let  i =0; i< roundTiles.length; i++){
        const roundTiles = document.querySelectorAll(".tile");
        roundTiles[i].textContent = i+1;
    }
});

tile.addEventListener("click", () => {
    console.log(tile.textContent);
});

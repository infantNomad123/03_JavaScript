function createTable(){
    const start = Number(document.getElementById("start").value);
    const end = Number(document.getElementById("end").value);

    const th = document.getElementById("thead-row");

    const tb = document.getElementById("tbody");
    let sum = 0;
    th.innerHTML = "";
    tb.innerHTML = "";

    //start 부터 end 까지 1씩 증가
    for(let row =1; row <= 10 ; row++){
        /* th.innerHTML += `<th>${row}단</th>`;
        tb.innerHTML += "<tr>"; */
        let str = "<tr>";
        
         for(let dan = start; dan <= end; dan++){
            str += `<td>${row} x${dan} = ${row * dan} </td>`;
            sum =sum +  dan;   
         }
         str += "</tr>";
         tb.innerHTML += str;
         console.log(str);
         
        /* tb.innerHTML += "</tr>"; */
        th.innerHTML += `<th>${sum}단</th>`;
    }

    
    
}
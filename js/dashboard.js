$(document).ready(function(){
    var table=document.getElementById("myTable");
    var row,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,x;
    $.getJSON(rurl+"admin/dashboard", function (data){
        var d=data["message"];
        for (x=0;x<d.length;x++) {
            row = table.insertRow(1);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell3 = row.insertCell(2);
            cell4 = row.insertCell(3);
            cell5 = row.insertCell(4);
            cell6 = row.insertCell(5);
            cell7 = row.insertCell(6);
            cell8 = row.insertCell(7);
            cell9 = row.insertCell(8);
            cell1.innerHTML=d[x]["_id"];
            cell2.innerHTML=d[x]["current_price"];
            cell3.innerHTML='<input type="text" class="ptext" placeholder="price" style="height: 20px;width: 90px"></<input>';
            cell4.innerHTML='<button name="price" class="bprice" type="button" style="margin: 0px;">Price</button><button name="volume" class="bvolume" type="button" style="margin-left: 5px;">Volume</button>';
            cell5.innerHTML='<input type="text" class="vtext" placeholder="volume" style="height: 20px;width: 90px"></<input>';
            cell6.innerHTML=d[x]["total_volume"];
            cell7.innerHTML=d[x]["current_volume"];
            cell8.innerHTML=d[x]["high"];
            cell9.innerHTML=d[x]["low"];
        }
        })
})

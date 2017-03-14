$(document).ready(function () {
    $("#myTable").on('click','.bprice',function(){
        var currentRow = $(this).closest("tr");
        var company = currentRow.find("td:eq(0)").text();
        var ncell=currentRow.find("td:eq(2)");
        var nprice;
        ncell.find('input').each(function() {
            nprice=$(this).val();
        })
      nprice=parseFloat(nprice);
      if(isNaN(nprice) || nprice<=0){
          alert("Invalid entry");
      }
      else{
          var d1={"company":company,"price":nprice};
          $.ajax({
              url: 'http://192.168.0.107:8000/admin/price',
              type: 'post',
              data: JSON.stringify(d1),
              dataType: 'json',
              success: function (d2) {
                  var x = d2["message"];
                  alert(x);
                  location.reload();
              }
          });
      }
    })
})
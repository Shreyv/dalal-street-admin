$(document).ready(function(){
   hideall();
$("#addnews").click(function(){
    hideall();
    $("#news").show();
    })
$("#adduser").click(function(){
    hideall();
    $("#add").show();
})
$("#getuser").click(function(){
    hideall();
    $("#username").text("");
    $("#userpassword").text("");
    $("#getu").show();

})
$("#count").click(function () {
    hideall();
    $("#getc").show();
})
    /* news submit */
    $("#nsubmit").click(function(){
        var broker=$("#type").find(":selected").val();
        var message=$("#message").val();
        if(message==null || message==""){
            alert("Invalid  message");
        }
        else{
            var d1={"broker":broker,"message":message};
            $.ajax({
                url: rurl+'add_news',
                type: 'post',
                data: JSON.stringify(d1),
                dataType: 'json',
                success: function (d2) {
                    var x = d2["message"];
                    alert(x);
                }
            });
        }

    })
    /* add user */
    $("#usubmit").click(function(){
        var name=$("#uname").val();
        var mobile=$("#umob").val();
        if(name==null || message=="" || mobile==null || mobile.length<10){
            alert("Invalid  message");
        }
        else{
            var d1={"user_id":mobile,"name":name};
            $.ajax({
                url: rurl+"admin/user",
                type: 'post',
                data: JSON.stringify(d1),
                dataType: 'json',
                success: function (d2) {
                    var x = d2["message"];
                    alert(x);
                }
            });
        }
    })
    /* get user */
    $("#getuserd").click(function(){
        var mobile=$("#mobile").val();
        var url=rurl+"admin/user?user_id="+mobile;
        $.get(url,function(d){
            $("#username").text(d["message"]["name"]);
            $("#userpassword").text(d["message"]["password"]);
        })
    })
    /* get count */
    $("#count").click(function(){
        var url=rurl+"count";
        $.get(url,function(d){
            $("#users").text(d["message"]["user"]);
            $("#angel").text(d["message"]["Angel Broking"]);
            $("#india").text(d["message"]["IndiaBulls"]);
            $("#share").text(d["message"]["ShareKhan"]);
        })
    })
    function hideall(){
        $("#news").hide();
        $("#add").hide();
        $("#getu").hide();
        $("#getc").hide();
    }
})


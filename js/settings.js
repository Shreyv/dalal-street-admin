$(document).ready(function(){
    $("#news").hide();
    $("#add").hide();
    $("#getu").hide();
$("#addnews").click(function(){
    $("#news").toggle();
    })
$("#adduser").click(function(){
    $("#add").toggle();
})
$("#getuser").click(function(){
    $("#getu").toggle();
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
            $.post(rurl+"add_news",JSON.stringify(d1),function(d){
                alert(d["message"]);
            })
            location.reload();
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
            $.post(rurl+"admin/user",JSON.stringify(d1),function(d){
                alert(d["message"]);
            });
        }
        location.reload();
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


})


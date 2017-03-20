$(document).ready(function(){
    var token = localStorage.getItem("token");
    $("#logout").css("cursor", "pointer");
    if (token == null) {
        window.location.href = "index.html";
    }
    else {
        $.ajaxSetup({
            headers: {
                'Authorization': token
            },
            crossDomain: true
        });
    }
    $("#sub").click(function () {
        var user=$("#userid").val();
        var pass=$("#password").val();
        if( user==null || pass==null){
            alert("Invalid Entry");
        }
        else{
            var d1 = {"user_id": user, "password": pass,"type": "admin"};
            $.ajax({
                url: "http://192.168.0.110:8000/login",
                type: 'post',
                data: JSON.stringify(d1),
                dataType: 'json',
                crossDomain: true,
                success: function (d2) {
                    if (d2["status"] == 200 || d2["status"] == 555 || d2["status"]== 666) {
                        localStorage.setItem("atoken", d2["message"]);
                        window.location.replace("dashboard.html");
                    }
                    else {
                        alert(d2["message"]);
                    }
                }
            });
        }
    })
})
var rurl = "http://192.168.0.110:8000/";
$(document).ready(function () {
    var token = localStorage.getItem("atoken");
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
    $("#logout").click(function () {
        var d1 = {"user_id": localStorage.getItem("mobile"),"type":"admin"};
        $.ajax({
            url: rurl + 'logout',
            type: 'post',
            data: JSON.stringify(d1),
            dataType: 'json',
            success: function (d2) {
                    localStorage.removeItem("mobile");
                    localStorage.removeItem("atoken");
                    window.location.replace("index.html");
            }
        });
    })
})
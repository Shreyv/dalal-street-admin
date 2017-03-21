var rurl = "http://35.154.159.2:8000/";
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
        var d1 = {"user_id": localStorage.getItem("amobile")};
        $.ajax({
            url: rurl + 'admin/logout',
            type: 'post',
            data: JSON.stringify(d1),
            dataType: 'json',
            success: function (d2) {
                    localStorage.removeItem("amobile");
                    localStorage.removeItem("atoken");
                    window.location.replace("index.html");
            }
        });
    })
})
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

    })
})
/* add user */

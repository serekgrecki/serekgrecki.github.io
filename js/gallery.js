$(document).ready(function() {

})

$("#sidebar").hover(
function() {
    $("#sidebar").animate({
        width: "300px",
        left:"0px",
    }, { duration:200, queue: false });
    
    $(".sidebar-logo").animate({
        width:"100%",
        paddingLeft:"50px",
        paddingRight:"50px",
        paddingTop:"20px",
    }, { duration:200, queue: false });
    },    
function() {
    $("#sidebar").animate({
        width: "70px",
        left:"0px",
    }, { duration:200, queue: false });
    
    $(".sidebar-logo").animate({
        width:"100%",
        padding:"5px",
        marginTop: "5px",
    }, { duration:200, queue: false });
    });
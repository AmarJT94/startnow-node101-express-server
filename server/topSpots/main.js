$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function (data){
        for (var i = 0; i < data.length; i++) {
            $(".table").append("<tr>" + "<td>" + data[i].name + "</td>" + "<td>" + data[i].description + "</td>" + "<td>" + "<a href='https://www.google.com/maps?q=" + data[i].location[0] + "," + data[i].location[1] + "'>Google Map</a></td></tr>");
        };
    });        
});

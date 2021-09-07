var date = moment().format("MMMM Do YYYY hh:mm a");

$("#currentDay").text(date);


//Row Creator
var main = $(".container")
var day_start = "09:00:00"

for (i = 0 ; i < 9; i++){
    hour = moment(day_start,"HH:mm:ss").add(i,'hours').format("hh a");
    var row = $("<div>");
    var col = $("<div>");
    row.addClass("row");
    col.addClass("col-sm");
    col.text(hour);
    row.append(col);
    main.append(row);
};

//Current Code KIND of works in created the list of times, need to add changable text area, delete/edit function, and
//"current hour" highlighting (Which I think will just be a "if the time is X, change the class to Y")
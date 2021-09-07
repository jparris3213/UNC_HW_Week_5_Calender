var date = moment().format("MMMM Do YYYY hh:mm a");

$("#currentDay").text(date);


//Row Creator
var main = $(".container")
var day_start = "09:00:00"

for (i = 0 ; i < 9; i++){
    //This Loop Creates the daily hours/columns
    hour = moment(day_start,"HH:mm:ss").add(i,'hours').format("hh a");
    var row = $("<div class=row>");
    var sch_form = $("<div class='input-group'>");
    var sch_pre = $("<div class='input-group-prepend'>")
    var date_col = $("<span class='input-group-text'>");
    var act_col = $("<input type=text class='form-control task-input' placeholder='Click Here to Add Task'>");
    act_col.attr("style","height:80px");
    var save_col = $("<button type=button class='btn btn-primary task-save'>");
    var sch_end = $("<div class='input-group-append'>");
    var col_id = "column_" + i;
    var sav_id = "save_" + i;
    act_col.attr("id", col_id);
    save_col.attr("id", sav_id);
    date_col.text(hour);
    sch_pre.append(date_col);
    sch_end.append(save_col);
    save_col.text("Save");
    sch_form.append(sch_pre);
    sch_form.append(act_col);
    sch_form.append(sch_end);
    row.append(sch_form);
    main.append(row);
};

//Current Code KIND of works in created the list of times, need to add changable text area, delete/edit function, and
//"current hour" highlighting (Which I think will just be a "if the time is X, change the class to Y")

//Save Task Logic
$(".task-save").click(function(){
    console.log(this.id)
})

//Click Listener for the save button pulls info from act_col and saves it (span content)


//If statement to highlight current hour
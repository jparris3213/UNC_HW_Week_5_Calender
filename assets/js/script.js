var date = moment().format("MMMM Do YYYY hh:mm a");
var cur_int = moment("12:00:00 pm", "HH:mm:ss");//Placeholder "Time"
//var cur_int = moment();//Actual Time- Comment as needed

$("#currentDay").text(date);


//Row Creator
var main = $(".container")
var day_start = "09:00:00"

for (i = 0 ; i < 9; i++){
    //This Loop Creates the daily hours/columns
    var hour = moment(day_start,"HH:mm:ss").add(i,'hours').format("hh a");
    var row = $("<div class=row>");
    var sch_form = $("<div class='input-group'>");
    var sch_pre = $("<div class='input-group-prepend'>")
    var date_col = $("<span class='input-group-text hourblock'>");
    var act_col = $("<input type=text class='form-control task-input' placeholder='Click Here to Add Task'>");
    act_col.attr("style","height:80px");
    var save_col = $("<button type=button class='btn btn-primary task-save'>");
    var sch_end = $("<div class='input-group-append'>");
    var del_bttn = $("<button type=button class='btn btn-primary task-del'>");
    del_id = i;
    var col_id = "column_" + i;
    var sav_id =  i;
    var mem_id = "mem_" + i;
    act_col.attr("id", col_id);
    save_col.attr("id", sav_id);
    del_bttn.attr("id", del_id);
    del_bttn.text("Clear");
    date_col.text(hour);
    
    var hour_int = moment(day_start,"hh a").add(i, 'hours')
    if (hour_int < cur_int) {
        //This changes the background of the line to grey if the hour has passed
        date_col.attr("style","background-color: grey");
        //act_col.attr("style","background-color: grey");
    } else if (hour_int === cur_int){
        //This is supposed to change the background to green if it is the current hour
        console.log("it's the current time" + hour + " " + cur_int);
        date_col.attr("style","background-color: green");
        //act_col.attr("style","background-color: green");
    } else {
        //This is supposed to change the background to blue if the hour is ahead
        console.log("It's Early" + hour_int + " " + cur_int);
        date_col.attr("style","background-color: lightblue");
        //act_col.attr("style","background-color: lightblue");
    }

    act_col.val(localStorage.getItem(mem_id));
    sch_pre.append(date_col);
    sch_end.append(save_col);
    sch_end.append(del_bttn);
    save_col.text("Save");
    sch_form.append(sch_pre);
    sch_form.append(act_col);
    sch_form.append(sch_end);
    row.append(sch_form);
    main.append(row);
};

//Save Task Logic
$(".task-save").click(function(){
    var col_match = "#column_"+ this.id;
    var mem_stor = "mem_" + this.id;
    console.log(mem_stor);
    task = $(col_match).val();
    console.log(task);
    localStorage.setItem(mem_stor,task);

});

//Delete Task Logic
$(".task-del").click(function(){
    var mem_locale = "mem_" + this.id;
    console.log(mem_locale);
    localStorage.removeItem(mem_locale);
    location.reload();
})
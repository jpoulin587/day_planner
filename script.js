let currentDayEl = $('#current-day');
let currentHour

//display the current time
function displayTime() {
    let todaysDate = moment().format('MMM DD, YYYY');
    currentDayEl.text(todaysDate);
  };

//get the current hour.
function hourIndicator() {
  currentHour = moment().hour();
  console.log(currentHour);
}



// save data from the form to local storage
  $(".savebtn").on("click", function() {
    let eventText = $(this).siblings(".text-form").val();
    let timeSlot = $(this).siblings().attr("id");

    localStorage.setItem(timeSlot, eventText);
  });


 // get event data from local storage (https://www.w3schools.com/jquery/html_val.asp)
$("#event08").val(localStorage.getItem("hr08"));
$("#event09").val(localStorage.getItem("hr09"));
$("#event10").val(localStorage.getItem("hr10"));
$("#event11").val(localStorage.getItem("hr11"));
$("#event12").val(localStorage.getItem("hr12"));
$("#event01").val(localStorage.getItem("hr01"));
$("#event02").val(localStorage.getItem("hr02"));
$("#event03").val(localStorage.getItem("hr03"));
$("#event04").val(localStorage.getItem("hr04"));
$("#event05").val(localStorage.getItem("hr05"));
$("#event06").val(localStorage.getItem("hr06"));

//run the date display function on page load
displayTime();
hourIndicator();

// change the color of the hour bubbles for the current hour
if (currentHour > 8) {
  console.log("it's past 8");
  document.getElementById("hr08").setAttribute("style", "background-color: pink;");
}

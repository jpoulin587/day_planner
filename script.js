let currentDayEl = $('#current-day');
let currentHour

//display the current time
function displayTime() {
    let todaysDate = moment().format('dddd, MMMM DD, YYYY');
    currentDayEl.text(todaysDate);
  };

//get the current hour.
function hourIndicator() {
  currentHour = moment().hour();
  console.log(currentHour);
}



// save data from the form to local storage
  $(".saveBtn").on("click", function() {
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


// change the color of the hour bubbles for the current hour (https://www.w3schools.com/jsref/met_element_setattribute.asp) and (https://www.w3schools.com/jquery/jquery_css.asp)
if (currentHour > 8) {
  $("#hr08").css("background-color", "pink");
} else if (currentHour === 8) {
  console.log("it's currently 8");
  $("#hr08").css("background-color", "LightGreen");
};

if (currentHour > 9) {
  $("#hr09").css("background-color", "pink");
} else if (currentHour === 9) {
  console.log("it's currently 9");
  $("#hr09").css("background-color", "LightGreen");
};

if (currentHour > 10) {
  document.getElementById("hr10").style.backgroundColor = "pink"
} else if (currentHour === 10) {
  console.log("it's currently 10");
  document.getElementById("hr10").style.backgroundColor = "LightGreen"
};

if (currentHour > 11) {
  document.getElementById("hr11").style.backgroundColor = "pink"
} else if (currentHour === 11) {
  console.log("it's currently 11");
  document.getElementById("hr11").style.backgroundColor = "LightGreen"
};

if (currentHour > 12) {
  document.getElementById("hr12").style.backgroundColor = "pink"
} else if (currentHour === 12) {
  console.log("it's currently 12");
  document.getElementById("hr12").style.backgroundColor = "LightGreen"
};

if (currentHour > 13) {
  document.getElementById("hr01").style.backgroundColor = "pink"
} else if (currentHour === 13) {
  console.log("it's currently 1:00");
  document.getElementById("hr01").style.backgroundColor = "LightGreen"
};

if (currentHour > 14) {
  document.getElementById("hr02").style.backgroundColor = "pink"
} else if (currentHour === 14) {
  console.log("it's currently 2:00");
  document.getElementById("hr02").style.backgroundColor = "LightGreen"
};

if (currentHour > 15) {
  $("#hr03").css("background-color", "pink")
} else if (currentHour === 15) {
  console.log("it's currently 03");
  $("#hr03").css("background-color", "LightGreen")
};

if (currentHour > 16) {
  document.getElementById("hr04").style.backgroundColor = "pink"
} else if (currentHour === 16) {
  console.log("it's currently 4");
  document.getElementById("hr04").style.backgroundColor = "LightGreen"
};

if (currentHour > 17) {
  document.getElementById("hr05").style.backgroundColor = "pink"
} else if (currentHour === 17) {
  console.log("it's currently 5");
  document.getElementById("hr05").style.backgroundColor = "LightGreen"
};

if (currentHour > 18) {
  document.getElementById("hr06").style.backgroundColor = "pink"
} else if (currentHour === 18) {
  console.log("it's currently 6");
  document.getElementById("hr06").style.backgroundColor = "LightGreen"
};



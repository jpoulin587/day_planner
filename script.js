let currentDayEl = $('#current-day');

//display the current time
function displayTime() {
    let rightNow = moment().format('MMM DD, YYYY');
    currentDayEl.text(rightNow);
  };

// save data from the form to local storage
  $(".savebtn").on("click", function() {
    let eventText = $(this).siblings(".text-form").val();
    let timeSlot = $(this).siblings().attr("id");

    localStorage.setItem(timeSlot, eventText);
  });



//run the date display function on page load
displayTime();
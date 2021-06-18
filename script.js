var currentDayEl = $('#current-day');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    currentDayEl.text(rightNow);
  };

  displayTime();
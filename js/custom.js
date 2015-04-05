$(function() {

  // Inclusive 'between' to save a lot of gnarly comparisons
  Number.prototype.isBetween = function(a, b) {
    return this >= a && this <= b;
  };

  function wordClock() {

    var hr = moment().hour();
    var hr = moment().format('h');
    var min = moment().minute();

    // Minutes
    if (min.isBetween(0, 4)) {
      $('.oclock').addClass('on');
    } else if (min.isBetween(5, 9) || min.isBetween(25, 29) ||
      min.isBetween(35, 39) || min.isBetween(55, 59)) {
      $('.five-min').addClass('on');
    } else if (min.isBetween(10, 14) || min.isBetween(50, 54)) {
      $('.ten-min').addClass('on');
    } else if (min.isBetween(15, 19) || min.isBetween(45, 49)) {
      $('.a, .quarter').addClass('on');
    } else if (min.isBetween(30, 34)) {
      $('.half').addClass('on');
    }

    // Broken out to display for both 'twenty' and 'twentyfive'
    if (min.isBetween(20, 29) || min.isBetween(35, 44)) {
      $('.twenty').addClass('on');
    }

    // Past or to
    if (min.isBetween(35, 59)) {
      $('.to').addClass('on');
    } else if (min.isBetween(5, 34)) {
      $('.past').addClass('on');
    }

    // Hours
    if ((hr == 12 && min.isBetween(35, 59)) || (hr == 1 && min.isBetween(0, 34))) {
      $('.one').addClass('on');
    } else if ((hr == 1 && min.isBetween(35, 59)) || (hr == 2 && min.isBetween(0, 34))) {
      $('.two').addClass('on');
    } else if ((hr == 2 && min.isBetween(35, 59)) || (hr == 3 && min.isBetween(0, 34))) {
      $('.three').addClass('on');
    } else if ((hr == 3 && min.isBetween(35, 59)) || (hr == 4 && min.isBetween(0, 34))) {
      $('.four').addClass('on');
    } else if ((hr == 4 && min.isBetween(35, 59)) || (hr == 5 && min.isBetween(0, 34))) {
      $('.five-hr').addClass('on');
    } else if ((hr == 5 && min.isBetween(35, 59)) || (hr == 6 && min.isBetween(0, 34))) {
      $('.six').addClass('on');
    } else if ((hr == 6 && min.isBetween(35, 59)) || (hr == 7 && min.isBetween(0, 34))) {
      $('.seven').addClass('on');
    } else if ((hr == 7 && min.isBetween(35, 59)) || (hr == 8 && min.isBetween(0, 34))) {
      $('.eight').addClass('on');
    } else if ((hr == 8 && min.isBetween(35, 59)) || (hr == 9 && min.isBetween(0, 34))) {
      $('.nine').addClass('on');
    } else if ((hr == 9 && min.isBetween(35, 59)) || (hr == 10 && min.isBetween(0, 34))) {
      $('.ten-hr').addClass('on');
    } else if ((hr == 10 && min.isBetween(35, 59)) || (hr == 11 && min.isBetween(0, 34))) {
      $('.eleven').addClass('on');
    } else if ((hr == 11 && min.isBetween(35, 59)) || (hr == 12 && min.isBetween(0, 34))) {
      $('.twelve').addClass('on');
    }

  }

  function refreshClock() {
    // Clear what's on before redrawing the clock
    $('.on').removeClass('on');

    wordClock();
  }

  // Refresh the clock
  setInterval(refreshClock, '1000');

  refreshClock();

});

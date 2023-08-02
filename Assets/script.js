// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let hours = $('.row');
let activity = $('.description');
let activities = JSON.parse(localStorage.getItem('activities')) || [];
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('#hour-9').on('click', function(event) {
    if (event.target.matches(".btn") || event.target.matches(".fas")) {
    console.log('click9');
    event.preventDefault();
    let hour9 = {'9': activity[0].value};
    activities.push(hour9);
    localStorage.setItem('activities', JSON.stringify(activities))
    }
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
for (let i = 0; i < hours.length; i++) {
  if (parseInt(hours[i].dataset.time) < dayjs().hour()) {
    console.log('past');
    // this is js and I don't know why. how can i do this in jQuery
    hours[i].classList.add('past');  
  } else if (parseInt(hours[i].dataset.time) === dayjs().hour()) {
    console.log('present')
    // this is js and I don't know why. how can i do this in jQuery
    hours[i].classList.add('present');  

  } else {
    console.log('future')
    // this is js and I don't know why. how can i do this in jQuery
    hours[i].classList.add('future');  
  }
}
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  activity[0].value = JSON.parse(localStorage.getItem('activities'));
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMM DD, YYYY'));
});

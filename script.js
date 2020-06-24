var currentTime = moment().format('LT')
var currentDate = moment().format('YYYY-MM-DD')

//on load generate new divs
    // pull saved info from local storage

// divs are generated run a setTimeout loop that constantly checks the time and updates the grid color
$(document).ready(function() {
    $("#timeSlotContainer").children().each(function() {
//          if ( moment().isBefore(moment($(this).data("timeSlot"))._i, "HH:mm") ) {
            if ( moment().isBefore(currentDate + ' ' + $(this).data("timeSlot")) ) {
                console.log('isbefore ' + $(this).data("timeSlot"))
                $(this).addClass("future")
            } else {
                console.log('isafter ' + $(this).data("timeSlot"))
                $(this).addClass("past")
            };
        });  
    });

function saveUserInput() {
    var savedInput = $(this).siblings(".input-field").text()
    var savedTimeSlot = $(this).siblings(".hour").text()
    localStorage.setItem(savedTimeSlot, savedInput)
};
// build input function to take user input and save it to localStorage
$(document).on("click", ".save-btn", saveUserInput)
    // build save button functionality
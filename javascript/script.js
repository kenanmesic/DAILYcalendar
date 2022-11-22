/* JAVASCRIPT LOGICS */

/* -- TIME ELEMENT */
// References ID on HTML page for time.
var timeEl = $('#currentDay')
// Establishes function for printing time to HTML page.
function printTime() {
    // Utilizes moment structure for time. Establishes variable for text.
    // Reference documentation to change structure: https://momentjs.com/docs/
    var currentTime = "The date is: " + moment().format('h:mm A [on] MMMM Do, YYYY')
    // Sets text content to the variable above.
    timeEl.text(currentTime)
}
// Runs the function of printTime every second, updating the time.
setInterval(printTime, 1000)

/* -- SAVING TEXT IN PLANNER THROUGH BUTTON */
// By clicking the button associated with the class saveBtn, activates function
$('.saveBtn').on('click', function() {
    // Captures time through this function and stores time value of parent id
    var storeTime = $(this).parent().attr('id')
    // Captures text through this function and stores value in textarea
    var storeText = $(this).siblings('textarea').val()
    console.log(storeTime, storeText)
    // sets localStorage for these two variables
    localStorage.setItem(storeTime,storeText)
})
// Calls upon item in localStorage for IDs if they are saved
$(document).ready(function() {
    // #(number) references the ID set as a number value where it is attributed
    // textarea ensures it is the value associated with textarea
    $('#7 textarea').val(localStorage.getItem('7'))
    $('#8 textarea').val(localStorage.getItem('8'))
    $('#9 textarea').val(localStorage.getItem('9'))
    $('#10 textarea').val(localStorage.getItem('10'))
    $('#11 textarea').val(localStorage.getItem('11'))
    $('#12 textarea').val(localStorage.getItem('12'))
    $('#13 textarea').val(localStorage.getItem('13'))
    $('#14 textarea').val(localStorage.getItem('14'))
    $('#15 textarea').val(localStorage.getItem('15'))
    $('#16 textarea').val(localStorage.getItem('16'))
})

/* -- CHANGING TIME OF DAY COLOR BLOCKS */
// References the current hour to be compared to hour blocks, ensures it's a value
var presentHour = parseInt(moment().hour())
// Looks at ID of time block to be compared to present hour
$('.time-block').each(function() {
    var rowHour = parseInt($(this).attr('id'))
    // If it's the present, use class .present
    if (presentHour === rowHour) {
        $(this).removeClass('past')
        $(this).removeClass('future')
        $(this).addClass('present')
    }
    // If the hour has already passed, use class .past
    if (presentHour > rowHour) {
        $(this).removeClass('present')
        $(this).removeClass('future')
        $(this).addClass('past')
    }
    // If the hour has not occured, use class .future
    if (presentHour < rowHour) {
        $(this).removeClass('present')
        $(this).removeClass('future')
        $(this).addClass('future')
    }
})
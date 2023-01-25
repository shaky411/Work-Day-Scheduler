let timeBlock = $('.time-block');
let currentHour = moment();



// Show current day/time in the jumbotron section
    setInterval(
    function () {
        $("#current-day").text(moment().format("DDD MMM, YYYY HH:mm:ss"));
    }, 1000)
    

    // Store items to local storage when save button is clicked
    
$(".saveBtn").on('click', function () {

// This is the sibling (description)
let textItem = $(this).siblings('.description').val();

// This is the parent div (hour-9)
let timeItem = $(this).parent().attr('id');
localStorage.setItem(timeItem, textItem);
});

// Loop through the time-blocks
function getItems () {

    $(".time-block").each(function () {
        let id = $(this).attr("id");
        let description = localStorage.getItem(id);

        if (description !== null) {
            $(this).children(".description").val(description);
        }
    });
}

getItems();

// Function to check tasks and change colors based on their current state

    function renderPastPresentFuture () {

        let currentTime = currentHour.hours();

        $(".time-block").each(function () {
            let nowHour = parseInt($(this).attr("id"));
    
            if (nowHour < currentTime) {
                $(this).addClass("past");
            } else if (nowHour === currentTime) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }
    
        });


    }

    renderPastPresentFuture();
        

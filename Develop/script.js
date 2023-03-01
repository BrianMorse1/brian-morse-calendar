
$(function () {
  var currentTime = dayjs();
  $('#currentDay').text(currentTime.format("dddd, MMMM D YYYY"));
 });

  //if, else statement to check current time vs timeblock hour. 
 function update(){$('.time-block').each( function () {
    var hour = parseInt($(this).attr('id').split('-')[1]);
    // this will be in 24h format
    var currentHour = dayjs().hour();
    
        if (hour < currentHour) {
      $(this).addClass('past');
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if 
        (hour === currentHour) {
          $(this).addClass('present');
          $(this).removeClass("past");
          $(this).removeClass("future");
      
    } else {
      $(this).addClass('future');
      $(this).removeClass("past");
      $(this).removeClass("present");
    
    }
  })};

//sets interval for update function
setInterval(update(), 15000);

//adds function to save button that will get the value of the text area and save it locally under the parent element id
$(".saveBtn").click(function(){
  var textContent = $(this).parent().children("textarea").val();

localStorage.setItem($(this).parent().attr('id'), textContent);

});

function hourOneText (){
var display = localStorage.getItem("hour-1").val();
$(this).parent().children("textarea").val(display);
};

hourOneText();





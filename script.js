
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");


/**
 * 
 * @param {Date} date 
 */

function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAM = date.getHours() < 12;

  return '${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"}';

}
/**
 * 
 * @param {Date} date 
 */

function formatDate(date) {
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return '${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}';

}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);


$(function() {
  let hour9 = $('#9');
  let hour10 = $('#10');
  let hour11 = $('#11');
  let hour12 = $('#12');
  let hour1 = $('#1');
  let hour2 = $('#2');
  let hour3 = $('#3');
  let hour4 = $('#4');
  let hour5 = $("#5")
  let time = moment();
  
  function setPlanner() {
      $("currentDay").text(moment().format("dddd, MMMM, Do YYYY"));
      $("time-block").each(function() {
          let id = $(this).attr("id");
          let schedule = localStorage.getItem(id);
          if (schedule !== null) {
              $(this).children('.schedule').val(schedule);
          }
      
  });
  
  }
  
  // // function updateColor() {
  //     let hour = new Date().getHours();
  //     for (let i = 9 ; i <=17; i++ ) {
  //     }
  
  
  setPlanner();
  var saveButton = $(".saveBtn");
  console.log (saveButton);
  
  saveButton.on('click', function(){
      let time =$(this).parent().attr('id');
      let schedule = $(this).siblings('.schedule').val();
      localStorage.setItem(time, schedule);
  });
  
  function pastPresentFuture() {
      hour = time.hours();
      hour = 9
      hour = 10
      hour = 11
      hour = 12
      hour = 13
      $('.time-block input').each(function () {
          let thisHour = parseInt($(this).attr('id'));
          console.log({thisHour,hour, id:$(this).attr('id')})
  
          if (thisHour > hour) {
              $(this).addClass('future');
          }
          else if (thisHour === hour) {
              $(this).addClass('present');
          
          }
          else {
              $(this).addClass('past');
          
          }
      })
  }
  pastPresentFuture();
  
  
  
  
  
  });
  
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  var dailyPlanner = [
    {
      hour: "8am",
      line: 8,
      text: "",
    },
    {
      hour: "9am",
      line: 9,
      text: "",
    },
    {
      hour: "10am",
      line: 10,
      text: "",
    },
    {
      hour: "11am",
      line: 11,
      text: "",
    },
    {
      hour: "12pm",
      line: 12,
      text: "",
    },
    {
      hour: "1apm",
      line: 1,
      text: "",
    },
    {
      hour: "2pm",
      line: 2,
      text: "",
    },
    {
      hour: "3pm",
      line: 3,
      text: "",
    },
    {
      hour: "4pm",
      line: 4,
      text: "",
    },

  ];

  $(document).ready(function(){
    function dailyPlanner() {
      for (let i = 0; i < dailyPlanner.length; i++) {
        let row = $("line");
        row.addClass("text");
  
        let div = $("hour");
        div.addClass("textarea");
        div.text(dailyPlanner[i].text);
        
  
        button.addEventListener("click", function() {
          localStorage.setItem(dailyPlanner[i].text, dailyPlanner[i].line)
        })
   
      }
    }
  });

  {
//creates time and date functions
    function displayDate() {
      var currentTime = dayjs().format("MMMM DD, YYYY [at] h:mm:ss a");
      $("#currentDay").text(currentTime);
    }
    displayDate();
    setInterval(displayDate, 1000);

    function save(event) {
      let hour = event.target.getAttribute("data-hour");
      let input = $(`textarea[data-hour="${hour}"]`);
      console.log(event);
      console.log(hour);
      console.log(input.val());
      console.log(dailyPlanner);
      localStorage.setItem(hour, input.val());
      dailyPlanner.forEach((time) => {
        console.log(localStorage.getItem(time.line));
      });
      
      
    }

  }

  //local storage functions
 


  // createSchedule();

  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


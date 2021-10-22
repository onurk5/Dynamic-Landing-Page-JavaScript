//dom elements
const time = document.getElementById('time')
const  greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus');

//show time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
   )}`;

    setTimeout(showTime, 1000);
}

// Add Zeros 
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set Background and greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        //mornıng
       
        greeting.textContent = 'good morning';
    } else if(hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('images.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        //document.body.style.backgroundImage = "url('images.jpeg')";
         greeting.textContent = 'good afternoon';
    } else {
        //Evening
        greeting.textContent = 'good Evening';
        document.body.style.color = 'white';
    }
 }

 // Get Name
 function getName() {
     if (localStorage.getItem('name') === null) {
         name.textContent = '[enter Name]';
     } else {
         name.textContent = localStorage.getItem('name');
     }
 }

 //set Name
  function setName(e) {
      if(e.type === 'keypress') {
       // Make sure enter is pressed
      if(e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('name', e.target.innerText);
          name.blur();
      }

      } else {
          localStorage.setItem('name', e.target.innerText)
      }
  }

 // get Focus
 function getFocus() {
     if (localStorage.getItem('focus') === null) {
         focus.textContent = '[Enter focus]';
     } else {
         focus.textContent = localStorage.getItem('focus');
     }
  }
   //set focus
  function setFocus(e) {
    if(e.type === 'keypress') {
     // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
    }

    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

   name.addEventListener('keypress', setName);
   name.addEventListener('blur', setName);
   focus.addEventListener('keypress', setFocus);
   focus.addEventListener('blur', setFocus);

 // Run 
 showTime();
setBgGreet();
getName();
getFocus();

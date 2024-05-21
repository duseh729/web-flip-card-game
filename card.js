const flipObjs = document.querySelectorAll(".flip");
const frontObjs = document.querySelectorAll(".front");

let first = null;

let timeElapsed = 0;
let timerInterval;
var cnt=0;

if (!timerInterval) {
    timerInterval = setInterval(() => {
      timeElapsed += 1;
      document.getElementById("timer").textContent = timeElapsed;
    }, 1000); // 1000ms는 1초를 의미합니다.
    
}

flipObjs.forEach(flipObj => {
  flipObj.addEventListener("click", e => {
    // console.log("뒤집히기 전");
    e.currentTarget.classList.add("flip-event");
    // console.log("뒤집히기 후");
    if (first != null && first.id == e.currentTarget.id) {
      console.log("맞음");
      cnt++
      first.classList.add("currect");
      e.currentTarget.classList.add("currect");
      first = null;
      
      if(cnt==8){
        setTimeout(() => {
          alert(timeElapsed+"초 걸림")
          console.log(timeElapsed+"초 걸림")
          clearInterval(timerInterval);
          timerInterval = null;
        }, 400);
        
      }
      return;
    } else if (first == null) {
      first = e.currentTarget;
      first.classList.add("clicked")
    } else {
      // sleep(400);
      console.log("틀림");
      first.classList.remove('clicked')
      first = null;
      setTimeout(() => {
        const flipedCard = document.querySelectorAll(".flip-event");
        flipedCard.forEach(item => {
          // console.log(item.classList.value)
          if (item.classList.value.includes("currect")) {
          } else {
            item.classList.remove("flip-event");
          }
        });
      }, 400);
    }
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.parentNode.id);
  });
});
const flipObjs = document.querySelectorAll(".flip");
const frontObjs = document.querySelectorAll(".front");

let first = null;
// let second

flipObjs.forEach(flipObj => {
  flipObj.addEventListener("click", e => {
    // console.log("뒤집히기 전");
    e.currentTarget.classList.add("flip-event");
    // console.log("뒤집히기 후");
    if (first != null && first.id == e.currentTarget.id) {
      console.log("맞음");
      first.classList.add("currect");
      e.currentTarget.classList.add("currect");
      first = null;
      return;
    } else if (first == null) {
      first = e.currentTarget;
    } else {
      // sleep(400);
      console.log("틀림");
      first = null;
      setTimeout(() => {
        const flipedCard = document.querySelectorAll(".flip-event");
        flipedCard.forEach(item => {
          console.log(item.classList.value)
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

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

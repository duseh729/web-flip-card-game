const flipObjs = document.querySelectorAll(".flip");
const frontObjs = document.querySelectorAll(".front");

let first = null;
// let second

flipObjs.forEach(flipObj => {
  flipObj.addEventListener("click", e => {
    e.currentTarget.classList.add("flip-event");
    if (first != null && first.id == e.currentTarget.id) {
      console.log("맞음")
      first = null
      return
    } else if (first == null) {
      first = e.currentTarget;
    }else{
      console.log("틀림")
      first.classList.remove("flip-event")
      e.currentTarget.classList.remove("flip-event")
      first=null
    }
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.parentNode.id);
  });
});
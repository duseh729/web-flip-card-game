const flipObjs = document.querySelectorAll('.flip')
const frontObjs = document.querySelectorAll('.front')

flipObjs.forEach((flipObj)=>{
  flipObj.addEventListener('click', (e)=>{
    // e.preventDefault()
    console.log(e.currentTarget)
    e.currentTarget.classList.add('flip-event')
  })
})
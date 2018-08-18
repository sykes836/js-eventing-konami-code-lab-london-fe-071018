const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0
function init() {
  // Write your JavaScript code inside the init() function
  
 function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)
     if (key === konamiCode[index]) {
      index++
       if (index === konamiCode.length) {
        alert("Hurray!")
        index = 0
      }
    } else {
      index = 0
    }
  }
  const main = document.querySelector('body');
  main.addEventListener('keydown', onKeyDownHandler)
}
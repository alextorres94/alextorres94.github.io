(function cursorAnimation() {
let cursor = document.getElementById('cursor')  
  setTimeout(function(){ 
    if (cursor.style.visibility === "visible") {
      cursor.style.visibility = "hidden";
    } else {
        cursor.style.visibility = "visible";
    }
    cursorAnimation()
    }, 500);
})();
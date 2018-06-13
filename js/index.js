(function cursorAnimation() {
  let cursor = document.getElementById('cursor');
  setTimeout(function(){
    if (cursor.style.visibility === "visible") {
      cursor.style.visibility = "hidden";
    } else {
        cursor.style.visibility = "visible";
    }
    cursorAnimation()
    }, 500);
})();
let awesomeText = document.getElementById("awesomeText");
let emoji = '';
let text = 'Hey, I\'m Alex Torres ';
let num = 0;
var refreshIntervalId = setInterval(function write(){
  num += 1;
  awesomeText.innerHTML = text.slice(0,num) + emoji
  if(num === 21) {
    emoji = '👋🏼';
  };
  if(num === 22){
    clearInterval(refreshIntervalId)
  }
},200)
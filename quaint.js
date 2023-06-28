type="text/javascript"
const sound = new Audio();
audio.src = "./MLG.mp3";






pic.addEventListener('mouseover', function() {
    [].forEach.call(audios, function(audio) {
      // do whatever
      sound.play();
    });
    }, false);
    
    pic.addEventListener('mouseleave', function() {
      sound.pause();
      sound.currentTime = 0;
    }, false);
    

    
const spanElement = document.getElementById("gregHouse");
function handleHoverEvent() {
    alert("We have temporarily halted the GREG's House program. Sorry for any inconveniences caused.");
  spanElement.classList.add('hovered');
  spanElement.removeEventListener('mouseenter', handleHoverEvent);
}

// Add the event listener to the <span> element
spanElement.addEventListener('mouseenter', handleHoverEvent);
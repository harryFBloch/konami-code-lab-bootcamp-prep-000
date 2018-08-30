const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var index = 0;


function init() {
  document.body.addEventListener("keypress", function(event) {
    checkIfEventIsCorrect(event);
});
}

function checkIfEventIsCorrect(event){
  if(event.key === codes[index]){
    if (index === codes.length - 1){
      alert("You Found Me");
    }else{
      index++;
    }
  }else{
    index = 0;
  }
}

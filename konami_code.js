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
    console.log("trigger")
    checkIfEventIsCorrect(event);
});
}

function checkIfEventIsCorrect(event){
  console.log(event.key)
  if(event === codes[index]){
    if (index === codes.length - 1){
      alert("You Found Me");
    }else{
      index++;
    }
  }else{
    index = 0;
  }
}

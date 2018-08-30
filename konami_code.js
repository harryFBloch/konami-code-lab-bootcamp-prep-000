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

  var body = document.getElementsByTagName("body")[0];
  for (let i = 0; i < codes.length; i++){
    addListener(codes[i], body)
    //addListener('click', body)
  }
}

function addListener(eventType, node){
  console.log(node.events)
  node.addEventListener(eventType, function(event) {
    console.log("trigger")
    checkIfEventIsCorrect(event);
});
}

function checkIfEventIsCorrect(event){
  console.log(event)
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

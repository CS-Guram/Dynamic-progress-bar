//alert("Hello world") ;

var fruit = [
    {name:"Apple", quantity:20, color:"red"},
    {name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
    {name:"Kiwi", quantity:5, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:10, color:"purple"}
  ];
  
  function drawProgressBar(canvasId, progress, color, name, quantity) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  
      // Draw the progress bar
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, progress * canvas.width / 100, canvas.height);

      // Add text to the canvas
    ctx.fillStyle = "black";
    ctx.font = "bold 16px Arial";
    ctx.fillText(name, 10, 20);
    ctx.fillText(quantity, canvas.width - 60, 20);
  }

  function updateFruitBar() {
    fruit.forEach(function(item) {
      var input = document.getElementById(item.name.toLowerCase() + "Input").value;
      drawProgressBar(item.name.toLowerCase() + "Bar", input, item.color, item.name, input);
      item.quantity = input; // update the quantity in the fruit array
    });
  }
  
  // Draw initial fruit bars
  fruit.forEach(function(item) {
    drawProgressBar(item.name.toLowerCase() + "Bar", item.quantity, item.color, item.name, item.quantity);
    document.getElementById(item.name.toLowerCase() + "Input").value = item.quantity;
  });
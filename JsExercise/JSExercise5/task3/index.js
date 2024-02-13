var colors = [
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
  ];


function showAlert() {
    alert('Welcome! Click OK to start.');
    document.getElementById('box1').innerHTML = 'Click Me First';
    setInterval(changeColorBox2, 3000); 
  }


  function changeColorBox2() {
    var box2 = document.getElementById('box2');
    var currentColorIndex = getRandomColorIndex();
    box2.style.backgroundColor = colors[currentColorIndex];
  }

 
  function showErrorMessage() {
    document.getElementById('box3').innerHTML = 'Oops something wrong?';
    setInterval(changeColorBox4, 5000); 
  }


  function changeColorBox4() {
    var box4 = document.getElementById('box4');
    var currentColorIndex = getRandomColorIndex();
    box4.style.backgroundColor = colors[currentColorIndex];
   


    document.onkeydown = function (e) {
        if (e.keyCode == 38 || e.keyCode == 39) {
          currentColorIndex = (currentColorIndex + 1) % colors.length;
        } else if (e.keyCode == 37 || e.keyCode == 40) {
          currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
        }
        box4.style.backgroundColor = colors[currentColorIndex];
      };
  }
 

  function getRandomColorIndex() {
    return Math.floor(Math.random() * colors.length);
  }

 
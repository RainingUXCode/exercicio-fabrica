const colorList = {
  'btn1':'#BFB2DC',
  'btn2':'#79DDB9',
  'btn3':'#F3F19D',
  'btn4':'#84CBEA',
  'btn5':'#FAA4B8',
  'btn6':'#1E68A5',
  'btn7':'#DD5885'
}

const body = document.querySelector('body');

function handleColor(e) {
  const pressedButton = e.target.classList[0];
  body.style.backgroundColor = colorList[pressedButton]
}
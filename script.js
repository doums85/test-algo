/*====== let colis = '400 60 70 150';

let data = colis.split(' ');

function solve(width, height, length, mass) {
  //cm3
  let calc = width * height * length;
  let dimension = [width, height, length];

  dimension.map((el) => {
    // Case 1: Special
    if (calc > 1000000 || el >= 150) {
      // Case 2: Refected
      if (mass >= 20) return console.log('Refected');
      return console.log('Special');
    }
    if (mass >= 20) return console.log('Special');
    // case 3: Normal
    return console.log('Standard');
  });
}


solve(data[0], data[1], data[2], data[3]); =======*/

const query = (id) => document.querySelector(id).value;

function solve() {
  let width = query('#width');
  let height = query('#height');
  let length = query('#length');
  let mass = query('#mass');

  let result = document.querySelector('#tas');
  let inputs = document.getElementsByTagName('input');

  for (i = 0; i < inputs.length; ++i) {
    if (isNaN(inputs[i].value) || inputs[i].value < 1 || !inputs[i].value)
      return alert("You've to enter a number");
  }

  //cm3
  let calc = width * height * length;

  let dimension = [width, height, length];

  dimension.map((el) => {
    // Case 1: Special
    if (calc > 1000000 || el >= 150) {
      // Case 2: Refected
      if (mass >= 20) {
        result.style.color = 'red';
        return (result.innerHTML = 'Refected');
      } else {
        result.style.color = 'orange';
        return (result.innerHTML = 'Special');
      }
    }
    if (mass >= 20) {
      result.style.color = 'orange';
      return (result.innerHTML = 'Special')
    };
    // case 3: Normal
    return (result.innerHTML = 'Standard');
  });
}
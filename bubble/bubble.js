function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let CNV = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let in_use1 = 0;
let in_use2 = 0;
let in_use3 = 0;

const flipArr = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * -1;
  }
};

const bubbleSort = (arr) => {
  flipArr(arr);
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        in_use1 = arr[j];
        in_use2 = arr[j + 1];
        in_use3 = arr[j - 1];
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flipArr(arr);
        return true;
      }
    }
  }
  flipArr(arr);
  return false;
};

// const logArr = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * -1);
//   }
// };

const array = [...new Array(150)].map(() => Math.random() * (1600 - 2) + 2);
console.log(array);
flipArr(array);

function draw() {
  rotate();
  background("#393d3f");
  translate(width / 9, height / 1.1);
  stroke("white");
  text("Bubble Sort");
  noFill();
  strokeWeight(4);

  if (!bubbleSort(array)) {
    noLoop();
    console.log(array);
    // logArr(array);
  }
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] == in_use1 ||
      array[i] == in_use2 ||
      array[i] == in_use1 * -1 ||
      array[i] == in_use2 * -1 ||
      array[i] == in_use3 ||
      array[i] == in_use3 * -1
    ) {
      if (array[i] == in_use1 || array[i] == in_use1 * -1) {
        in_use1 = 0;
      } else if (array[i] == in_use2 || array[i] == in_use2 * -1) {
        in_use2 = 0;
      } else {
        in_use3 = 0;
      }
      push();
      stroke(
        color(
          Math.floor(Math.random() * (255 - 0 + 1) + 0),
          Math.floor(Math.random() * (255 - 0 + 1) + 0),
          Math.floor(Math.random() * (255 - 0 + 1) + 0)
        )
      );
      line(i * 10, 31, i * 10, array[i] * 0.5, array[i] * 20, 45);
      pop();
    } else {
      push();
      stroke(color("#7785ac"));
      line(i * 10, 31, i * 10, array[i] * 0.5, array[i] * 20, 45);
      pop();
    }
  }
}

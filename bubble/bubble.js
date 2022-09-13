function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let CNV = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

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

const array = [...new Array(21)].map(() => Math.round(Math.random() * 20));
console.log(array);
flipArr(array);

function draw() {
  rotate();
  background("black");
  translate(width / 5, height / 1.5);
  stroke("white");
  text("Bubble Sort");
  noFill();
  strokeWeight(4);

  if (!bubbleSort(array)) {
    noLoop();
    console.log(array);
    // logArr(array);
  }
  for (let i = 0; i < 20; i++) {
    push();
    stroke(
      color(
        Math.floor(Math.random() * (255 - 0 + 1) + 0),
        Math.floor(Math.random() * (255 - 0 + 1) + 0),
        Math.floor(Math.random() * (255 - 0 + 1) + 0)
      )
    );
    line(i * 50, 31, i * 50, array[i] * 20, array[i] * 20, 45);
    pop();
  }
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let CNV = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const flipArr = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * -1;
  }
};

const array = [...new Array(150)].map(() => Math.random() * (1600 - 2) + 2);
console.log(array);
flipArr(array);

let times = 0;
let in_use = [];

const insertionSort = (arr, t = 0) => {
  flipArr(arr);
  for (let i = t; i < arr.length; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      in_use.push(arr[j + 1] * -1);
      in_use.push(arr[j] * -1);
      in_use.push(arr[j + 1]);
      in_use.push(arr[j] * -1);
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
    times += 1;
    flipArr(arr);
    return true;
  }
  flipArr(arr);
  return false;
};

function draw() {
  rotate();
  background("#393d3f");
  translate(width / 9, height / 1.1);
  stroke("white");
  noFill();
  strokeWeight(4);

  if (!insertionSort(array, times)) {
    in_use = [];

    for (let i = 0; i < array.length; i++) {
      push();
      stroke(color("#7785ac"));
      line(i * 10, 31, i * 10, array[i] * 0.5, array[i] * 20, 45);
      pop();
    }

    noLoop();
    console.log(array);
    // logArr(array);
  }
  for (let i = 0; i < array.length; i++) {
    if (in_use.includes(array[i])) {
      in_use.shift(array[i]);
      in_use.shift(array[i] * -1);
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

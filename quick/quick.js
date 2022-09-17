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

let array = [...new Array(150)].map(() => Math.random() * (1600 - 2) + 2);
let old_arr = [];
console.log(array);
flipArr(array);
let in_use = [];
const left_arr = [];
const equal_arr = [];
const right_arr = [];

const ifSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

function quickSort(arr) {
  if (arr.length < 2) {
    return false;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
      in_use.push(val);
      in_use.push(val * -1);
    } else if (val > pivot) {
      right.push(val);
      in_use.push(val);
      in_use.push(val * -1);
    } else {
      equal.push(val);
    }
  }
  left_arr.push(left);
  equal_arr.push(equal);
  right_arr.push(right);

  //   return [...quickSort(right), ...equal, ...quickSort(left)];
  return true;
}
quickSort(array);

async function draw() {
  rotate();
  background("#393d3f");
  translate(width / 9, height / 1.1);
  stroke("white");
  noFill();
  strokeWeight(4);
  old_arr = [];
  for (let i = 0; i < array.length; i++) {
    old_arr.push(array[i]);
  }
  quickSort([
    ...left_arr[left_arr.length - 1],
    ...equal_arr[equal_arr.length - 1],
    ...right_arr[right_arr.length - 1],
  ]);

  array = [
    ...left_arr[left_arr.length - 1],
    ...equal_arr[equal_arr.length - 1],
    ...right_arr[right_arr.length - 1],
  ];

  for (let i = 0; i < array.length; i++) {
    if (in_use.includes(array[i]) && array[i] !== old_arr[i]) {
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
  in_use = [];
  if (ifSorted(array)) {
    for (i = 0; i < array.length; i++) {
      push();
      stroke(color("#7785ac"));
      line(i * 10, 31, i * 10, array[i] * 0.5, array[i] * 20, 45);
      pop();
    }
    noLoop();
    console.log("Array Sorted Successfully");
  }
}

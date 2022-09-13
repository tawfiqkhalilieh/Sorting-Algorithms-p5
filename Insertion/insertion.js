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

let times = 0;
const insertionSort = (arr, t = 0) => {
  flipArr(arr);
  for (let i = t; i < arr.length; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
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

// const logArr = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * -1);
//   }
// };

const array = [...new Array(200)].map(() => Math.round(Math.random() * 20));

// const array = [];
// for (let i = 0; i < 20; i++) {
//   array.push(20 - i);
// }

console.log(array);
flipArr(array);

function draw() {
  rotate();
  background("black");
  translate(width / 200, height / 1.5);
  stroke("white");
  noFill();
  strokeWeight(4);

  if (!insertionSort(array, times)) {
    noLoop();
    console.log(array);
    // logArr(array);
  }
  for (let i = 0; i < array.length; i++) {
    push();
    stroke(
      color(
        Math.floor(Math.random() * (255 - 0 + 1) + 0),
        Math.floor(Math.random() * (255 - 0 + 1) + 0),
        Math.floor(Math.random() * (255 - 0 + 1) + 0)
      )
    );
    line(i * 10, 31, i * 10, array[i] * 20, array[i] * 20, 45);
    pop();
  }
}

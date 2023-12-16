const basePath = "../img/hair/";
const images = [
  "face", // 1
  "color", // 2
  "front_bang_left", // 3
  "front_bang_right", // 4
  "front_bang_right2", // 5
  "left_bang", // 6
  "left_small_bang2", // 7
  "left_small_bang3", // 8
  "middle_front_bang", // 9
  "small_right_bang", // 10
  "upper_right_bang", // 11
];
const classes = [
  "class1",
  "class2",
  "class3",
  "class4",
  "class5",
  "class6",
  "class7",
  "class8",
  "class9",
  "class10",
  "class11"
];

let html = '';

images.forEach((image, index) => {
  html += `<img class="w-96 absolute top-0 left-0 ${classes[index]}" src="${basePath}${image}.png" alt="Description of the image">\n`;
});

document.getElementById('imageContainer').innerHTML = html;
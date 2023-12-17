const basePath = "../img/hair/";
const images = [

  "1",
  "2",
  "tshirt",
  "10",
  "11",
  "12",
  "3",
  "5",
  "4",
  "6",
  "8",
  "7",
  "9",
  
];
const classes = [
  
  "class1",
  "class2",
  "tshirt border-solid border-2 border-sky-500",
  "class10",
  "class11",
  "class12",
  "class3",
  "class5",
  "class4",
  "class6",
  "class8",
  "class7",
  "class9",
 
];

let html = '';

images.forEach((image, index) => {
  html += `<img class="rounded-3xl w-auto absolute top-0 left-0 ${classes[index]}" src="${basePath}${image}.PNG" alt="Description of the image" loading="lazy">\n`;
});

document.getElementById('imageContainer').innerHTML = html;
let layer1 = document.querySelector("div.layer1");
let layer2 = document.querySelector("div.layer2");
let button = document.querySelector("button");
let slideLight = document.getElementById('slideLight');
let slide = document.getElementById('slide');
let sliderAmount = document.getElementById("sliderAmount");
let sliderAmount2 = document.getElementById("sliderAmount2");

slide.onmousemove = function() {
  sliderAmount.innerHTML = this.value;
}

slideLight.onmousemove = function() {
  sliderAmount2.innerHTML = this.value;
}

function makeColor() {
  let h = Math.random() * 360;
  let s = parseInt(slide.value);
  let l =  parseInt(slideLight.value);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function makeGradient() {
  let c1 = makeColor();
  let c2 = makeColor();
  let angle = Math.random() * 360;
  return `linear-gradient(${angle}deg, ${c1}, ${c2})`;
}

function changeBg() {
    layer1.style.backgroundImage = makeGradient();
    layer2.style.backgroundImage = makeGradient();
}

changeBg();

button.addEventListener("click", function() {
  changeBg();
})

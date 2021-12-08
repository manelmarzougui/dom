let like = document.getElementById("like1");
console.log(like);

like.addEventListener("click", function () {
  if (like.style.color == "black") {
    like.style.color = "red";
  } else {
    like.style.color = "black";
  }
});

let min = document.getElementById("min1");

min.addEventListener("click", function () {
  let inp1 = document.getElementById("in1");
  if (inp1.value > 0) {
    inp1.value--;
  }
  totalprice();
});

let max = document.getElementById("max1");

max.addEventListener("click", function () {
  let inp1 = document.getElementById("in1");
  inp1.value++;
});

let like2 = document.getElementById("like2");
console.log(like);

like2.addEventListener("click", function () {
  if (like2.style.color == "black") {
    like2.style.color = "red";
  } else {
    like2.style.color = "black";
  }
});

let min2 = document.getElementById("min2");

min2.addEventListener("click", function () {
  let inp2 = document.getElementById("in2");
  if (inp2.value > 0) {
    inp2.value--;
  }
  totalprice();
});

let max2 = document.getElementById("max2");

max2.addEventListener("click", function () {
  let inp2 = document.getElementById("in2");
  inp2.value++;
  totalprice();
});

let like3 = document.getElementById("like3");
console.log(like);

like3.addEventListener("click", function () {
  if (like3.style.color == "black") {
    like3.style.color = "red";
  } else {
    like3.style.color = "black";
  }
});

let min3 = document.getElementById("min3");

min3.addEventListener("click", function () {
  let inp3 = document.getElementById("in3");
  if (inp3.value > 0) {
    inp3.value--;
  }
  totalprice();
});

let max3 = document.getElementById("max3");

max3.addEventListener("click", function () {
  let inp3 = document.getElementById("in3");
  inp3.value++;
  totalprice();
});

let close = document.getElementById("close");
close.addEventListener("click", function () {
  var elem = document.getElementById("myitem");
  elem.remove();
});

let close2 = document.getElementById("close2");
close2.addEventListener("click", function () {
  var elem = document.getElementById("myitem2");
  elem.remove();
});

let close3 = document.getElementById("close3");
close3.addEventListener("click", function () {
  var elem = document.getElementById("myitem3");
  elem.remove();
});
function totalprice() {
  let price = document.getElementById("prix1");
  let inp1 = document.getElementById("in1");
  let price2 = document.getElementById("prix2");
  let inp2 = document.getElementById("in2");
  let price3 = document.getElementById("prix3");
  let inp3 = document.getElementById("in3");
  var sum =
    inp1.value * price.innerHTML +
    inp2.value * price2.innerHTML +
    inp3.value * price3.innerHTML;

  let totalprice = document.getElementById("total");
  finalPrice.value = sum;
}

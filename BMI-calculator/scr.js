let button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.querySelector(".results").innerHTML = "⚠️ Enter valid values!";
    return;
  }

  height = height / 100; // cm -> m
  let bmi = (weight / Math.pow(height, 2)).toFixed(2);

  let res = document.querySelector(".results");
  res.innerHTML = `Your BMI is <b>${bmi}</b>`;
  res.style.fontSize = "30px";
});

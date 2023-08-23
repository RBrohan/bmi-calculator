const weightCondition = document.getElementById("weight-condition");
const bmiResult = document.getElementById("bmi-result");

const computeButton = document.querySelector(".btn");

const computeBMI = () => {
  const heightValue = document.getElementById("height-input").value / 100;
  const weightValue = document.getElementById("weight-input").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiResult.value = bmiValue;

  if (bmiValue < 18.5) {
    weightCondition.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerText = "Normal weight";
  }
  console.log(weightCondition);
};

computeButton.addEventListener("click", computeBMI);

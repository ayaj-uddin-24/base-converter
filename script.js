function convertBase() {
  const inputNumber = document.getElementById("inputNumber").value.trim();
  const fromBase = parseInt(document.getElementById("fromBase").value);
  const toBase = parseInt(document.getElementById("toBase").value);
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";
  resultDiv.className = "result";

  if (!inputNumber) {
    showError("Please enter a number");
    return;
  }

  try {
    const decimalValue = parseInt(inputNumber, fromBase);

    if (isNaN(decimalValue)) {
      showError("Invalid number for the selected base");
      return;
    }

    let result = decimalValue.toString(toBase).toUpperCase();

    resultDiv.innerHTML = `
            <strong>Result:</strong> ${result}
            <br><small>Decimal equivalent: ${decimalValue}</small>
        `;
    resultDiv.className = "result success";
  } catch (error) {
    showError("Conversion error. Please check your input.");
  }
}

function showError(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<strong>Error:</strong> ${message}`;
  resultDiv.className = "result error";
}

function resetConverter() {
  document.getElementById("inputNumber").value = "";
  document.getElementById("fromBase").value = "10";
  document.getElementById("toBase").value = "2";
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").className = "result";
}

document
  .getElementById("inputNumber")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      convertBase();
    }
  });

const conversionFactors = {
  cm: {
    in: 0.3937,
    ft: 0.0328,
    yd: 0.0109,
    m: 0.01,
    mi: 0.000006214
  },
  in: {
    cm: 2.54,
    ft: 0.0833,
    yd: 0.0278,
    m: 0.0254,
    mi: 0.0000158,
  },
  ft: {
    cm: 30.48,
    in: 12,
    yd: 0.3333,
    m: 0.3048,
    mi: 0.0001894,
  },
  yd: {
    cm: 91.44,
    in: 36,
    ft: 3,
    m: 0.9144,
    mi: 0.0005682,
  },
  m: {
    cm: 100,
    in: 39.37,
    ft: 3.2808,
    yd: 1.0936,
    mi: 0.0006214,
  },
  mi: {
    cm: 160934.4,
    in: 63360,
    ft: 5280,
    yd: 1760,
    m: 1609.344,
  },
};

function getResponse() {
  let fromUnitDrop = document.getElementById("fromUnit");
  let fromUnit = fromUnitDrop.value;

  let toUnitDrop = document.getElementById("toUnit");
  let toUnit = toUnitDrop.value;

  let inputValue = document.getElementById("input").value;
  let outputElement = document.getElementById("output");

  if (fromUnit && toUnit && !isNaN(inputValue)) {
    if (fromUnit in conversionFactors && toUnit in conversionFactors[fromUnit]) {
      let conversionFactor = conversionFactors[fromUnit][toUnit];
      let convertedValue = inputValue * conversionFactor;
      outputElement.textContent = convertedValue + " " + toUnit;
    } else {
      outputElement.textContent = "Invalid units selected.";
    }
  } else {
    outputElement.textContent = "Please select units and enter a valid input.";
  }
}

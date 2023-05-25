function convertToBinary(number) {
    return number.toString(2);
  }

  function convertToOctal(number) {
    return number.toString(8);
  }

  function convertToDecimal(number) {
    return Number(number);
  }

  function convertToHexadecimal(number) {
    return number.toString(16).toUpperCase();
  }

  function calculateConversion() {
    const number = document.getElementById("number").value;
    const fromBase = parseInt(document.getElementById("fromBase").value);
    const toBase = parseInt(document.getElementById("toBase").value);

    let decimalNumber;

    if (fromBase === 2) {
      decimalNumber = parseInt(number, 2);
    } else if (fromBase === 8) {
      decimalNumber = parseInt(number, 8);
    } else if (fromBase === 10) {
      decimalNumber = Number(number);
    } else if (fromBase === 16) {
      decimalNumber = parseInt(number, 16);
    } else {
      console.log("Invalid base");
      document.getElementById("result").innerText = "Invalid base";
      return;
    }

    let result;
    
    if (toBase === 2) {
      result = convertToBinary(decimalNumber);
    } else if (toBase === 8) {
      result = convertToOctal(decimalNumber);
    } else if (toBase === 10) {
      result = convertToDecimal(decimalNumber);
    } else if (toBase === 16) {
      result = convertToHexadecimal(decimalNumber);
    } else {
      console.log("Invalid base");
      document.getElementById("result").innerText = "Invalid base";
      return;
    }

    document.getElementById("result").innerText = result;
  }
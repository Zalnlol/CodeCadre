function BMI(w, h) {
    let bmi = 1;
    bmi = parseFloat(w) / (parseFloat(h) * parseFloat(h));
    return bmi.toFixed(2);
  }

  function getBmiId(BMI) {
    let bmiId = 1;
    if (BMI < 18.5) {
      bmiId = 1;
    }
    else
      if (BMI < 25) {
        bmiId = 2;
      }
      else
        if (BMI < 30) {
          bmiId = 3;
        }
        else {
          bmiId = 4;
        }
    return bmiId;

  }

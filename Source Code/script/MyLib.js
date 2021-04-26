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

  function ConvertAge(){
    
    switch (sessionStorage.getItem("ageID")){
      case "1": return "(from 13 to 19)"; break;
      case "2": return "(from 20 to 60)"; break;
      case "3": return "(from 60 or Older)" ;break;
    }

  }

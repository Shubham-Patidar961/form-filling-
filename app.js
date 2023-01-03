function calculate() {
  // -- decration of variables --//
  var a = parseInt(document.querySelector("#computer").value);
  var b = parseInt(document.querySelector("#english").value);
  var c = parseInt(document.querySelector("#physices").value);
  var d = parseInt(document.querySelector("#chemestry").value);
  var e = parseInt(document.querySelector("#math").value);
  var obtanimarks = document.querySelector("#onbtainmarks");
  var remark = document.querySelector("#remarks");
  var grede = document.querySelector("#grede");
  var parcentge = document.querySelector("#prcentage");
  // -- end of variable declaration--//
  var sum = a + b + c + d + e;
  if (
    a < 0 ||
    a > 100 ||
    b < 0 ||
    b > 100 ||
    c < 0 ||
    c > 100 ||
    d < 0 ||
    d > 100 ||
    e < 0 ||
    e > 100
  ) {
    alert("plese return a valid input");
  } else {
    // -- sum calculation --//
    obtanimarks.innerHTML = sum;
    // -- prcentage calculter --//
    var prcentage = Number((sum / 500) * 100);
    parcentge.innerHTML = prcentage;
    // -- grde -- //
    if (prcentage >= 0 && prcentage <= 33) {
      grede.innerHTML = "C";
    }
    if (prcentage >= 34 && prcentage <= 75) {
      grede.innerHTML = "B";
    }
    if (prcentage >= 76 && prcentage <= 100) {
      grede.innerHTML = "A";
    }
  }
  // --remarks --//
  if (prcentage >= 0 && prcentage < 33) {
    remark.innerHTML = "FAIL";
  } else {
    remark.innerHTML = "PASS";
  }
}

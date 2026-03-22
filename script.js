let opr = "";
let same = document.querySelectorAll(".same");
let res = document.querySelector("#res");
let clear = document.querySelector("#clear");
let ans = 0;
let flag = 0;
let z = 0;
opr = localStorage.getItem("perf");
res.innerText = localStorage.getItem("ans");
flag = localStorage.getItem("curr");
clear.addEventListener("click", () => {
  res.innerText = `${0}`;
  opr = "";
  flag = 0;
  z = 0;
  ans = 0;
  localStorage.setItem("curr", `${0}`);
  localStorage.setItem("perf", "");
  localStorage.setItem("ans", `${0}`);
});

function operation(op, a, b) {
  if (op == "+") return a + b;
  if (op == "-") return b - a;
  if (op == "*") return a * b;

  return b / a;
}
same[0].addEventListener("click", () => {
  let y = parseInt(same[0].innerText);
  let temp = ans;
  if (flag == 1) {
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }
  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  res.innerText = `${ans}`;
});

same[1].addEventListener("click", () => {
  let y = parseInt(same[1].innerText);
  let temp = ans;
  if (flag == 1) {
    console.log(temp + "alag " + opr + " " + z);
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }

  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  console.log(ans + " " + temp + " " + opr + " " + z + " " + y);
  res.innerText = `${ans}`;
});

same[2].addEventListener("click", () => {
  let y = parseInt(same[2].innerText);
  let temp = ans;
  if (flag == 1) {
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }
  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  res.innerText = `${ans}`;
});

same[3].addEventListener("click", () => {
  opr = "+";
  localStorage.setItem("perf", opr);
});

same[4].addEventListener("click", () => {
  let y = parseInt(same[4].innerText);
  let temp = ans;
  if (flag == 1) {
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }
  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  res.innerText = `${ans}`;
});
same[5].addEventListener("click", () => {
  let y = parseInt(same[5].innerText);
  let temp = ans;
  if (flag == 1) {
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }
  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  res.innerText = `${ans}`;
});

same[6].addEventListener("click", () => {
  let y = parseInt(same[6].innerText);
  let temp = ans;
  if (flag == 1) {
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
    console.log(temp + " f " + z + " " + opr);
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }
  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  res.innerText = `${ans}`;
});

same[7].addEventListener("click", () => {
  opr = "-";
  localStorage.setItem("perf", opr);
});

same[8].addEventListener("click", () => {
  let y = parseInt(same[8].innerText);
  let temp = ans;
  if (flag == 1) {
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }
  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  res.innerText = `${ans}`;
});

same[9].addEventListener("click", () => {
  let y = parseInt(same[9].innerText);
  let temp = ans;
  if (flag == 1) {
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }
  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  res.innerText = `${ans}`;
});

same[10].addEventListener("click", () => {
  let y = parseInt(same[10].innerText);
  let temp = ans;
  if (flag == 1) {
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }
  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  res.innerText = `${ans}`;
});

same[11].addEventListener("click", () => {
  opr = "*";
  localStorage.setItem("perf", opr);
});

same[12].addEventListener("click", () => {
  let y = parseInt(same[12].innerText);
  let temp = ans;
  if (flag == 1) {
    if (opr == "*") temp = operation("/", z, temp);
    if (opr == "-") temp = operation("+", z, temp);
    if (opr == "/") temp = operation("*", z, temp);
    if (opr == "+") temp = operation("-", z, temp);
    z = z * 10 + y;
    y = z;
  } else z = y;
  if (opr != "") {
    temp = operation(opr, z, temp);
    flag = 1;
    localStorage.setItem("curr", `${flag}`);
  } else {
    if (temp >= 0) temp = temp * 10 + z;
    else temp = temp * 10 - z;
  }
  ans = temp;
  localStorage.setItem("perf", opr);
  localStorage.setItem("ans", `${ans}`);
  res.innerText = `${ans}`;
});
same[14].addEventListener("click", () => {
  res.innerText = `${ans}`;
  flag = 0;
  z = 0;
  localStorage.setItem("perf", "");
  localStorage.setItem("ans", `${ans}`);
  localStorage.setItem("curr", `${0}`);
});
same[15].addEventListener("click", () => {
  opr = "/";
  localStorage.setItem("perf", opr);
});

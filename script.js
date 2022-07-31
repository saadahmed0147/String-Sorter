var s = prompt("Enter number...: ");

function sorter(s) {
  return s.split("").sort().join("");
}

alert(sorter(s));
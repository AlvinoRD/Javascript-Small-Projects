const names = [
  "Agung",
  "Alvino",
  "Azar",
  "Aji",
  "Acim",
  "Bagas",
  "Bayu",
  "Bimo",
  "Becca",
  "Babi",
  "Caca",
  "Cikha",
  "Cantika",
  "Cikal",
  "Cicha",
  "Dodi",
  "Dian",
  "Dhani",
  "Dika",
  "Dimas",
  "Erlin",
  "Edi",
  "Erna",
  "Erlin",
  "Edi",
  "Erna",
  "Fifa",
  "Fira",
  "Fendi",
  "Gunawan",
  "Zaka",
];

let output = "";
let prevFirstLetter = names[0][0];

names.forEach((name) => {
  const firstLetter = name[0];
  if (firstLetter !== prevFirstLetter) {
    output += `<li class="collection-header"></li><h5>` + firstLetter + "</h5>";
    prevFirstLetter = firstLetter;
  }
  output += `<li class="collection-item"><a href="#">${name}</a></li>`;
});

document.querySelector("#names").innerHTML += output;

let filterInput = document.getElementById("filterInput");
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  let ul = document.getElementById("names");
  let li = ul.querySelectorAll("li.collection-item");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "grey";
// judul.innerHTML = "<em>ALVRD</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "HelloWorld!";

// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.clientHeight; i++) {
//   p.style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "INI DIUBAH DARI JAVASCRIPT LOCH";

// const p4 = document.querySelector("#b p");
// p4.style.color = "green";

// const sectionB = document.querySelector("section#b");
// const p4 = sectionB.querySelector("p");
// p4.style.backgroundColor = "orange";

// const list2 = document.querySelector("section#b ul li:nth-child(2)");
// list2.style.fontSize = "30px";

// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// judul.setAttribute("class", "alvino");

// const a = document.querySelector("section#a p");

// ============================================================

// manipulasi node

// const pBaru = document.createElement("p");
// const teksBaru = document.createTextNode("paragraf baru");

// pBaru.appendChild(teksBaru);

// const sectionA = document.getElementById("a");

// sectionA.appendChild(pBaru);

// // ============================================================

// const liBaru = document.createElement("li");
// const teksLiBaru = document.createTextNode("item baru");

// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector("section#b ul");
// const li2 = ul.querySelector("li:nth-child(2)");

// ul.insertBefore(liBaru, li2);

// // ============================================================

// const pHapus = document.querySelector(".p1");

// sectionA.removeChild(pHapus);

// // ============================================================

// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");

// const h2Baru = document.createElement("h2");
// const teksH2Baru = document.createTextNode("Judul Baru!");

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);

// const p3 = document.querySelector(".p3");

// function ubahWarna() {
//   p3.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarna;

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teksLiBaru = document.createTextNode("item baru");
//   liBaru.appendChild(teksLiBaru);
//   ul.appendChild(liBaru);
// });

// // ============================================================

// const warnaUbah = document.getElementById("tubahWarna");

// warnaUbah.onclick = function () {
//   //   body.style.backgroundColor = "lightblue";
//   document.body.classList.toggle("biru-muda");
// };

// const acakWarna = document.createElement("button");
// const teksAcakWarna = document.createTextNode("Acak Warna");
// acakWarna.appendChild(teksAcakWarna);
// acakWarna.setAttribute("type", "button");
// warnaUbah.after(acakWarna);

// acakWarna.addEventListener("click", function () {
//   const r = Math.round(Math.random() * 255 + 1);
//   const g = Math.round(Math.random() * 255 + 1);
//   const b = Math.round(Math.random() * 255 + 1);
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// const sMerah = document.querySelector("input[name=sMerah]");
// const sHijau = document.querySelector("input[name=sHijau]");
// const sBiru = document.querySelector("input[name=sBiru]");

// sMerah.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
// });
// sHijau.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
// });
// sBiru.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
// });

// document.body.addEventListener("mousemove", function (event) {
//   const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//   const yPos = Math.round((event.clientY / window.innerWidth) * 255);
//   document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
// });

// const close = document.querySelectorAll(".close");

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//   });
// });

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});

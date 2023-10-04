// const mhs = ["Alvino", "Radyo", "Danisworo"];
// console.log(...mhs[0]);
// const dsn = ["bgs", "letoy", "orarkom"];
// const orang = [...mhs, "Eileen", ...dsn];
// console.log(orang);

//=======================================

// const mhs = ["Alvino", "Radyo", "Danisworo"];
// const mhs1 = [...mhs];
// mhs1[0] = "Hanip";
// console.log(mhs1);
// console.log(mhs);

//=======================================

// const liNama = document.querySelectorAll("li");
// const mhs = [];

// for (let i = 0; i < liNama.length; i++) {
//   mhs.push(liNama[i].textContent);
// }
// console.log(mhs);

//=======================================

const liNama = document.querySelector(".nama");
const huruf = [...liNama.textContent].map((h) => `<span>${h}</span>`).join("");
liNama.innerHTML = huruf;

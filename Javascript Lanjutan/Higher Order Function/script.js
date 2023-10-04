// function tugas(matKul, selesai) {
//   console.log(`Mulai mengerjakan tugas ${matKul}`);
//   selesai();
// }

// function selesai() {
//   alert(`Selesai mengerjakan tugas!`);
// }

// tugas("Bahasa Indonesia", selesai);

// //======================================

// function salam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}`);
//   };
// }

// let selamatMalam = salam("Malam");

// console.dir(selamatMalam("Alvino"));

// //======================================

// const range = (start, end) => {
//   const out = [];
//   for (let i = start; i <= end; i++) {
//     out.push(i);
//   }
//   return out;
// };

// const sum = (nums) =>
//   nums.reduce((prevValue, currValue) => prevValue + currValue, 0);

// console.log(sum(range(1, 4)));

//======================================

const angka = [2, -1, -7, 9, 4, -2, 8, 1];

const newAngka = angka
  .filter((a) => a >= 3)
  .map((a) => a * 2)
  .reduce((acc, cur) => acc + cur);
console.log(newAngka);

//======================================

const mhs = {
  nama: "Alvino",
  umur: "33",
  nrp: "A112214600",
  email: "alvino0327@gmail.com",
};

const el = `<div class = "mhs">
    <h1>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
    </div>`;

console.log(el);

// const mhs = ["Alvino", "Radyo", "Danisworo"];

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

//====================================

// const nama = "Alvino";
// for (const n of nama) {
//   console.log(n);
// }

//====================================

// const mhs = ["Alvino", "Radyo", "Danisworo"];

// mhs.forEach((m, i) => {
//   console.log(`${m} adalah siswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// //====================================

// const liNama = document.querySelectorAll(".nama");

// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// //====================================

// function jml() {
//   let jumlah = 0;
//   for (n of arguments) {
//     jumlah += n;
//   }
//   return jumlah;
// }

// console.log(jml(1, 2, 3, 4, 5));

//====================================

// For in digunakan untuk melakukan looping yang tidak countable seperti objek berisi huruf

const mhs = {
  nama: "Alvino",
  umur: 19,
  email: "Alvino0327@gmail.com",
};

for (n in mhs) {
  console.log(n.value);
}

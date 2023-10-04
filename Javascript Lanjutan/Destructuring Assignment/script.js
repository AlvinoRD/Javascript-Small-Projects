// const coba = ["alvino", "Radyo", "Danisworo"];

// const [a, b, c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

// //====================================

// // Objek

// const mhs = {
//   nama: "Alvino Radyo Danisworo",
//   umur: 19,
//   email: "Alvino0327@gmail.com",
// };

// const { nama, umur, email } = mhs;

// console.log(nama);
// console.log(umur);
// console.log(email);

// const perkenalan = ["My", "Name", "Is", "Alvino"];

// const [, dua, tiga, empat] = perkenalan;
// console.log(satu);

//====================================

// swap

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);

//====================================

// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// const c = coba();
// console.log(c);

//====================================

// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);

// //====================================

// const mhs = {
//   nama: "Alvino Radyo Danisworo",
//   umur: 19,
// };

// const { nama, umur } = mhs; // namanya harus sama kayak di objek
// console.log(nama);

//====================================

// objeknya ga dideklarasi

// ({ nama, umur } = {
//   nama: "Alvino",
//   umur: 19,
// });
// console.log(nama);

// assign ke variable baru

// const mhs = {
//   nama: "Alvino",
//   umur: 19,
// };

// const { nama: alv, umur: u } = mhs;
// console.log(u);

//====================================

// memberikan default value

// const mhs = {
//   nama: "Alvino",
//   umur: 19,
//   email: "Alvino03272@gmail.com",
// };

// const { nama: alv, umur: u, email: e = "email@default.com" } = mhs;
// console.log(u);
// console.log(e);

//====================================

// const mhs = {
//   id: 123,
//   nama: "Alvino",
//   umur: 19,
//   email: "Alvino03272@gmail.com",
// };

// function getIdMhs({ id }) {
//   return id;
// }

// console.log(getIdMhs(mhs));

//====================================

// function tk(a, b) {
//   return [a + b, a * b, a - b, a / b];
// }

// const j = tk(2, 3);
// console.log(j);

//====================================

function tk(a, b) {
  return {
    t: a + b,
    k: a * b,
    r: a - b,
    g: a / b,
  };
}

const { t, k, r, g } = tk(2, 3);
console.log(t);

//====================================

const mhs = {
  nama: "Alvino",
  umur: 19,
  email: "Alvino0327@gmail.com",
  nilai: {
    tugas: 100,
    uts: 100,
    uas: 100,
  },
};

function cetakMhs({ nama, umur, nilai }) {
  return `halo saya ${nama}, saya berumur ${umur}. saya adalah yang terpintar karena mendapatkan nilai ${nilai.tugas}`;
}

console.log(cetakMhs(mhs));

// function myFunc(a, b, ...myArgs) {
//   //   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// //=====================================

// function jml(...angka) {
//   //   let total = 0;
//   //   for (a of angka) {
//   //     total += a;
//   //   }
//   //   return total;

//   return angka.reduce((a, b) => a + b);
// }

// console.log(jml(1, 2, 3, 4, 5));

//=====================================

//array destructuring

// const kelompok1 = ["Alvino", "Radyo", "Danisworo"];
// const [ketua, ...anggota] = kelompok1;
// console.log(anggota);

//=====================================

//obj destructuring

// const team = {
//   ai: "Alvino",
//   fe1: "Agung",
//   fe2: "Siti",
//   be1: "Tia",
//   be2: "Sigung",
// };

// const { ai, ...myTeam } = team;
// console.log(myTeam);

//=====================================

function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("boolean", 1, 2, "Alvino", false, 10, true));

//============================================

// var nama = prompt("masukkan nama anda :");
// alert(nama);
// var tes = confirm("Apakah Kamu Yakin?");
// if (tes == true) {
//   alert("Orang Ini Pilih OK");
// } else {
//   alert("Orang Ini Pilih Cancel");
// }

//===========================================

// alert("Daftarkan Diri Anda Dulu Ya");
// var lagi = true;

// while (lagi) {
//   var nama = prompt("Isi nama anda : ");
//   alert("halo " + nama);

//   lagi = confirm("coba lagi?");
// }
// alert("Terima Kasih");

//============================================

// var ulang = true;

// while (ulang) {
//   console.log("Hello World");

//   ulang = confirm("Lagi?");
// }

// var nilai = 1;

// while (nilai <= 10) {
//   if (nilai <= 6 && nilai != 5) {
//     console.log("Angkot No. " + nilai + " Beroperasi Dengan Sangat Baik");
//   } else if (nilai == 8 || nilai == 10 || nilai == 5) {
//     console.log("Angkot No. " + nilai + " Beroperasi Dengan Sangat Tidak Baik");
//   } else {
//     console.log("Angkot No. " + nilai + " Sedang Lembur");
//   }
//   nilai++;
// }

//============================================

// var ulang = true;
// while (ulang) {
//   var angka = prompt("masukkan angka :");

//   if (angka % 2 == 0) {
//     alert(angka + " adalah genap");
//   } else if (angka & (2 == 1)) {
//     alert(angka + " adalah ganjil");
//   } else {
//     alert(angka + " bukanlah sebuah angka");
//   }
//   ulang = confirm("apakah anda mau tanya lagi?");
// }

//============================================

// var item = prompt(
//   "anda mau makanan apa nih? (sayur bayem, soto, sop, mie, burger, softdrink, tahu)"
// );

// switch (item) {
//   case "sayur bayem":
//     alert("sayur bayem adalah mam yang sehat");
//     break;
//   case "soto":
//     alert("soto adalah mam yang sehat");
//     break;
//   case "sop":
//     alert("sop adalah mam yang sehat");
//     break;
//   case "mie":
//     alert("mie adalah mam yang sehat");
//     break;
//   case "burger":
//     alert("burger adalah mam yang sehat");
//     break;
//   case "softdrink":
//     alert("softdrink adalah mam yang sehat");
//     break;
//   case "tahu":
//     alert("tahu adalah mam yang sehat");
//     break;
// }

//============================================

// var s = "";

// for (var i = 0; i < 5; i++) {
//   for (var k = 0; k < 5 - i; k++) {
//     s += " ";
//   }
//   for (var j = 0; j < 1 + 2 * i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }

// console.log(s);

// var x = "";

// for (var i = 0; i < 5; i++) {
//   for (var k = 0; k < 5 - i; k++) {
//     x += " ";
//   }
//   for (var j = 0; j <= i; j++) {
//     x += "*";
//   }
//   x += "\n";
// }

// console.log(x);

// var z = "";

// for (var i = 5; i >= 0; i--) {
//   for (var k = 0; k < 5 - i; k++) {
//     z += " ";
//   }
//   for (var j = 0; j < 1 + 2 * i; j++) {
//     z += "*";
//   }
//   z += "\n";
// }

// console.log(z);

//============================================

// var ulang = true;

// while (ulang) {
//   var p = prompt("Pilih Batu, Gunting, Kertas");

//   var comp = Math.random();

//   if (comp < 0.34) {
//     comp = "Batu";
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "Gunting";
//   } else {
//     comp = "Kertas";
//   }

//   var hasil = "";

//   if (p == comp) {
//     hasil = "Seri";
//   } else if (p == "Batu") {
//     hasil = (comp == "Gunting") ? "Menang" : "Kalah";
//   } else if (p == "Gunting") {
//     hasil = (comp == "Kertas") ? "Menang" : "Kalah";
//   } else if (p == "Kertas") {
//     hasil = (comp == "Batu") ? "Menang" : "Kalah";
//   } else {
//     hasil = "Yang anda masukkan tidak ada dalam daftar";
//   }

//   alert(
//     "Pilihan Yang Anda Pilih Adalah " +
//       p +
//       " Dan Komputer memilih " +
//       comp +
//       "\nMaka Hasilnya Kamu " +
//       hasil
//   );

//   ulang = confirm("mau lagi ga?");
// }

//============================================

// function volumeKubus(a) {
//   var total = a * a * a;

//   return total;
// }

// var b = volumeKubus(8);

// console.log(b);

// //============================================

// function tambah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var coba = tambah(1, 2, 3, 4, 8, 1, 67, 3);
// console.log(coba);

// //============================================

// function kali(a, b) {
//   return a * b;
// }

// var r = kali(tambah(2, 3), tambah(5, 1));
// console.log(r);

// //============================================

// var a = 1;

// function tes(a) {
//   console.log(a);
// }

// tes(2);
// console.log(a);

//============================================

// var mahasiswa = [];

// mahasiswa = ["Alvino", "Radyo", "Danisworo"];

// mahasiswa.push("bin"); // digunakan untuk menambah suatu elemen di akhir
// mahasiswa.pop(); // digunakan untuk menghapus elemen terakhir
// mahasiswa.unshift("supriyadi"); // digunakan untuk menambah suatu elemen di awal array
// mahasiswa.shift(); // digunakan untuk menghapus elemen di awal array
// mahasiswa.splice(2, 0, "Anindyos"); // (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2......)
// var mhs = mahasiswa.slice(1, 4);
// console.log(mhs.join(" "));
// console.log(mahasiswa.join(" ")); // untuk menggabungkan elemen elemen array

// var angka = [1, 5, 2, 9, 10, 3, 100, 8];
// // angka.sort(function (a, b) {
// //   return a - b;
// // });
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2.join(" "));
// var angka3 = angka.find(function (y) {
//   return y == 5;
// });
// console.log(angka3);

// var nama = [
//   "agung",
//   "agang",
//   "aging",
//   "agong",
//   "agoeng",
//   "ageeng",
//   "againg",
//   "agoing",
// ];

// var nama2 = nama.map(function (e, i) {
//   console.log(nama.join(" "));
// });

// //============================================

// object literal
// var mhs = {
//   nama: "Alvino Radyo Danisworo",
//   umur: 19,
//   ips: [3.25, 3.8, 4.0, 4.0, 3.9, 4.0],
//   alamat: {
//     jalan: "Jl. Abimanyu Jetis RT 01 RW 10",
//     Kelurahan: "Makamhaji",
//     kecamatan: "Kartasura",
//     kota: "Sukoharjo",
//   },
// };

// function declaration

// function objectMahasiswa(nama, nim, email, jurusan) {
//   var mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.nim = nim;
//   mahasiswa.email = email;
//   mahasiswa.jurusan = jurusan;
//   return mahasiswa;
// }

// var mhs2 = objectMahasiswa(
//   "Eileen Anindya Putri Maheswari",
//   "B8956",
//   "eileenanindya@gmail.com",
//   "Computer science"
// );

// // constructor

// function Mahasiswa(name, nip, asalSekolah, asalKota) {
//   this.name = name;
//   this.nip = nip;
//   this.sekolah = asalSekolah;
//   this.kota = asalKota;
// }

// var mhs3 = new Mahasiswa(
//   "Allen Bagas Alhamdulillah",
//   "A891652",
//   "SMA N 1 Surakarta",
//   "Surakarta"
// );

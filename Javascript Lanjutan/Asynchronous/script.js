// const token = ~~[Math.random() * 1234567]; //"~~" digunakan untuk membulatkan angka

// const pictures = ["1.jpg", "2.jpg", "3.jpg"];

// // function login(username) {
// //   console.log("OH TERNYATA BISA BUAT KAYAK GINI BJIR");
// //   setTimeout(() => {
// //     return { token, username };
// //   }, 100);
// // }
// // bakalan rusak karena langkah selanjutnya terhubung sama yang lain

// function login(username, callback) {
//   console.log("processing username now...");
//   setTimeout(() => {
//     callback({ token, username });
//   }, 100);
// }
// // kalo gini ga bakal rusak

// function getUser(token, callback) {
//   console.log("processing apikey now...");
//   if (token)
//     setTimeout(() => {
//       callback({ apiKey: "xkey123" });
//     }, 500);
// }

// function getPictures(apiKey, callback) {
//   console.log("processing pictures now...");
//   if (apiKey)
//     setTimeout(() => {
//       callback({ pic: pictures });
//     });
// }

// // const user = login("Alvino Radyo Danisworo");
// // console.log(user);

// login("Alvino Radyo Danisworo", function (response) {
//   const { token } = response;
//   getUser(token, function (response) {
//     const { apiKey } = response;
//     getPictures(apiKey, function (response) {
//       const { pic } = response;
//       console.log(pic);
//     });
//   });
// });

// // const apiKey = getUser(user.token);
// // console.log(apiKey);

// // console.log(user);

// // const getUserPictures = getPictures(apiKey);
// // console.log(getUserPictures);

const token = ~~[Math.random() * 1234567];

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

// function login(username) {
//   console.log("processing username now...");
//   setTimeout(() => {
//     return { token, username };
//   }, 100);
// }

// function getUser(token) {
//   console.log("processing apikey now...");
//   if (token)
//     setTimeout(() => {
//       return { apiKey: "xkey123" };
//     }, 500);
// }

// function getPictures(apiKey) {
//   console.log("processing pictures now...");
//   if (apiKey)
//     setTimeout(() => {
//       return { pic: pictures };
//     });
// }

//=======================================

//promise

// function login(username) {
//   console.log("processing username now...");
//   return new Promise((success, failed) => {
//     setTimeout(() => {
//       if (username != "Alvino") failed("Sorry, wrong data");
//       success({ token, username });
//     }, 1000);
//   });
// }

// function getUser(token) {
//   console.log("processing apikey now...");
//   return new Promise((success, failed) => {
//     if (!token) failed("Sorry, wrong token");
//     setTimeout(() => {
//       success({ apiKey: "xkey123" });
//     }, 1000);
//   });
// }

// function getPictures(apiKey) {
//   console.log("processing pictures now...");
//   return new Promise((success, failed) => {
//     if (apiKey != "xkey123") failed("Sorry, wrong apiKey");
//     setTimeout(() => {
//       success({ pic: pictures });
//     }, 1000);
//   });
// }

// const user = login("Alvino");
// user
//   .then(function (response) {
//     const { token } = response;
//     console.log(response);
//     getUser(token)
//       .then(function (response) {
//         const { apiKey } = response;
//         console.log(response);
//         getPictures(apiKey).then(function (response) {
//           console.log(response);
//         });
//       })
//       .catch((err) => console.log(err.message));
//   })
//   .catch((err) => console.log(err.message));

//=======================================

// Async await

function login(username) {
  console.log("processing username now...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != "Alvino") failed("Sorry, wrong data");
      success({ token, username });
    }, 100);
  });
}

function getUser(token) {
  console.log("processing apikey now...");
  return new Promise((success, failed) => {
    if (!token) failed("Sorry, wrong token");
    setTimeout(() => {
      success({ apiKey: "xkey123" });
    }, 100);
  });
}

function getPictures(apiKey) {
  console.log("processing pictures now...");
  return new Promise((success, failed) => {
    if (!apiKey) failed("Sorry, wrong apiKey");
    setTimeout(() => {
      success({ pic: pictures });
    }, 100);
  });
}

async function userDisplay() {
  const { token } = await login("Alvino");
  const { apiKey } = await getUser(token);
  const { pic } = await getPictures(apiKey);

  console.log(
    `token anda : ${token}
    apikey anda : ${apiKey}
    gambar anda : ${pic}`
  );
}

userDisplay();

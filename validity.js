const csv = require("csv-parser");

const fs = require("fs");
let results = [];
let duplicates = [];

fs.createReadStream("normal.csv")
  .pipe(csv({}))
  .on("data", (data) => {
    results.push(data);

    // for (let i = 0; i < results.length; i++) {
    //   let email_ad = results[i].email;
    //   for (let j = i + 1; j < results.length; j++) {
    //     if (email_ad === results[j].email) {
    duplicates.push(results[0]);
    //     }
    //   }
    // }
  })
  .on("end", () => {
    console.log(duplicates);
  });

// function getDuplicates(arr) {
//   let duplicates = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i].email === arr[j].email) {
//         duplicates.push(arr[i]);
//         duplicates.push(arr[j]);
//       }
//     }
//   }
// }
// console.log(results);
// //console.log(getDuplicates(results));

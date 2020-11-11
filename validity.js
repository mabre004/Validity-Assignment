// const express = require("express");
// const app = express();

// app.listen(3000, () => console.log("listening at port 3000"));
// app.use(express.static("public"));
// app.post("/", printToWebPage(finalDuplicate, nonDuplicates));

const { distance, closest } = require("fastest-levenshtein");

/*
  Since the data is an Array of json Objects when it's parsed, I will create a Class called Employee.
  Then I'll assign each json Object, using Object.assign(), to an Employee Object
  and store them in an Array of Employee Objects named emp[]
*/

class Employee {
  set firstName(first_name) {
    this.first_name = first_name;
  }
  set lastName(last_name) {
    this.last_name = last_name;
  }
  set company(company) {
    this.comp = company;
  }
  set email(email) {
    this.em = email;
  }
  set address1(address1) {
    this.add1 = address1;
  }
  set address2(address2) {
    this.add2 = address2;
  }
  set zip(zip) {
    this.zipCode = zip;
  }
  set city(city) {
    this.cit = city;
  }
  set state_long(state_long) {
    this.state_lon = state_long;
  }
  set state(state) {
    this.st = state;
  }
  set phone(phone) {
    this.phon = phone;
  }
  get firstName() {
    return this.first_name;
  }
  get lastName() {
    return this.last_name;
  }
  get company() {
    return this.comp;
  }
  get email() {
    return this.em;
  }
  get address1() {
    return this.add1;
  }
  get address2() {
    return this.add2;
  }
  get zip() {
    return this.zipCode;
  }
  get city() {
    return this.cit;
  }
  get state_long() {
    return this.state_lon;
  }
  get state() {
    return this.st;
  }
  get phone() {
    return this.phon;
  }
}
function toString(emp) {
  return (
    emp.first_name +
    "," +
    emp.last_name +
    "," +
    emp.comp +
    "," +
    emp.em +
    "," +
    emp.add1 +
    "," +
    emp.add2 +
    "," +
    emp.zipCode +
    "," +
    emp.cit +
    "," +
    emp.state_lon +
    "," +
    emp.st +
    "," +
    emp.phon
  );
}
let emp = [];
let duplicates = [];
const csv = require("csvtojson");

const converter = csv()
  .fromFile("normal.csv")
  .then((json) => {
    let e;
    json.forEach((row) => {
      e = new Employee(); // New Employee Object
      Object.assign(e, row); // Assign json to the new Employee
      emp.push(e); // Add the Employee to the Array
    });
  })
  .then(() => {
    for (let i = 0; i < emp.length; i++) {
      for (let j = i + 1; j < emp.length; j++) {
        if (distance(emp[i].email, emp[j].email) === 0) {
          duplicates.push(emp[i]);
          duplicates.push(emp[j]);
        }
      }
    }

    let duplicateRemove = new Set(duplicates);

    let finalDuplicate = [...duplicateRemove];

    const nonDuplicates = emp.filter(function (x) {
      return finalDuplicate.indexOf(x) < 0;
    }); // remove duplicates from the first array
    function printToWebPage(finalDuplicate, nonDuplicates) {
      console.log(
        "----------------------Duplicates---------------------------------"
      );
      for (let employee of finalDuplicate) {
        console.log(toString(employee));
      }

      console.log(
        "----------------------Non Duplicates------------------------------------"
      );

      for (let employee of nonDuplicates) {
        console.log(toString(employee));
      }
    }

    console.log(printToWebPage(finalDuplicate, nonDuplicates));
    //console.log(nonDuplicates);
  });

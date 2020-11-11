/*
  Since the data is an Array of json Objects, I will create a Class called Employee.
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
let emp = [];

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
    let duplicates = [];
    emp.forEach((em) => {
      //for(let i = 0; )
      console.log(em.email); // Invoke the Name getter
    });
  });

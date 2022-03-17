const student = require("./information.js");

let cowsay = require("cowsay");

console.log(cowsay.say({
     text : `Hello, i'm ${student.name} from ${student.campus} campus`
 }));
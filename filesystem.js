const f = require('fs')
//file system(fs)
// console.lof(f)


// asynconas function (readfile baad me print karega kyuki ise time lagega print karne me)
f.readFile(__dirname+"/pn.txt","utf8",(err,data)=>{
    console.log(data);
});
console.log("hello gwalior1234")

const data = f.readFileSync(__dirname + "/pn.txt","utf-8");
console.log(data);

console.log("hello gwalior")
console.log("hello gwalior1")
console.log("hello gwalior23")
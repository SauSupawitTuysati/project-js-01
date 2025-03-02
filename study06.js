// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=
let x = 10;
x = x + 5;
let y = 2;
y = y + 7 * x / 2;

// Nullish Coalescing Operator __??__
let a = null;
console.log(a ?? 888);

// Ternary Conditional Operator __?__:__
let c = 10<15?'hello':'goodbye';
console.log(c);

let d = 'Somjai'<'Sombat'?555:666;
console.log(d);

// Spread Operator __...__
let ee = [123,456,789]
let ff = [789,456,123]
let gg = [...ee,...ff]
console.log(gg);



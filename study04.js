// type conversion การแปลงชนิดข้อมูล
// คือ การเปลี่ยนชนิดข้อมูลจากชนิดหนึ่งเป็นอีกชนิดหนึ่ง
//------------------------------
// string conversion
let s_to_n = '10';
console.log(Number(s_to_n) / 2);
console.log(Number(s_to_n) * 2);

// number conversion
let n1_to_s = 10;
let n2_to_s = 20.5;
console.log(n1_to_s.toString() + n2_to_s.toString());
console.log(n1_to_s.toFixed(2));

// boolean conversion
let t = true;
let f = false;
console.log(Number(t),Number(f));

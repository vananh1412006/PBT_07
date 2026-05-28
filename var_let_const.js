// ==========================================
// CÂU A1: KIỂM CHỨNG VAR / LET / CONST
// ==========================================

// Đoạn 1: Hoisting với var
console.log("--- Đoạn 1 ---");
console.log(x); // Kết quả: undefined
var x = 5;

// Đoạn 2: Temporal Dead Zone với let
console.log("--- Đoạn 2 ---");
try {
    console.log(y); // Sẽ văng lỗi ở đây
    let y = 10;
} catch (error) {
    console.error("Lỗi Đoạn 2:", error.message);
}

// Đoạn 3: Gán lại hằng số const
console.log("--- Đoạn 3 ---");
try {
    const z = 15;
    z = 20; // Sẽ văng lỗi ở đây
    console.log(z);
} catch (error) {
    console.error("Lỗi Đoạn 3:", error.message);
}

// Đoạn 4: Thay đổi ruột mảng const
console.log("--- Đoạn 4 ---");
const arr = [1, 2, 3];
arr.push(4);
console.log("Mảng sau push:", arr); // Kết quả: [1, 2, 3, 4]

// Đoạn 5: Block Scope của let
console.log("--- Đoạn 5 ---");
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a); // Kết quả: 2
}
console.log("Ngoài block:", a); // Kết quả: 1

// ==========================================
// CÂU A2: KIỂM CHỨNG DATA TYPES & COERCION
// ==========================================
console.log("\n--- CÂU A2 RUNTIME CHECK ---");
console.log("typeof null:", typeof null);              
console.log("typeof undefined:", typeof undefined);         
console.log("typeof NaN:", typeof NaN);              
console.log('"5" + 3:', "5" + 3);                 
console.log('"5" - 3:', "5" - 3);                 
console.log('"5" * "3":', "5" * "3");              
console.log("true + true:", true + true);            
console.log("[] + []:", [] + []);                
console.log("[] + {}:", [] + {});                
console.log("{} + []:", {} + []);

// ==========================================
// CÂU A3: SO SÁNH == VS ===
// ==========================================
console.log("\n--- CÂU A3 RUNTIME CHECK ---");
console.log('5 == "5":', 5 == "5");                
console.log('5 === "5":', 5 === "5");               
console.log('null == undefined:', null == undefined);       
console.log('null === undefined:', null === undefined);      
console.log('NaN == NaN:', NaN == NaN);             
console.log('0 == false:', 0 == false);             
console.log('0 === false:', 0 === false);            
console.log('"" == false:', "" == false);